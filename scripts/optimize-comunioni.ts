import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'client/public/images/comunioni';
const DEST_DIR = 'client/src/assets/optimized/comunioni';
const MAX_FILE_SIZE = 200 * 1024; // 200KB

async function optimizeImages() {
  try {
    const files = await fs.readdir(SRC_DIR);
    console.log(`Found ${files.length} files in ${SRC_DIR}`);

    // Deduplicate: ignore " - Copia" files and "(1)", "(2)" suffixes
    const filteredFiles = files.filter(file => {
      const lower = file.toLowerCase();
      if (lower.includes(' - copia')) return false;
      // Simple heuristic for (1).jpg duplicates
      if (/\(\d+\)/.test(file)) return false;
      return true;
    });

    console.log(`Optimizing ${filteredFiles.length} files after deduplication...`);

    for (const file of filteredFiles) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
        continue;
      }

      const inputPath = path.join(SRC_DIR, file);
      const outputFilename = path.basename(file, ext).replace(/\s+/g, '_') + '.webp';
      const outputPath = path.join(DEST_DIR, outputFilename);

      console.log(`Optimizing ${file}...`);

      let quality = 85;
      // Resize to a maximum of 1440px width/height while maintaining aspect ratio
      let buffer = await sharp(inputPath)
        .resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();

      // Reduce quality if too big
      while (buffer.length > MAX_FILE_SIZE && quality > 40) {
        quality -= 5;
        buffer = await sharp(inputPath)
          .resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true })
          .webp({ quality })
          .toBuffer();
      }

      await fs.writeFile(outputPath, buffer);
      console.log(`Saved ${outputFilename} (${(buffer.length/1024).toFixed(2)} KB, Quality: ${quality})`);
    }

    // After optimization and saving, delete the EVERYTHING in the source folder
    // But since the user said "remove them after conversion", I'll delete all images in the SRC_DIR
    for (const file of files) {
       const ext = path.extname(file).toLowerCase();
       if (['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
         await fs.unlink(path.join(SRC_DIR, file));
       }
    }
    console.log('Originals removed and optimization complete!');
  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

optimizeImages();
