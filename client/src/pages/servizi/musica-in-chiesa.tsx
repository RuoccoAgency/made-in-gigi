import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Music } from "lucide-react";

export default function MusicaInChiesaPage() {
  return (
    <ServiceLayout
      title="Musica in chiesa"
      category="Matrimoni"
      description="Accompagnamento musicale solenne e raffinato per la cerimonia religiosa, con musicisti professionisti e repertorio sacro o moderno."
      icon={Music}
    />
  );
}
