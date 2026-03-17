import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { Camera } from "lucide-react";

export default function PhotoboothPage() {
  return (
    <ServiceLayout
      title="Photobooth"
      category="Format"
      description="Cattura i momenti più divertenti del tuo evento con i nostri set photobooth professionali. Accessori a tema, stampe istantanee e condivisione social per un'esperienza indimenticabile."
      icon={Camera}
    />
  );
}
