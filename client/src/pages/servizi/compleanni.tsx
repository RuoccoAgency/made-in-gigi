import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

const IMAGES = [
  "/images/generali/221235282_4416454168411357_1810285300504269591_n.webp",
  "/images/generali/280690891_5359640354092729_7898705918205218487_n.webp",
  "/images/generali/292217385_5502172849839478_4492420795884389494_n(1).webp",
  "/images/generali/314953839_818141679640074_2033614512149437795_n.webp",
  "/images/generali/315349985_818755086245400_1435910162807736504_n.webp",
  "/images/generali/362639300_1022434969210743_5751204042057348135_n.webp",
  "/images/generali/362657862_1022434912544082_7710157068083436294_n.webp",
  "/images/generali/49948749_2182097471847049_7348036448945176576_n.webp",
  "/images/generali/4d658058-4fcb-469d-b5ab-9055d8a34e39.webp",
  "/images/generali/60907222_2387431207980340_4231985586333810688_n.webp",
  "/images/generali/FB_IMG_1615390006489.webp",
  "/images/generali/WhatsApp Image 2023-04-19 at 18.13.01 (6).webp",
  "/images/generali/WhatsApp Image 2023-04-19 at 18.18.50 (1).webp",
  "/images/generali/WhatsApp Image 2023-04-19 at 18.18.51.webp",
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
