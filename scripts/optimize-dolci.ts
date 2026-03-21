import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'client/public/images/dolci';
const DEST_DIR = 'client/src/assets/optimized/dolci';
const MAX_FILE_SIZE = 150 * 1024; // 150KB as requested (150-200KB)

async function optimizeImages() {
  try {
    // Ensure dest dir exists
    await fs.mkdir(DEST_DIR, { recursive: true });

    const files = await fs.readdir(SRC_DIR);
    console.log(`Found ${files.length} files in ${SRC_DIR}`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
        continue;
      }

      console.log(`Processing image: ${file}...`);
      const inputPath = path.resolve(SRC_DIR, file);
      const outputFilename = path.basename(file, ext).replace(/\s+/g, '_').replace(/[()]/g, '') + '.webp';
      const outputPath = path.resolve(DEST_DIR, outputFilename);

      console.log(`Optimizing ${file}...`);

      let quality = 85;
      let buffer = await sharp(inputPath)
        .resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();

      while (buffer.length > MAX_FILE_SIZE && quality > 10) {
        quality -= 5;
        buffer = await sharp(inputPath)
          .resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true })
          .webp({ quality })
          .toBuffer();
      }

      await fs.writeFile(outputPath, buffer);
      console.log(`Saved ${outputFilename} (${(buffer.length/1024).toFixed(2)} KB, Quality: ${quality})`);
      
      // Delete original
      await fs.unlink(inputPath);
    }
    console.log('Optimization complete!');
  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

optimizeImages();
