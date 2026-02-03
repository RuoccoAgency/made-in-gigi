import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Flower2, Heart, Sparkles, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = ["/images/foto-prima-comunione.jpeg", "/images/foto-prima-comunione2.jpeg", "/images/foto-prima-comunione3.jpeg", "/images/foto-prima-comunione4.jpeg"];

export default function PrimaComunionePage() {
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
    <div className="min-h-screen bg-[#fdfdfd] text-slate-700 font-sans">
      <Navbar />
      <main className="pt-28">
        {/* HERO SECTION - Pure/Soft */}
        <section className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-50 via-transparent to-transparent opacity-70 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
             <Link href="/">
              <a className="inline-flex items-center text-sm uppercase tracking-widest text-slate-400 hover:text-sky-600 transition-colors mb-8" data-testid="link-breadcrumb-home">
                Home / Prima Comunione
              </a>
            </Link>
            <h1 className="text-4xl md:text-6xl font-display font-light text-slate-900 tracking-wide">
              Prima Comunione
            </h1>
            <div className="w-24 h-1 bg-sky-200 mx-auto my-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              Un giorno di purezza ed eleganza. <br/>Allestimenti delicati che incorniciano l'emozione di un momento sacro.
            </p>
            <div className="mt-12">
              <Button onClick={scrollToForm} variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-300 px-8 py-6 rounded-none uppercase tracking-widest text-sm transition-all duration-300">
                Richiedi Preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FEATURES - Minimal/Clean */}
        <section className="container mx-auto px-4 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Flower2, title: "Floreale", desc: "Composizioni delicate e fresche." },
              { icon: Heart, title: "Cura", desc: "Attenzione ai dettagli e alla tradizione." },
              { icon: BookOpen, title: "Confettata", desc: "Angoli dolci personalizzati e a tema." },
            ].map((f, i) => (
              <div key={i} className="text-center group">
                <div className="h-16 w-16 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors duration-500">
                  <f.icon className="h-6 w-6 text-sky-600/70" />
                </div>
                <h3 className="font-display font-medium text-xl mb-3 text-slate-900 uppercase tracking-wide">{f.title}</h3>
                <p className="text-slate-400 font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY - Clean Grid */}
        <section className="container mx-auto px-4 mt-32">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-display font-light text-slate-900">Dettagli Preziosi</h2>
            <p className="mt-2 text-slate-400 italic font-serif">Alcuni dei nostri allestimenti più dolci.</p>
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {items.map((it, idx) => (
              <div key={it.id} className="flex flex-col gap-4">
                 <button
                  className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500"
                  onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                >
                  {it.placeholder ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                      <span className="text-xs uppercase tracking-widest text-slate-300">Foto {idx + 1}</span>
                    </div>
                  ) : (
                    <img src={it.src} alt="Gallery" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
                  )}
                </button>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="mt-32 bg-sky-50/50 py-24">
          <div className="container mx-auto px-4">
             <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-2xl font-display font-light text-slate-900 mb-2">Pianifica con noi</h2>
                <div className="w-12 h-px bg-slate-300 mx-auto mb-6"></div>
                <p className="text-slate-500">Compila il form per ricevere una proposta personalizzata e senza impegno.</p>
             </div>
             <div id="preventivo" className="max-w-2xl mx-auto bg-white p-8 shadow-sm border border-slate-100">
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
