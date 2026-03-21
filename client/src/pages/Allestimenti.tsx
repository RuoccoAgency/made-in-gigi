import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Camera, Crown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Helper to load all webp from a glob result
const getImagesFromModules = (modules: Record<string, any>) => Object.values(modules) as string[];

// Load images from all optimized folders
const archiModules = import.meta.glob("@/assets/optimized/archi/*.webp", { eager: true, query: '?url', import: 'default' });
const battesimoModules = import.meta.glob("@/assets/optimized/battesimo/*.webp", { eager: true, query: '?url', import: 'default' });
const adultiModules = import.meta.glob("@/assets/optimized/allestimenti-adulti/*.webp", { eager: true, query: '?url', import: 'default' });
const compleanniModules = import.meta.glob("@/assets/optimized/allestimenti-compleanni/*.webp", { eager: true, query: '?url', import: 'default' });
const bioancaneveModules = import.meta.glob("@/assets/optimized/bioancaneve/*.webp", { eager: true, query: '?url', import: 'default' });
const cenerentolaModules = import.meta.glob("@/assets/optimized/cenerentola/*.webp", { eager: true, query: '?url', import: 'default' });
const temiModules = import.meta.glob("@/assets/optimized/temi-personalizzati/*.webp", { eager: true, query: '?url', import: 'default' });

export default function AllestimentiPage() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("Tutto");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const filters = ["Tutto", "Archi"];

  // Combine and categorise images
  const allItems = useMemo(() => {
    // Categorise images based on their source folder pattern
    const archiFolderImages = getImagesFromModules(archiModules).map((src, idx) => {
        const filename = src.split('/').pop()?.toLowerCase() || "";
        // Archi VELA images are named 1.webp, 2.webp... sweet.webp (short names)
        // Original archi folder images have dates or long social network strings (long names)
        const isFromArchiFolder = filename.length > 10 || 
                                 filename.startsWith('20') || 
                                 filename.includes('arco_madda');
        
        return { 
          id: `archi-${idx}`, 
          src, 
          category: isFromArchiFolder ? "Archi" : "Altro" 
        };
    });

    const otherFolders = [
        ...getImagesFromModules(battesimoModules),
        ...getImagesFromModules(adultiModules),
        ...getImagesFromModules(compleanniModules),
        ...getImagesFromModules(bioancaneveModules),
        ...getImagesFromModules(cenerentolaModules),
        ...getImagesFromModules(temiModules)
    ].map((src, idx) => ({ id: `other-${idx}`, src, category: "Altro" }));

    return [...archiFolderImages, ...otherFolders];
  }, []);

  const filteredItems = useMemo(() => {
    return filter === "Tutto" 
      ? allItems 
      : allItems.filter(it => it.category === filter);
  }, [filter, allItems]);

  // For the specific Archi filter, show all images immediately as requested
  const displayedItems = (showAll || filter === "Archi") ? filteredItems : filteredItems.slice(0, 6);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-foreground font-sans">
      <Navbar />
      <main className="pt-28">
        {/* HERO SECTION - Allestimenti (Gold/Elegant) */}
        <section className="container mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl relative z-10"
          >
            <Link href="/">
              <a className="inline-flex items-center text-sm font-medium text-amber-700/70 hover:text-amber-800 transition-colors mb-6 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                ← Torna alla Home
              </a>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight">
              Allestimenti <span className="text-amber-600">Esclusivi</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Trasformiamo spazi vuoti in scenografie emozionanti. Decorazioni, balloon art e dettagli di design curati per creare un'atmosfera coerente e raffinata. <strong>Realizziamo anche archi scenografici per eventi, perfetti per ingressi d’impatto e foto memorabili.</strong>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={scrollToForm} size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/10 font-bold px-8 h-14 text-lg">
                Richiedi un preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mt-20 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { title: "Moodboard & Design", desc: "Ogni progetto inizia con uno studio accurato della palette colori e dello stile per garantire un risultato armonioso." },
              { title: "Finiture Premium", desc: "Utilizziamo materiali d'alta qualità e dettagli ricercati, con finiture in oro e texture pregiate." },
              { title: "Scenografie d'Impatto", desc: "Progettiamo backdrop e installazioni che diventano lo sfondo perfetto per i vostri scatti memorabili." },
            ].map((f, i) => (
              <div key={i} className="border-l-4 border-amber-100 pl-8 py-2">
                <h3 className="font-display font-bold text-2xl mb-3 text-slate-800 uppercase tracking-tight">{f.title}</h3>
                <p className="text-lg text-slate-600 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="container mx-auto px-4 mt-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 border-b border-amber-100 pb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">I Nostri Lavori</h2>
              <p className="mt-4 text-slate-500 text-lg italic">Ispirazioni dai nostri ultimi eventi e archi scenografici.</p>
            </div>
            
            {/* CATEGORY FILTERS */}
            <div className="flex bg-white/50 backdrop-blur p-1.5 rounded-2xl border border-amber-100 w-fit">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setShowAll(false);
                  }}
                  className={cn(
                    "px-8 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300",
                    filter === f 
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-900/10" 
                      : "text-slate-400 hover:text-amber-700 hover:bg-white"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedItems.map((it, idx) => (
                <motion.button
                  layout
                  key={it.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl hover:shadow-amber-900/10 transition-all duration-500"
                  onClick={() => window.open(it.src, "_blank")}
                >
                  <img 
                    src={it.src} 
                    alt={`Allestimenti Portfolio ${idx + 1}`} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold uppercase tracking-widest text-xs border-l-2 border-amber-400 pl-3">
                      Visualizza
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {!showAll && filteredItems.length > 6 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-20 flex justify-center"
              >
                <Button 
                  onClick={() => setShowAll(true)} 
                  size="lg" 
                  variant="outline"
                  className="bg-white border-2 border-amber-200 text-amber-800 hover:bg-amber-600 hover:text-white hover:border-amber-600 rounded-full px-12 h-16 text-xl font-bold uppercase tracking-widest shadow-xl shadow-amber-900/5 transition-all duration-500 hover:scale-105"
                >
                  Scopri di più ({filteredItems.length})
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="mt-40 bg-white py-32 border-t border-amber-100/50">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Pronti a stupire?</h2>
                <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-slate-600 font-medium">Raccontaci la tua idea, i nostri archi e allestimenti la renderanno indimenticabile.</p>
             </div>
             <div id="preventivo" className="max-w-5xl mx-auto">
                <QuoteForm />
             </div>
          </div>
        </section>
      </main>
      <Contact />
      <WhatsAppWidget />
    </div>
  );
}
