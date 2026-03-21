import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'client/public/images/Laser games luna park';
const BRAIN_DIR = 'C:/Users/msie/.gemini/antigravity/brain/74915696-be69-4b9d-9930-ee18c5d7c84a';
const DEST_DIR = 'client/src/assets/optimized/laboratori';
const MAX_FILE_SIZE = 180 * 1024; // 180KB

async function processImage(inputPath: string, outputFilename: string) {
  console.log(`Optimizing ${path.basename(inputPath)} -> ${outputFilename}...`);
  try {
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

    await fs.writeFile(path.join(DEST_DIR, outputFilename), buffer);
    console.log(`Saved ${outputFilename} (${(buffer.length/1024).toFixed(2)} KB, Quality: ${quality})`);
  } catch (e) {
    console.error(`Failed to process ${inputPath}:`, e);
  }
}

async function optimizeImages() {
  try {
    await fs.mkdir(DEST_DIR, { recursive: true });

    // 1. Process existing in public/images/Laser games luna park
    const publicFiles = await fs.readdir(SRC_DIR);
    for (const file of publicFiles) {
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
            console.log(`Skipping non-image file: ${file}`);
            continue;
        }
        const inputPath = path.resolve(SRC_DIR, file);
        const outputFilename = path.basename(file, ext).replace(/\s+/g, '_').replace(/[()]/g, '') + '.webp';
        await processImage(inputPath, outputFilename);
        // Note: Avoiding unlink for now due to EBUSY, but I'll update the page to assets.
    }

    // 2. Process new images from brain
    const brainImages = [
        { path: path.join(BRAIN_DIR, 'media__1774093286726.jpg'), name: 'glitter_glam_neon.webp' },
        { path: path.join(BRAIN_DIR, 'media__1774093294506.jpg'), name: 'luna_glitter_bar.webp' },
        { path: path.join(BRAIN_DIR, 'media__1774093304134.jpg'), name: 'glitter_bar_case.webp' }
    ];

    for (const img of brainImages) {
        const inputPath = path.resolve(img.path);
        if (await fs.stat(inputPath).catch(() => null)) {
            await processImage(inputPath, img.name);
        } else {
            console.warn(`File not found: ${inputPath}`);
        }
    }

    console.log('Laboratori optimization complete!');
  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

optimizeImages();
