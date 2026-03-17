import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Settings } from "lucide-react";

export default function GliImpiantatiPage() {
  return (
    <ServiceLayout
      title="Gli impiantati"
      category="Format"
      description="Installazioni e allestimenti unici che trasformano lo spazio. Soluzioni scenografiche originali pensate per dare un carattere forte e distintivo al tuo evento."
      icon={Settings}
    />
  );
}
