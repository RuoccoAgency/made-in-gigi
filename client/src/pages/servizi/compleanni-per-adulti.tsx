import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Sparkles, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SERVICES_DATA } from "@/services-data";

// Dynamically load images from optimized folders
const adultiModules = import.meta.glob("@/assets/optimized/allestimenti-adulti/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const laureeModules = import.meta.glob("@/assets/optimized/lauree/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const getImagesFromModules = (modules: Record<string, any>) => Object.values(modules) as string[];

export default function CompleanniAdultiPage() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("Tutto");
  
  const data = SERVICES_DATA["compleanni-per-adulti"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Compleanni per Adulti & Lauree | MadeinGigi Events";
  }, []);

  const allItems = useMemo(() => {
    // Combine all images first in a deterministic way
    const rawImages = [
      ...getImagesFromModules(adultiModules),
      ...getImagesFromModules(laureeModules)
    ];

    return rawImages.map((src, idx) => {
      // User Logic: 1st, 2nd, 4th, 5th (indices 0, 1, 3, 4) are "Compleanni"
      // Everything else is "Lauree"
      const isCompleanno = [0, 1, 3, 4].includes(idx);
      return {
        id: `img-${idx}`,
        src,
        category: isCompleanno ? "Compleanni" : "Lauree"
      };
    });
  }, []);

  const filters = ["Tutto", "Lauree"];

  const filteredItems = useMemo(() => {
    return filter === "Tutto" 
      ? allItems 
      : allItems.filter(it => it.category === filter);
  }, [filter, allItems]);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!data) return null;

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-800 font-sans">
      <Navbar />
      <main className="pt-28 pb-0">
        <section className="container mx-auto px-4 relative overflow-hidden text-center py-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-200/40 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl relative z-10 mx-auto"
            >
                <Link href="/">
                    <a className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors mb-8 bg-white border border-slate-100 px-6 py-2 rounded-full shadow-sm">
                        ← Torna alla Home
                    </a>
                </Link>
                <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tight leading-tight uppercase">
                    {data.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">Per Adulti</span>
                </h1>
                <p className="mt-8 text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                    {data.description.split('\n')[0]}
                </p>
                <div className="mt-12">
                    <Button onClick={scrollToForm} size="lg" className="bg-slate-900 hover:bg-slate-800 text-white shadow-2xl shadow-slate-900/10 font-black px-12 h-20 text-2xl rounded-2xl transition-transform hover:scale-105">
                        Inizia il Party!
                    </Button>
                </div>
            </motion.div>
        </section>

        {/* FEATURES */}
        <section className="container mx-auto px-4 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Sparkles, title: "Style & Glamour", desc: "Allestimenti moderni con strutture oro, neon signs e balloon art organica." },
                    { icon: GraduationCap, title: "Target Lauree", desc: "Pacchetti dedicati per festeggiare il traguardo accademico con classe." },
                    { icon: Star, title: "Sound & Light", desc: "Service audio professionale e show di luci per un party esclusivo." },
                ].map((f, i) => (
                    <Card key={i} className="bg-white border-none shadow-xl shadow-slate-900/5 hover:shadow-slate-900/10 transition-all group overflow-hidden rounded-[2.5rem]">
                        <CardContent className="p-10 text-center flex flex-col items-center">
                            <div className="h-20 w-20 rounded-[2.5rem] bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <f.icon className="h-10 w-10 text-slate-800" />
                            </div>
                            <h3 className="font-display font-black text-2xl mb-4 text-slate-900 uppercase tracking-tighter">{f.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* GALLERY */}
        <section className="container mx-auto px-4 mt-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-slate-100 pb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tighter">Portfolio Party</h2>
              <p className="mt-4 text-xl text-slate-500 font-bold italic">Scatti dai nostri compleanni e feste di laurea.</p>
            </div>
            
            {/* CATEGORY FILTERS */}
            <div className="flex bg-slate-100 p-2 rounded-3xl border border-slate-200">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setShowAll(false);
                  }}
                  className={cn(
                    "px-10 py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300",
                    filter === f 
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" 
                      : "text-slate-400 hover:text-slate-900 hover:bg-white"
                  )}
                >
                  {f === "Tutto" ? "Tutti i Party" : f}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {displayedItems.map((it, idx) => (
                <motion.button
                  layout
                  key={it.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 ring-1 ring-slate-100"
                  onClick={() => window.open(it.src, "_blank")}
                >
                  <img 
                    src={it.src} 
                    alt={`Party Adulti ${idx + 1}`} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-white font-black uppercase tracking-widest text-xs border-l-4 border-white pl-4">
                      Visualizza Party
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
                  className="bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-full px-12 h-16 text-xl font-black uppercase tracking-widest shadow-xl shadow-slate-900/5 transition-all duration-500 hover:scale-105"
                >
                  Scopri di più ({filteredItems.length - 6} foto)
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="mt-40 bg-slate-100 py-32 rounded-t-[5rem]">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-24">
                <Trophy className="h-20 w-20 text-slate-900 mx-auto mb-8" />
                <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 mb-8 uppercase tracking-tighter">Prenota il tuo Traguardo</h2>
                <div className="w-24 h-2 bg-slate-900 mx-auto mb-10 rounded-full"></div>
                <p className="text-xl text-slate-600 font-bold">Raccontaci la tua idea, renderemo il tuo compleanno o la tua laurea un evento memorabile.</p>
             </div>
             <div id="preventivo" className="max-w-5xl mx-auto bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-slate-900/5 ring-1 ring-slate-100">
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
