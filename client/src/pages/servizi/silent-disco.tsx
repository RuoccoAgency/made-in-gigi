import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Music } from "lucide-react";

export default function SilentDiscoPage() {
  return (
    <ServiceLayout
      title="Silent Disco / Silent Party"
      category="Format"
      description="Porta la musica dove vuoi senza disturbare nessuno! Tre canali musicali simultanei su cuffie wireless ad alta fedeltà per un party esclusivo e coinvolgente."
      icon={Music}
    />
  );
}
