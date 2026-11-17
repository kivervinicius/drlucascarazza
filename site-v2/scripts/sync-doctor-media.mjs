/**
 * Preview-only import from the marketing team's WordPress reference.
 * Downloads are copied into the Cloudflare Pages static output, avoiding runtime hotlinks.
 * This is not the durable asset pipeline: original photographs and licenses should be
 * transferred into the Git repository or owned media storage before production launch.
 */
import {mkdir,writeFile} from "node:fs/promises";
import {join,resolve} from "node:path";
import {fileURLToPath} from "node:url";

const root=resolve(fileURLToPath(new URL("../",import.meta.url)));
const output=join(root,"public","media","doctor");
const base="https://floralwhite-rhinoceros-901309.hostingersite.com/wp-content/uploads/2026";
const files=[
  {name:"hero.webp",url:base+"/02/IMG_4763.webp"},
  {name:"portrait.webp",url:base+"/06/IMG_4841-768x1187.webp"},
  {name:"portrait-secondary.webp",url:base+"/02/IMG_4844-593x1024.webp"},
  {name:"brand.webp",url:base+"/02/Logo-Dr-Lucas-Carazza-B.webp"}
];

await mkdir(output,{recursive:true});
for(const file of files){
  const target=join(output,file.name);
  let lastError;
  for(let attempt=0;attempt<3;attempt++){
    try{
      const response=await fetch(file.url,{signal:AbortSignal.timeout(25000),headers:{"Accept":"image/webp,image/*;q=0.8"}});
      if(!response.ok)throw new Error("HTTP "+response.status);
      const data=Buffer.from(await response.arrayBuffer());
      if(data.byteLength<1500||data.byteLength>12_000_000)throw new Error("invalid asset length "+data.byteLength);
      if(data.subarray(0,4).toString()!=="RIFF"||data.subarray(8,12).toString()!=="WEBP")throw new Error("not a WebP image");
      await writeFile(target,data);
      console.log("Doctor-owned marketing media:",file.name,(data.byteLength/1024).toFixed(1)+" KB");
      lastError=undefined;break;
    }catch(error){lastError=error;console.warn("Fetch attempt "+(attempt+1)+" failed for "+file.name+": "+error.message);}
  }
  if(lastError)throw new Error("Cannot prepare required marketing photograph "+file.name+": "+lastError.message);
}
