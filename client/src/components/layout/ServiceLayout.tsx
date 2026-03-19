import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { QuoteForm } from "../sections/QuoteForm";
import { Contact } from "../sections/Contact";
import { WhatsAppWidget } from "../ui/WhatsAppWidget";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceLayoutProps {
  title: string;
  description: string;
  category: string;
  icon?: LucideIcon;
}

export function ServiceLayout({ title, description, category, icon: Icon }: ServiceLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const placeholders = Array.from({ length: 6 }).map((_, idx) => ({
    id: `placeholder-${idx}`,
    label: `Progetto ${idx + 1}`
  }));

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main className="pt-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">{category}</span>
            <span>/</span>
            <span className="text-secondary">{title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {Icon && (
              <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-xl mb-6">
                <Icon className="w-8 h-8 text-secondary" />
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              {title}
            </h1>
            <div className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl font-light whitespace-pre-wrap">
              {description.split('\n').map((line, i) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return <div key={i} className="h-4" />;
                
                const isTitle = trimmedLine.length > 0 && 
                               trimmedLine.length < 65 && 
                               !trimmedLine.includes('(') && 
                               !trimmedLine.startsWith('-') &&
                               !trimmedLine.includes('€');
                return (
                  <span key={i} className={cn(
                    "block",
                    isTitle ? "text-secondary font-bold mt-6 mb-2 text-lg md:text-xl tracking-tight" : "mb-1 text-sm md:text-base text-slate-500/90"
                  )}>
                    {trimmedLine}
                  </span>
                );
              })}
            </div>
            <div className="mt-12">
              <Button 
                onClick={scrollToForm} 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-secondary/20 transition-all hover:scale-105"
              >
                Richiedi Preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="bg-slate-50 py-24 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Portfolio & Gallery</h2>
                <div className="w-12 h-1 bg-secondary mt-4 rounded-full"></div>
                <p className="mt-6 text-slate-500 text-base max-w-xl">
                  Scopri alcuni dei nostri lavori più recenti per il servizio di {title}. 
                  Ogni evento è unico e personalizzato.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placeholders.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-4 text-slate-300 group-hover:text-secondary transition-colors duration-500">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-current flex items-center justify-center">
                      <span className="text-xs font-bold uppercase tracking-tighter">Photo</span>
                    </div>
                    <span className="text-sm font-display font-bold uppercase tracking-widest">{p.label}</span>
                  </div>
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32" id="preventivo">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Prenota il tuo evento</h2>
                <p className="text-lg text-slate-600 font-light">
                  Compila il form per richiedere informazioni dettagliate o un preventivo personalizzato. 
                  Ti risponderemo entro 24 ore.
                </p>
              </div>
              <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-50">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <WhatsAppWidget />
    </div>
  );
}
