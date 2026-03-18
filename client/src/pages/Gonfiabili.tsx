import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { PartyPopper, Zap, ShieldCheck, Clock, Smile, Star } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = [
  "/images/gonfiabili/20150913_130141.webp",
  "/images/gonfiabili/81ulwVwHslL._AC_SX522_.webp",
  "/images/gonfiabili/Calcetto 8 4 noleggio un ora 40 euro - Copia.webp",
  "/images/gonfiabili/gonfiabile scivolo - Copia.webp",
  "/images/gonfiabili/gonfiabile scivolo misure - Copia.webp",
  "/images/gonfiabili/noleggio gonfiabile 50 euro.webp",
  "/images/gonfiabili/noleggio gonfiabile acquatico 70 euro.webp",
  "/images/gonfiabili/noleggio gonfiabile pesce 70 euro - Copia.webp",
  "/images/gonfiabili/noleggio un ora 50 euro - Copia.webp"
];

export default function GonfiabiliPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const items = useMemo(() => {
    if (GALLERY_IMAGES.length === 0) {
      return Array.from({ length: 8 }).map((_, idx) => ({
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

        {/* FEATURES */}
        <section className="container mx-auto px-4 mt-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Sicurezza Certificata", desc: "Tutte le nostre strutture sono certificate e sanificate prima di ogni utilizzo.", color: "text-blue-500", bg: "bg-blue-100" },
              { icon: Smile, title: "Assistenza Inclusa", desc: "Un operatore esperto seguirà l'allestimento e l'utilizzo per la massima tranquillità.", color: "text-orange-500", bg: "bg-orange-100" },
              { icon: Star, title: "Effetto WOW", desc: "Scivoli giganti, percorsi ad ostacoli e castelli che lasceranno tutti a bocca aperta.", color: "text-yellow-500", bg: "bg-yellow-100" },
            ].map((f, i) => (
              <Card key={i} className="bg-white border-2 border-transparent hover:border-orange-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`h-16 w-16 rounded-full ${f.bg} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className={`h-8 w-8 ${f.color}`} />
                  </div>
                  <div className="font-display font-bold text-xl mb-3 text-slate-900 uppercase tracking-tight">{f.title}</div>
                  <div className="text-slate-600">{f.desc}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* GALLERY */}
        <section className="container mx-auto px-4 py-20 bg-slate-50 rounded-[3rem]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tighter">Il Nostro Parco Giochi</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-lg text-slate-600">Scopri le nostre fantastiche attrazioni.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {items.map((it, idx) => (
              <motion.button
                key={it.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all"
                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
              >
                {it.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-orange-50">
                    <span className="font-bold text-orange-200 uppercase tracking-widest">Foto in arrivo</span>
                  </div>
                ) : (
                  <img src={it.src} alt="Gonfiabile" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Visualizza Foto
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
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
