import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

const IMAGES = [
  "/images/18esimi/festa-18-new-2.jpg",
  "/images/18esimi/festa-18-new-3.jpg",
  "/images/18esimi/festa-18-new-4.jpg",
  "/images/18esimi/18-birthday-blue-party.webp",
  "/images/18esimi/160 EURO CON 3 STRUTTURE ORO E ARCO 2 M.webp",
  "/images/18esimi/293324034_5523000047756758_2071711076166925323_n.webp",
  "/images/18esimi/299985517_5629259487130813_6636565796765681418_n.webp",
  "/images/18esimi/COSTO 250 EURO COME FOTO.webp",
];

export default function Feste18AnniPage() {
  const data = SERVICES_DATA["18-anni"];
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
