import { readFileSync, writeFileSync, mkdirSync, cpSync, readdirSync, existsSync, rmSync } from "node:fs";
import { resolve, join, basename, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const legacy = resolve(app, "..");
const media = join(app, "public", "media");
const destArticles = join(app, "src", "content", "articles");
const dataPath = join(app, "src", "data", "catalog.json");
const sourceArticles = join(legacy, "src", "markdown-pages");

function copyFrom(relative, to) {
  const src = join(legacy, relative);
  if (!existsSync(src)) throw new Error("Origem ausente: " + src);
  mkdirSync(dirname(to), {recursive:true});
  cpSync(src,to,{recursive:true,force:true});
}
mkdirSync(media,{recursive:true});
copyFrom("src/components/images", join(media,"clinic"));
copyFrom("src/components/Exames/images", join(media,"exams"));
copyFrom("src/components/Tratamentos/images", join(media,"treatments"));
copyFrom("src/images", join(media,"legacy"));

// Original photos and article-local images stay in the repository.
// Copy the original image directories to the root of the static site.
for (const entry of readdirSync(sourceArticles,{withFileTypes:true})) {
  if (entry.isDirectory()) copyFrom("src/markdown-pages/"+entry.name, join(app,"public",entry.name));
}

mkdirSync(destArticles,{recursive:true});
const recognized=[];
for (const entry of readdirSync(sourceArticles,{withFileTypes:true})) {
  if (!entry.isFile() || !/\.(md|markdown)$/i.test(entry.name)) continue;
  const raw=readFileSync(join(sourceArticles,entry.name),"utf8").replace(/^\uFEFF/,"");
  const front=raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!front) throw new Error("Frontmatter ausente em "+entry.name);
  const slug=front[1].match(/^slug:\s*["']?\/([^"' \r\n]+)/m)?.[1]?.replace(/\/$/,"");
  if (!slug) throw new Error("Slug ausente em "+entry.name);
  let title=front[1].match(/^title:\s*(.+)$/m)?.[1]?.trim()||"";
  title=title.replace(/^["']|["']$/g,"").trim();
  if (!title && slug==="como-usar-lentes") title="Instruções para uso e conservação das lentes de contato";
  if (!title) throw new Error("Título ausente em "+entry.name);
  let body=raw.slice(front[0].length);
  body=body.replace(/(?:\.\.\/)+src\/images\//g,"/media/legacy/");
  // Gatsby originally resolved markdown images relative to source file; point to preserved public directories.
  body=body.replace(/(["'(])\.\/([a-zA-Z0-9_-]+)\//g,(_,q,folder)=>q+"/"+folder+"/");
  body=body.replace(/(\]\()\.\/([a-zA-Z0-9_-]+)\//g,(_,q,folder)=>q+"/"+folder+"/");
  // Fix the former broken stray bracket in the original ceratoconus article.
  if (slug==="ceratocone") body=body.replace(/<\/div>\]/g,"</div>");
  writeFileSync(join(destArticles,slug+".md"),"---\nslug: "+JSON.stringify(slug)+"\ntitle: "+JSON.stringify(title)+"\n---\n"+body);
  recognized.push(slug);
}
if (recognized.length!==18) throw new Error("Esperados 18 artigos; encontrados "+recognized.length);

let source=readFileSync(join(legacy,"src","components","allData.js"),"utf8");
source=source.replace(/^import\s+React\s+from\s+["']react["'];?\s*$/gm,"");
source=source.replace(/^import\s+(\w+)\s+from\s+["'](\.\/[^"']+)["'];?\s*$/gm, (_full,variable,importPath)=>{
  let mapped=importPath.replace(/^\.\//,"").replace(/^Exames\/images\//,"/media/exams/").replace(/^Tratamentos\/images\//,"/media/treatments/");
  return "const "+variable+"="+JSON.stringify(mapped)+";";
});
source=source.replace(/export const createLink[\s\S]*?\/\/ --- DOENÇAS OCULARES DATA ---/,"const createLink = (href,label)=>({href,label});\n");
source=source.replace(/\bexport const\b/g,"const");
const names=[
  "examesConsultas","examesCornea","examesLente","examesGlaucoma","examesRetina",
  "tratamentosData","catarataLente","conjuntiva","corneaData","glaucomaData",
  "lentesData","oftalmoPediatria","olhoSeco","refracao","retinaVitreo"
];
const json=vm.runInNewContext(source+"\nJSON.stringify({"+names.join(",")+"})",{}, {timeout:3000});
const catalog=JSON.parse(json);
for(const name of names) if(!Array.isArray(catalog[name])) throw new Error("Coleção inválida: "+name);
mkdirSync(dirname(dataPath),{recursive:true});
writeFileSync(dataPath,JSON.stringify(catalog,null,2)+"\n");
console.log("Migração preparada:",recognized.length,"artigos,",
  ["examesConsultas","examesCornea","examesLente","examesGlaucoma","examesRetina"].reduce((n,key)=>n+catalog[key].length,0),
  "exames,",
  catalog.tratamentosData.reduce((n,s)=>n+s.items.length,0),"tratamentos.");
