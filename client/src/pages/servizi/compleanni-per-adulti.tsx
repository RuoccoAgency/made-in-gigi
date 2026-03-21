import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

// Dynamically load images from optimized folders
const adultiModules = import.meta.glob("@/assets/optimized/allestimenti-adulti/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const laureeModules = import.meta.glob("@/assets/optimized/lauree/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const IMAGES = [
  ...Object.values(adultiModules),
  ...Object.values(laureeModules)
] as string[];

export default function CompleanniAdultiPage() {
  const data = SERVICES_DATA["compleanni-per-adulti"];
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
