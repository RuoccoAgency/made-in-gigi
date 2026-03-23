import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

const IMAGES = [
  "/images/1imo/251539037_4721967907859980_6889398567289818069_n.webp",
  "/images/1imo/294255205_5542197332503696_2661678291067827710_n.webp",
  "/images/1imo/297066370_5582994351757327_5714870777046302944_n.webp",
  "/images/1imo/298168800_1602628480134195_7691046820701733505_n.webp",
  "/images/1imo/310013885_5752612191462208_8532070385258570788_n.webp",
  "/images/1imo/62337316_2417653101624817_1748230815378046976_n.webp",
  "/images/1imo/79217998_2800111720045618_477256714391912448_n.webp",
  "/images/1imo/WhatsApp Image 2023-04-19 at 18.18.47 (7).webp",
  "/images/1imo/cddf96db-8b8a-4f0c-91c2-e4e04872dce9.webp",
];

export default function PrimoCompleannoPage() {
  const data = SERVICES_DATA["primo-compleanno"];
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
