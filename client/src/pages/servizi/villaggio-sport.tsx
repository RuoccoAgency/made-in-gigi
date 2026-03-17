import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Trophy } from "lucide-react";

export default function VillaggioSportPage() {
  return (
    <ServiceLayout
      title="Villaggio dello Sport"
      category="Format"
      description="Uno spazio dinamico dedicato alle attività sportive per grandi e piccini. Percorsi fitness, sfide a squadre e tanto divertimento all'aria aperta o indoor."
      icon={Trophy}
    />
  );
}
