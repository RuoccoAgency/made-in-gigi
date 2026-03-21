import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

// Dynamically load all webp images from the optimized assets folder
// Using import.meta.glob correctly for Vite 5+ to get string URLs
const imageModules = import.meta.glob("@/assets/optimized/mascotte/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const IMAGES = Object.values(imageModules) as string[];

export default function MascottePage() {
  const data = SERVICES_DATA["mascotte"];
  
  if (!data) return null;

  return (
    <ServiceLayout
      title={data.title}
      category={Array.isArray(data.category) ? data.category[0] : data.category}
      description={data.description}
      icon={data.icon}
      images={IMAGES}
      initialImageCount={6}
      gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    />
  );
}
