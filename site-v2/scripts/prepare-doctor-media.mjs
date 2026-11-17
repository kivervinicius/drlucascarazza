/**
 * Prepara as imagens de apresentação a partir dos originais preservados.
 * Não recorta, altera identidade, altera vestimenta ou usa IA generativa.
 * O hero original possui canal alfa; a foto quadrada com fundo incorporado NÃO possui.
 */
import sharp from "sharp";
import { readFile, mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const original = resolve(root, "assets/doctor/originals");
const target = resolve(root, "public/media/doctor");
await mkdir(target, { recursive: true });

const hero = resolve(original, "hero.webp");
const meta = await sharp(hero).metadata();
if (!meta.hasAlpha) throw new Error("O retrato do WordPress não tem transparência: conversão cancelada");
await sharp(hero).webp({ quality: 86, alphaQuality: 100, effort: 5 })
  .toFile(resolve(target, "hero-cutout.webp"));
await sharp(hero).png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(resolve(target, "hero.png"));

const secondary = resolve(original, "portrait-secondary.webp");
await sharp(secondary).resize({ width: 720, withoutEnlargement: true })
  .webp({ quality: 82, effort: 5 }).toFile(resolve(target, "portrait-neutral.webp"));

const consultation = resolve(root, "assets/doctor/user-provided/consultation-equipment.png");
await sharp(consultation).resize({ width: 1100, withoutEnlargement: true })
  .webp({ quality: 82, effort: 5 }).toFile(resolve(target, "consultation.webp"));

for (const name of ["hero-cutout.webp", "hero.png", "portrait-neutral.webp", "consultation.webp"]) {
  console.log("Foto preparada:", name, (await stat(resolve(target, name))).size, "bytes");
}
