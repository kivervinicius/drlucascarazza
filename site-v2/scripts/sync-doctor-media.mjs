/**
 * Verificação determinística dos arquivos tratados e versionados no GitHub.
 * Nenhuma dependência do WordPress/Hostinger no build ou no navegador.
 * A origem de cada fotografia é preservada em assets/doctor/originals/.
 */
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const files = ["hero", "portrait", "portrait-secondary", "brand"];
for (const file of files) {
  for (const relative of [
    `assets/doctor/originals/${file}.webp`,
    `public/media/doctor/${file}.webp`
  ]) {
    const path = resolve(root, relative);
    const [data, info] = await Promise.all([readFile(path), stat(path)]);
    if (info.size < 1000 || data.toString("ascii", 0, 4) !== "RIFF" || data.toString("ascii", 8, 12) !== "WEBP") {
      throw new Error(`Imagem de origem ou tratada inválida: ${relative}`);
    }
    console.log("Versão local validada:", relative, info.size, "bytes");
  }
}
