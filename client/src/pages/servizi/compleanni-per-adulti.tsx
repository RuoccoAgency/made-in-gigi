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

const getImagesFromModules = (modules: Record<string, any>) => Object.values(modules) as string[];

export default function CompleanniAdultiPage() {
  const [filter, setFilter] = useState("Tutto");
  const data = SERVICES_DATA["compleanni-per-adulti"];

  const allItems = useMemo(() => {
    const rawImages = [
      ...getImagesFromModules(adultiModules),
      ...getImagesFromModules(laureeModules)
    ];

    return rawImages.map((src, idx) => {
      // User Logic: 1st, 2nd, 4th, 5th (indices 0, 1, 3, 4) are "Compleanni"
      // Everything else is "Lauree"
      const isCompleanno = [0, 1, 3, 4].includes(idx);
      return { src, category: isCompleanno ? "Compleanni" : "Lauree" };
    });
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
      filters={["Tutto", "Lauree"]}
      activeFilter={filter}
      onFilterChange={setFilter}
      gridClassName="grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
    />
  );
}
