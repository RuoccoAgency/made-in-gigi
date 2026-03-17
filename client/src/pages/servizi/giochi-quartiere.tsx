import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Puzzle } from "lucide-react";

export default function GiochiQuartierePage() {
  return (
    <ServiceLayout
      title="Giochi di Quartiere"
      category="Format"
      description="I giochi di una volta tornano protagonisti. Tiro alla fune, corsa nei sacchi e giochi in legno della tradizione per riscoprire il piacere dello stare insieme."
      icon={Puzzle}
    />
  );
}
