import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVIZI_DIR = path.resolve(__dirname, "../client/src/pages/servizi");

async function updatePages() {
  const files = await fs.readdir(SERVIZI_DIR);
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    
    const slug = path.basename(file, '.tsx');
    const fullPath = path.join(SERVIZI_DIR, file);

    const newContent = `import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

export default function ${slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Page() {
  const data = SERVICES_DATA["${slug}"];
  
  if (!data) return null;

  return (
    <ServiceLayout
      title={data.title}
      category={Array.isArray(data.category) ? data.category[0] : data.category}
      description={data.description}
      icon={data.icon}
    />
  );
}
`;
    await fs.writeFile(fullPath, newContent, 'utf-8');
    console.log(`Updated page for: ${slug}`);
  }
}

updatePages().catch(console.error);
