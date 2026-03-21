import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Zap, ShieldCheck, Clock, Smile, Star } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Load images from optimized assets folder
const gonfiabiliModules = import.meta.glob("@/assets/optimized/gonfiabili/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const GALLERY_IMAGES = Object.values(gonfiabiliModules) as string[];

export default function GonfiabiliPage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = "Noleggio Gonfiabili | MadeinGigi Events";
  }, []);

  const allItems = useMemo(() => {
    if (GALLERY_IMAGES.length === 0) {
      return Array.from({ length: 6 }).map((_, idx) => ({
        id: `placeholder-${idx}`,
        src: "",
        placeholder: true,
      }));
    }

    return GALLERY_IMAGES.map((src, idx) => ({
      id: `img-${idx}`,
      src,
      placeholder: false,
    }));
  }, []);

  const items = showAllPhotos ? allItems : allItems.slice(0, 6);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <Navbar />
      <main className="pt-28">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 relative overflow-hidden py-12 md:py-20 text-center">
          <div className="absolute top-0 right-10 w-72 h-72 bg-orange-300/20 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-300/20 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="max-w-4xl relative z-10 mx-auto"
          >
             <Link href="/">
              <a className="inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors mb-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:shadow-md">
                ← Torna alla Home
              </a>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tight leading-tight uppercase">
              Divertimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Gonfiabile</span>
            </h1>
            <p className="mt-8 text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Noleggio di strutture gonfiabili per bambini e adulti: scivoli, percorsi a ostacoli e castelli per un divertimento in totale sicurezza.
            </p>
            <div className="mt-10">
              <Button onClick={scrollToForm} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-500/20 font-bold px-10 h-16 text-xl rounded-full hover:scale-105 transition-transform uppercase tracking-wider">
                Prenota ora!
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mt-16 max-w-3xl">
          <div className="space-y-12">
              {[
                  { title: "Sicurezza Certificata", desc: "Tutte le nostre strutture gonfiabili sono certificate e sanificate prima di ogni utilizzo, garantendo un ambiente di gioco sicuro." },
                  { title: "Assistenza & Allestimento", desc: "Il nostro staff segue l'allestimento e l'utilizzo delle attrazioni per la tua massima tranquillità." },
                  { title: "Effetto WOW", desc: "Dai grandi scivoli ai percorsi ad ostacoli interattivi, offriamo soluzioni spettacolari." },
              ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                      <h3 className="font-display font-bold text-xl text-slate-900 uppercase tracking-tight">
                          {item.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed font-medium">
                          {item.desc}
                      </p>
                  </div>
              ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="container mx-auto px-4 py-20 bg-slate-50 rounded-[3rem]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tighter">Il Nostro Parco Giochi</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-lg text-slate-600">Scopri le nostre fantastiche attrazioni.</p>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {items.map((it, idx) => (
                <motion.button
                  layout
                  key={it.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative aspect-square rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 ring-1 ring-orange-100"
                  onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                >
                  {it.placeholder ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-orange-50/50">
                      <Star className="h-10 w-10 text-orange-200 animate-pulse" />
                    </div>
                  ) : (
                    <>
                      <img 
                        src={it.src} 
                        alt={`Gonfiabili Gallery ${idx + 1}`} 
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 border border-orange-100 shadow-sm">
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Dettaglio</span>
                      </div>
                    </>
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {!showAllPhotos && allItems.length > 6 && (
            <div className="mt-12 text-center">
                <Button 
                    onClick={() => setShowAllPhotos(true)} 
                    variant="outline"
                    className="bg-white border-orange-200 text-orange-600 hover:bg-orange-50 rounded-full px-10 h-14 text-sm font-bold shadow-md transition-all hover:scale-105"
                >
                    Vedi tutte le foto ({allItems.length})
                </Button>
            </div>
          )}
        </section>

        {/* CTA FORM */}
        <section className="py-24" id="preventivo">
          <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                   <PartyPopper className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                   <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 uppercase tracking-tight">Vuoi un Gonfiabile alla tua festa?</h2>
                   <p className="text-lg text-slate-600 font-medium italic">Compila il modulo, ci mettiamo subito in gioco!</p>
                </div>
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-orange-900/5 ring-1 ring-orange-100">
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
