import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../client/src");

async function walk(dir: string): Promise<string[]> {
  const files = await fs.readdir(dir);
  const paths: string[] = [];
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = await fs.stat(fullPath);
    if (stats.isDirectory()) {
      paths.push(...(await walk(fullPath)));
    } else if (/\.(ts|tsx)$/.test(file)) {
      paths.push(fullPath);
    }
  }
  return paths;
}

async function replaceExtensions() {
  const files = await walk(SRC_DIR);
  for (const file of files) {
    let content = await fs.readFile(file, "utf-8");
    const originalContent = content;

    // Replace various image extensions with .webp
    // Looking for patterns like "/images/... .jpg" or similar
    content = content.replace(/\.(jpg|jpeg|png)(["'])/gi, ".webp$2");

    if (content !== originalContent) {
      await fs.writeFile(file, content, "utf-8");
      console.log(`Updated references in: ${path.relative(SRC_DIR, file)}`);
    }
  }
}

replaceExtensions().catch(console.error);
