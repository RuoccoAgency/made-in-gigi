import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Gamepad2 } from "lucide-react";

export default function SalaGiochiArcadePage() {
  return (
    <ServiceLayout
      title="Sala Giochi Arcade"
      category="Format"
      description="Un tuffo nel passato con i cabinati arcade più famosi. Da Pac-Man a Street Fighter, offriamo il noleggio di postazioni retrogaming originali per un tocco nerd al tuo party."
      icon={Gamepad2}
    />
  );
}
