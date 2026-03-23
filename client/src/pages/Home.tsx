import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { NewServices } from "@/components/sections/NewServices";
import { Areas } from "@/components/sections/Areas";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#f6f3e8] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NewServices />
        <Areas />
        <QuoteForm />
      </main>
      <Contact />
      <WhatsAppWidget />
    </div>
  );
}
