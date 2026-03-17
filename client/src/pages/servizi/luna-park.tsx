import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Tent } from "lucide-react";

export default function LunaParkPage() {
  return (
    <ServiceLayout
      title="Luna Park"
      category="Format"
      description="Rivivi l'atmosfera magica delle fiere classiche con il nostro luna park portatile. Giochi di abilità, attrazioni iconiche e profumo di festa per un evento dal sapore vintage."
      icon={Tent}
    />
  );
}
