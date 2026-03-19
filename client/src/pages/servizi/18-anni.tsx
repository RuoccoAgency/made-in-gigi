import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";

export default function Feste18AnniPage() {
  const data = SERVICES_DATA["18-anni"];
  if (!data) return null;

  return (
    <ServiceLayout
      title={data.title}
      category={Array.isArray(data.category) ? data.category[0] : data.category}
      description={data.description}
      icon={data.icon}
    />
  );
}
