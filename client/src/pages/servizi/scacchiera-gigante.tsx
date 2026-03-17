import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { LayoutGrid } from "lucide-react";

export default function ScacchieraGigantePage() {
  return (
    <ServiceLayout
      title="Scacchiera Gigante"
      category="Format"
      description="Sfida il tuo avversario su una scala monumentale. I pezzi giganti aggiungono una dimensione fisica e divertente al gioco della strategia per eccellenza."
      icon={LayoutGrid}
    />
  );
}
