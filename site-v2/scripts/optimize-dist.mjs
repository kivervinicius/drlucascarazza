/**
 * Otimização pós-build: converte fotografias legadas para WebP e reescreve
 * referências no HTML/CSS/JS gerados, sem mudar URL de páginas ou artigos.
 *
 * Os arquivos fonte permanecem preservados. O navegador passa a baixar as
 * variantes menores. Scripts de conteúdo devem continuar sem alteração.
 */
import sharp from "sharp";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, relative, extname, dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const app = fileURLToPath(new URL("../", import.meta.url));
const dist = resolve(app, "dist");
const files = [];
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if (entry.isFile()) files.push(path);
  }
}
await visit(dist);

const images = files.filter(path => /\.(jpe?g|png)$/i.test(path) &&
  !path.endsWith(join("media", "doctor", "hero.png")));
const mapping = new Map();
const reservedPaths = new Set(files);
const stats = { converted: 0, unchanged: 0, inputBytes: 0, outputBytes: 0 };
let cursor = 0;

async function optimize(path) {
  const old = await stat(path);
  if (old.size < 24000) { stats.unchanged++; return; }
  try {
    const meta = await sharp(path).metadata();
    if (!meta.width || !meta.height || (meta.pages ?? 1) > 1) {
      stats.unchanged++; return;
    }
    const outfile = path.replace(/\.(jpe?g|png)$/i, ".webp");
    if (outfile === path || reservedPaths.has(outfile)) { stats.unchanged++; return; }
    reservedPaths.add(outfile);
    const processed = await sharp(path).rotate()
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 100, effort: 4 }).toBuffer();
    if (processed.length >= old.size * 0.94) { stats.unchanged++; return; }
    await writeFile(outfile, processed);
    const from = relative(dist, path).split(sep).join("/");
    const to = relative(dist, outfile).split(sep).join("/");
    mapping.set(from, to);
    stats.converted++;
    stats.inputBytes += old.size;
    stats.outputBytes += processed.length;
  } catch (error) {
    throw new Error("Falha ao otimizar " + relative(dist, path) + ": " + error.message);
  }
}
async function worker() {
  for (;;) {
    const i = cursor++;
    if (i >= images.length) return;
    await optimize(images[i]);
  }
}
await Promise.all(Array.from({ length: 4 }, worker));

// Conversão automática e determinística de paths. Os originais são
// mantidos como fallback para URLs externas já compartilhadas.
const rewrite = files.filter(path => /\.(html|css|js|xml)$/i.test(path));
let rewrittenFiles = 0;
for (const path of rewrite) {
  let text = await readFile(path, "utf8");
  const before = text;
  for (const [from, to] of mapping.entries()) {
    text = text.replaceAll("/" + from, "/" + to);
    const encoded = encodeURI(from);
    if (encoded !== from) text = text.replaceAll("/" + encoded, "/" + encodeURI(to));
  }
  if (before !== text) {
    await writeFile(path, text);
    rewrittenFiles++;
  }
}
const reduction = stats.inputBytes ? ((1 - stats.outputBytes/stats.inputBytes)*100).toFixed(1) : "0";
const report = {
  ...stats, reductionPercent: Number(reduction), rewrittenFiles,
  note: "WebP gerado sem alteração de identidade, fotos originais preservadas para compatibilidade."
};
await writeFile(join(dist, "media-optimization-report.json"), JSON.stringify(report, null, 2) + "\n");
console.log("Otimização do preview:", JSON.stringify(report));
