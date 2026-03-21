import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const MAX_FILE_SIZE = 200 * 1024; // 200KB

async function optimizeFolder(srcDir: string, destDir: string) {
  try {
    const files = await fs.readdir(srcDir);
    console.log(`Found ${files.length} files in ${srcDir}`);

    for (const file of files) {
      try {
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
          continue;
        }

        const inputPath = path.resolve(srcDir, file);
        const outputFilename = path.basename(file, ext).replace(/\s+/g, '_').replace(/[()]/g, '') + '.webp';
        const outputPath = path.resolve(destDir, outputFilename);

        console.log(`Optimizing ${file}...`);

        let quality = 85;
        let sharpInstance = sharp(inputPath);
        
        let buffer = await sharpInstance
          .resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true })
          .webp({ quality })
          .toBuffer();

        while (buffer.length > MAX_FILE_SIZE && quality > 40) {
          quality -= 5;
          buffer = await sharp(inputPath)
            .resize({ width: 1440, height: 1440, fit: 'inside', withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();
        }

        await fs.writeFile(outputPath, buffer);
        console.log(`Saved ${outputFilename} (${(buffer.length/1024).toFixed(2)} KB, Quality: ${quality})`);
        
        // Use a short delay before unlinking to satisfy Windows
        await new Promise(resolve => setTimeout(resolve, 100));
        await fs.unlink(inputPath);
        console.log(`Deleted original: ${file}`);
      } catch (innerErr) {
        console.error(`Failed to process ${file}:`, innerErr);
      }
    }
  } catch (err) {
    console.error(`Error reading ${srcDir}:`, err);
  }
}

async function run() {
  await optimizeFolder('client/public/images/lauree', 'client/src/assets/optimized/lauree');
  await optimizeFolder('client/public/images/allestimenti per adulti', 'client/src/assets/optimized/allestimenti-adulti');
  console.log('Optimization complete!');
}

run();
