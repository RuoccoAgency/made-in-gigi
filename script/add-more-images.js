import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'C:\\Users\\msie\\.gemini\\antigravity\\brain\\8692fd62-2bf4-4e4f-b188-17d50fe818b7';

const tasks = [
  {
    input: 'media__1774439711730.jpg',
    outputDir: 'c:\\Users\\msie\\OneDrive\\Desktop\\Vibe Coding\\made-in-gigi\\client\\public\\images\\18esimi',
    outputName: '18-birthday-blue-party.webp'
  },
  {
    input: 'media__1774439760610.jpg',
    outputDir: 'c:\\Users\\msie\\OneDrive\\Desktop\\Vibe Coding\\made-in-gigi\\client\\src\\assets\\optimized\\archi',
    outputName: '00-arco-farfalle-peach.webp'
  },
  {
    input: 'media__1774439763166.jpg',
    outputDir: 'c:\\Users\\msie\\OneDrive\\Desktop\\Vibe Coding\\made-in-gigi\\client\\src\\assets\\optimized\\archi',
    outputName: '00-arco-organic-pink-gold.webp'
  }
];

async function processImages() {
  for (const task of tasks) {
    const inputPath = path.join(inputDir, task.input);
    const outputPath = path.join(task.outputDir, task.outputName);
    
    if (!fs.existsSync(task.outputDir)) {
      fs.mkdirSync(task.outputDir, { recursive: true });
    }

    console.log(`Processing ${task.input} -> ${task.outputName}`);
    
    await sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    const stats = fs.statSync(outputPath);
    console.log(`Done: ${task.outputName} (${Math.round(stats.size/1024)} KB)`);
  }
}

processImages();
