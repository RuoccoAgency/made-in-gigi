import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, "../client/public/images");

async function walk(dir: string): Promise<string[]> {
  const files = await fs.readdir(dir);
  const paths: string[] = [];
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = await fs.stat(fullPath);
    if (stats.isDirectory()) {
      paths.push(...(await walk(fullPath)));
    } else {
      paths.push(fullPath);
    }
  }
  return paths;
}

async function optimize() {
  const allFiles = await walk(IMAGES_DIR);
  const imageFiles = allFiles.filter((f) =>
    /\.(jpg|jpeg|png)$/i.test(f)
  );

  console.log(`Found ${imageFiles.length} images to optimize...`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const originalStats = await fs.stat(file);
    totalOriginalSize += originalStats.size;

    const ext = path.extname(file);
    const webpPath = file.replace(ext, ".webp");

    try {
      // Step 1: Convert to WebP
      await sharp(file)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);

      const optimizedStats = await fs.stat(webpPath);
      totalOptimizedSize += optimizedStats.size;

      console.log(`Optimized: ${path.relative(IMAGES_DIR, file)} -> ${path.relative(IMAGES_DIR, webpPath)} (${(optimizedStats.size / originalStats.size * 100).toFixed(2)}%)`);

      // Delete original to save space
      await fs.unlink(file);
    } catch (err) {
      console.error(`Failed to optimize: ${file}`, err);
    }
  }

  console.log("-------------------");
  console.log(`Original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
}

optimize().catch(console.error);
