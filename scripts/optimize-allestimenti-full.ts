import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const MAX_FILE_SIZE = 200 * 1024; // 200KB

async function optimizeFolder(srcDir: string, destDir: string) {
  try {
    const files = await fs.readdir(srcDir).catch(() => []);
    if (files.length === 0) return;
    
    console.log(`Processing ${files.length} files in ${srcDir}...`);

    for (const file of files) {
      try {
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png', '.jfif', '.webp'].includes(ext)) {
          continue;
        }

        const inputPath = path.resolve(srcDir, file);
        const outputFilename = path.basename(file, ext).replace(/\s+/g, '_').replace(/[()]/g, '') + '.webp';
        const outputPath = path.resolve(destDir, outputFilename);

        // Skip if already exists and looks like optimized
        try {
            const stat = await fs.stat(outputPath);
            if (stat.size < MAX_FILE_SIZE + 50000) {
               console.log(`Skipping existing ${outputFilename}`);
               await fs.unlink(inputPath).catch(() => {});
               continue;
            }
        } catch {}

        console.log(`Optimizing ${file}...`);

        let quality = 85;
        let buffer = await sharp(inputPath)
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
        
        await new Promise(resolve => setTimeout(resolve, 100));
        await fs.unlink(inputPath).catch(() => {});
      } catch (innerErr) {
        console.error(`Failed ${file}:`, innerErr);
      }
    }
  } catch (err) {
    console.error(`Root fail for ${srcDir}:`, err);
  }
}

async function run() {
  const tasks = [
    { src: 'client/public/images/battesimo', dest: 'client/src/assets/optimized/battesimo' },
    { src: 'client/public/images/allestimenti per compleanni', dest: 'client/src/assets/optimized/allestimenti-compleanni' },
    { src: 'client/public/images/bioancaneve', dest: 'client/src/assets/optimized/bioancaneve' },
    { src: 'client/public/images/cenerentola', dest: 'client/src/assets/optimized/cenerentola' },
    { src: 'client/public/images/temi con personalizzazione', dest: 'client/src/assets/optimized/temi-personalizzati' },
  ];

  for (const t of tasks) {
    await optimizeFolder(t.src, t.dest);
  }
  console.log('ALL DONE!');
}

run();
