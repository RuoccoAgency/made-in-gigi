import { useParams } from "wouter";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { SERVICES_DATA } from "@/services-data";
import NotFound from "./not-found";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;

  if (!slug || !SERVICES_DATA[slug]) {
    return <NotFound />;
  }

  const data = SERVICES_DATA[slug];

  return (
    <ServiceLayout
      title={data.title}
      description={data.description}
      category={data.category}
      icon={data.icon}
    />
  );
}
