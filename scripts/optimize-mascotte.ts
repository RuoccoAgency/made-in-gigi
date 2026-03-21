import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'client/public/images/mascotte';
const DEST_DIR = 'client/src/assets/optimized/mascotte';
const MAX_FILE_SIZE = 200 * 1024; // 200KB

async function optimizeImages() {
  try {
    const files = await fs.readdir(SRC_DIR);
    console.log(`Found ${files.length} files in ${SRC_DIR}`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
        console.log(`Skipping non-image file: ${file}`);
        continue;
      }

      const inputPath = path.join(SRC_DIR, file);
      const outputFilename = path.basename(file, ext) + '.webp';
      const outputPath = path.join(DEST_DIR, outputFilename);

      console.log(`Optimizing ${file}...`);

      let quality = 85;
      let buffer = await sharp(inputPath)
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();

      // If buffer is still too large, reduce quality up to 40
      while (buffer.length > MAX_FILE_SIZE && quality > 40) {
        quality -= 5;
        buffer = await sharp(inputPath)
          .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
          .webp({ quality })
          .toBuffer();
      }

      await fs.writeFile(outputPath, buffer);
      console.log(`Saved ${outputFilename} (Size: ${(buffer.length / 1024).toFixed(2)} KB, Quality: ${quality})`);

      // Remove the original file
      await fs.unlink(inputPath);
      console.log(`Deleted original: ${file}`);
    }

    console.log('Optimization complete!');
  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

optimizeImages();
