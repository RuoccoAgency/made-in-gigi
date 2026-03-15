import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Palette, Camera, Crown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = [];

export default function AllestimentiPage() {
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
              <a className="inline-flex items-center text-sm font-medium text-amber-700/70 hover:text-amber-800 transition-colors mb-6 bg-amber-50 px-3 py-1 rounded-full border border-amber-100" data-testid="link-breadcrumb-home">
                ← Torna alla Home
              </a>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight">
              Allestimenti <span className="text-amber-600">Esclusivi</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Trasformiamo spazi vuoti in scenografie emozionanti. Decorazioni, balloon art e dettagli di design curati per creare un'atmosfera coerente e raffinata.
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
              <Card key={i} className="bg-white/50 backdrop-blur border border-amber-100/50 hover:border-amber-200 shadow-sm hover:shadow-md transition-all group">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                    <f.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl mb-2 text-slate-800" data-testid={`text-feature-title-${i}`}>{f.title}</div>
                    <div className="text-slate-500 leading-relaxed" data-testid={`text-feature-desc-${i}`}>{f.desc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* GALLERY */}
        <section className="container mx-auto px-4 mt-24">
          <div className="flex items-end justify-between gap-6 mb-8 border-b border-amber-100 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">I Nostri Lavori</h2>
              <p className="mt-2 text-slate-500">Ispirazioni dai nostri ultimi eventi.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {items.map((it, idx) => (
              <button
                key={it.id}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100"
                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
              >
                {it.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-amber-50/50">
                    <span className="text-sm font-medium text-amber-800/50">Foto in arrivo</span>
                  </div>
                ) : (
                  <img src={it.src} alt="Gallery" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </motion.div>
        </section>

        <section className="mt-24 bg-white py-24 border-t border-amber-100/50">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Pronti a stupire?</h2>
                <p className="text-lg text-slate-600">Raccontaci la tua idea, noi la realizzeremo.</p>
             </div>
             <div id="preventivo">
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
