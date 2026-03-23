import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Camera, Crown, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Helper to load images from modules
const getImagesFromModules = (modules: Record<string, any>) => Object.values(modules) as string[];

// Load images from optimized categories
const archiModules = import.meta.glob("@/assets/optimized/archi/*.webp", { eager: true, query: '?url', import: 'default' });
const biancaneveModules = import.meta.glob("@/assets/optimized/bioancaneve/*.webp", { eager: true, query: '?url', import: 'default' });
const cenerentolaModules = import.meta.glob("@/assets/optimized/cenerentola/*.webp", { eager: true, query: '?url', import: 'default' });

// We also prepare for potential new folders requested by the user
const fattoriaModules = import.meta.glob("@/assets/optimized/fattoria/*.webp", { eager: true, query: '?url', import: 'default' });
const piccoloPrincipeModules = import.meta.glob("@/assets/optimized/piccolo-principe/*.webp", { eager: true, query: '?url', import: 'default' });
const napoliModules = import.meta.glob("@/assets/optimized/napoli/*.webp", { eager: true, query: '?url', import: 'default' });
const shimmerModules = import.meta.glob("@/assets/optimized/shimmer/*.webp", { eager: true, query: '?url', import: 'default' });

const CATEGORIES = [
  "Tutti",
  "Archi per eventi",
  "Fattoria",
  "Biancaneve",
  "Cenerentola",
  "Piccolo Principe",
  "Napoli",
  "Shimmer"
];

export default function AllestimentiPage() {
  const [activeFilter, setActiveFilter] = useState("Tutti");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  // Combine and categorize images
  const allItems = useMemo(() => {
    const items: { id: string; src: string; category: string }[] = [];

    // Map modules into the required categories
    const addCategorized = (modules: Record<string, any>, catName: string, prefix: string) => {
      getImagesFromModules(modules).forEach((src, idx) => {
        items.push({ id: `${prefix}-${idx}`, src, category: catName });
      });
    };

    addCategorized(archiModules, "Archi per eventi", "archi");
    addCategorized(biancaneveModules, "Biancaneve", "biancaneve");
    addCategorized(cenerentolaModules, "Cenerentola", "cenerentola");
    addCategorized(fattoriaModules, "Fattoria", "fattoria");
    addCategorized(piccoloPrincipeModules, "Piccolo Principe", "piccolo-principe");
    addCategorized(napoliModules, "Napoli", "napoli");
    addCategorized(shimmerModules, "Shimmer", "shimmer");

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "Tutti") return allItems;
    return allItems.filter(item => item.category === activeFilter);
  }, [activeFilter, allItems]);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

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
              Trasformiamo spazi vuoti in scenografie emozionanti. Decorazioni, balloon art e dettagli di design curati per creare un'atmosfera coerente e raffinata. <strong>Personalizziamo ogni tema per renderlo unico e indimenticabile.</strong>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={scrollToForm} size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/10 font-bold px-8 h-14 text-lg">
                Richiedi un preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FEATURES - Amber/Gold Theme */}
        <section className="container mx-auto px-4 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Palette, title: "Moodboard Design", desc: "Studio della palette colori e dello stile" },
              { icon: Crown, title: "Finiture Premium", desc: "Materiali di alta qualità e dettagli oro" },
              { icon: Camera, title: "Scenografie", desc: "Backdrop d'impatto per foto perfette" },
            ].map((f, i) => (
              <Card key={i} className="bg-white/50 backdrop-blur border border-amber-100/50 hover:border-amber-200 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                    <f.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl mb-2 text-slate-800">{f.title}</div>
                    <div className="text-slate-500 leading-relaxed">{f.desc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* GALLERY SECTION */}
        <section className="container mx-auto px-4 mt-32">
          {/* Header & Filter */}
          <div className="flex flex-col gap-10 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Le Nostre Opere</h2>
              <p className="mt-4 text-slate-500 text-lg">Esplora la nostra gallery filtrando per tema. Scenografie su misura progettate per stupire i tuoi ospiti.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setShowAll(false);
                  }}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 border",
                    activeFilter === cat 
                      ? "bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-900/10" 
                      : "bg-white text-slate-500 border-slate-200 hover:border-amber-300 hover:text-amber-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500"
                >
                  <img 
                    src={item.src} 
                    alt={`Allestimenti ${item.category} portfolio`} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-1">
                      {item.category}
                    </span>
                    <button 
                       onClick={() => window.open(item.src, "_blank")}
                       className="text-white font-display font-medium text-lg flex items-center gap-2 group/btn"
                    >
                      Visualizza Foto
                      <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show All Logic */}
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
                  Vedi tutto ({filteredItems.length})
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Call to action */}
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
