import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Gift } from "lucide-react";

export default function VillaggioBabboNatalePage() {
  return (
    <ServiceLayout
      title="Villaggio di Babbo Natale"
      category="Format"
      description="Tutta la magia del Natale racchiusa in un villaggio incantato. Casa di Babbo Natale, ufficio postale degli elfi e laboratori a tema per un'esperienza polare indimenticabile."
      icon={Gift}
    />
  );
}
