import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.resolve(__dirname, '../client/public/images');
const MAX_WIDTH = 1200;
const QUALITY = 80;

// Disable sharp cache to avoid file locks
sharp.cache(false);

async function walk(dir: string): Promise<string[]> {
  let files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function start() {
  console.log(`Starting image optimization in ${TARGET_DIR}...`);
  const files = await walk(TARGET_DIR);
  console.log(`Found ${files.length} files.`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const isImage = ['.jpg', '.jpeg', '.png', '.jfif'].includes(ext);
    
    if (isImage) {
      const webpPath = file.substring(0, file.lastIndexOf('.')) + '.webp';
      try {
        console.log(`Processing: ${file}`);
        const inputBuffer = await fs.readFile(file);
        let s = sharp(inputBuffer);
        const metadata = await s.metadata();
        
        if (metadata.width && metadata.width > MAX_WIDTH) {
          s = s.resize(MAX_WIDTH);
        }
        
        const outputBuffer = await s.webp({ quality: QUALITY }).toBuffer();
        
        await fs.writeFile(webpPath, outputBuffer);
        await fs.unlink(file);
        console.log(`- Success: ${webpPath}`);
      } catch (err) {
        console.error(`- Error processing ${file}:`, err);
      }
    } else if (ext === '.webp') {
       try {
          const inputBuffer = await fs.readFile(file);
          const s = sharp(inputBuffer);
          const metadata = await s.metadata();
          if (metadata.width && metadata.width > MAX_WIDTH) {
             console.log(`Resizing large webp: ${file}`);
             const outputBuffer = await sharp(inputBuffer).resize(MAX_WIDTH).webp({ quality: QUALITY }).toBuffer();
             await fs.writeFile(file, outputBuffer);
             console.log(`- Resized large webp.`);
          }
       } catch (err) {
          console.error(`- Error optimizing existing webp ${file}:`, err);
       }
    }
  }
  console.log('Optimization complete!');
}

start();
