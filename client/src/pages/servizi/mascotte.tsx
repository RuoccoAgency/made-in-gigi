import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

const IMAGES = [
  "/images/bioancaneve/408970890_1169670361153869_1441541955601944849_n.webp",
  "/images/bioancaneve/409014875_1169670371153868_819781436404844000_n.webp",
  "/images/cenerentola/WhatsApp Image 2023-04-14 at 11.42.36.webp",
  "/images/cenerentola/ba5a4198-4b8b-478c-b151-be50b7c1629c.webp",
  "/images/generali/292217385_5502172849839478_4492420795884389494_n(1).webp"
];

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
    />
  );
}
