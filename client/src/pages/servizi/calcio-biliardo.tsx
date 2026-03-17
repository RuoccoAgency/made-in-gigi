import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { CircleDot } from "lucide-react";

export default function CalcioBiliardoPage() {
  return (
    <ServiceLayout
      title="Calcio Biliardo"
      category="Format"
      description="L'unione perfetta tra il biliardo e il calcio! Una sfida originale su una pedana gigante dove i piedi prendono il posto della stecca e le palline da calcio delle boccette."
      icon={CircleDot}
    />
  );
}
