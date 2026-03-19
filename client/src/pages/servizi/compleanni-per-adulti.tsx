import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

const IMAGES = [
  "/images/allestimenti per adulti/160 EURO CON 3 STRUTTURE ORO E ARCO 2 M.webp",
  "/images/allestimenti per adulti/250 EURO COME FOTO.webp",
  "/images/allestimenti per adulti/293324034_5523000047756758_2071711076166925323_n.webp",
  "/images/allestimenti per adulti/COSTO 150 EURO.webp",
  "/images/allestimenti per adulti/COSTO 250 EURO COME FOTO.webp",
  "/images/allestimenti per adulti/COSTO 300 EURO COME FOTO.webp",
  "/images/allestimenti per adulti/COSTO 300 EURO.webp",
  "/images/allestimenti per adulti/COSTO 350 EURO.webp",
];

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
    />
  );
}
