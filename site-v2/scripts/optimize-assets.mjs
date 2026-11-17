/**
 * Build-time image delivery optimizer for catalog cards and legacy photos.
 *
 * The original source files stay intact. Generated *.webp are delivery-only
 * derivatives, not retouching or re-creation of the doctor's supplied photos.
 * User-supplied portraits are already versioned as final WebP and are skipped.
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root=fileURLToPath(new URL("../", import.meta.url));
const mediaRoot=path.join(root,"public","media");
const folders=["clinic","archive","exams","treatments","legacy"];
let optimized=0, saved=0;
const rewrites=new Map();
async function visit(dir) {
  const entries=await readdir(dir,{withFileTypes:true});
  for(const entry of entries){
    const absolute=path.join(dir,entry.name);
    if(entry.isDirectory()) { await visit(absolute); continue; }
    if(!entry.isFile() || !/\.(jpe?g|png)$/i.test(entry.name))continue;
    const out=absolute+".webp";
    const source=await stat(absolute);
    try {
      const info=await sharp(absolute).metadata();
      if(!info.width || !info.height || info.width<10 || info.height<10)continue;
      // Preserve natural aspect ratio: resizing affects only raster resolution,
      // never face, clothes, color grading, background or composition.
      await sharp(absolute).rotate()
        .resize({width:1400,height:1400,fit:"inside",withoutEnlargement:true})
        .webp({quality:83,effort:4}).toFile(out);
      const result=await stat(out);
      if(result.size>=source.size) {
        // Still provide a matching URL but using a WebP never increases bytes:
        // remove the oversize derivative and keep the original reference.
        const {unlink}=await import("node:fs/promises");
        await unlink(out);
        continue;
      }
      const originalUrl="/"+path.relative(path.join(root,"public"),absolute).split(path.sep).join("/");
      rewrites.set(originalUrl,originalUrl+".webp");
      optimized++; saved+=source.size-result.size;
    }catch(error){console.warn("Image optimization skipped",absolute,error.message);}
  }
}
for(const name of folders){
  try{await visit(path.join(mediaRoot,name));}
  catch(e){if(e.code!=="ENOENT")throw e;}
}
const catalogPath=path.join(root,"src","data","catalog.json");
const original=JSON.parse(await readFile(catalogPath,"utf8"));
function replaceRefs(value){
 if(typeof value==="string")return rewrites.get(value)??value;
 if(Array.isArray(value))return value.map(replaceRefs);
 if(value&&typeof value==="object")return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,replaceRefs(v)]));
 return value;
}
await writeFile(catalogPath,JSON.stringify(replaceRefs(original),null,2)+"\n");
const manifest=Object.fromEntries([...rewrites].sort((a,b)=>a[0].localeCompare(b[0])));
await writeFile(path.join(root,"src","data","optimized-images.json"),JSON.stringify(manifest,null,2)+"\n");
console.log("WebP delivery:",optimized,"optimized legacy assets,",Math.round(saved/1024/1024*10)/10,"MiB saved at request time.");
