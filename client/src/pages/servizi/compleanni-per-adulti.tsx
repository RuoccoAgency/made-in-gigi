import { useMemo, useState } from "react";
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



export default function CompleanniAdultiPage() {
  const [filter, setFilter] = useState("Tutto");
  const data = SERVICES_DATA["compleanni-per-adulti"];

  const allItems = useMemo(() => {
    const adultImages = Object.entries(adultiModules).map(([path, src]) => {
      // The image COSTO_150_EURO is actually a graduation setup
      const isLaurea = path.includes('COSTO_150_EURO');
      return { src: src as string, category: isLaurea ? "Lauree" : "Compleanni" };
    });

    const laureeImages = Object.entries(laureeModules)
      .filter(([path]) => !path.includes('18.13.02_(5)') && !path.includes('18.13.02_(6)'))
      .map(([_, src]) => ({
        src: src as string,
        category: "Lauree"
      }));

    return [...adultImages, ...laureeImages];
  }, []);

  const filteredImages = useMemo(() => {
    const items = filter === "Tutto" 
      ? allItems 
      : allItems.filter(it => it.category === filter);
    return items.map(it => it.src);
  }, [filter, allItems]);

  if (!data) return null;

  return (
    <ServiceLayout
      title={data.title}
      category={Array.isArray(data.category) ? data.category[0] : data.category}
      description={data.description}
      icon={data.icon}
      images={filteredImages}
      initialImageCount={6}
      filters={["Tutto", "Compleanni", "Lauree"]}
      activeFilter={filter}
      onFilterChange={setFilter}
      gridClassName="grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
    />
  );
}
