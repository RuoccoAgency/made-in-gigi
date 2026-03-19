import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

const IMAGES = [
  "/images/generali/221235282_4416454168411357_1810285300504269591_n.webp",
  "/images/generali/280690891_5359640354092729_7898705918205218487_n.webp",
  "/images/generali/314953839_818141679640074_2033614512149437795_n.webp"
];

export default function CompleanniPage() {
  const data = SERVICES_DATA["compleanni"];
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
