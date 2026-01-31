import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Gift, PartyPopper, Camera } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = ["/images/foto-compleanno.jpeg", "/images/foto-compleanno2.jpeg", "/images/foto-compleanno3.jpeg", "/images/foto-compleanno4.jpeg"];

export default function CompleanniPage() {
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
    <div className="min-h-screen bg-[#f6f3e8] text-foreground">
      <Navbar />
      <main className="pt-24">
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Link href="/">
              <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-breadcrumb-home">
                ← Home
              </a>
            </Link>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold">Compleanni</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Dalla festa dei bimbi a un compleanno elegante per adulti: creiamo un set coordinato, accogliente e scenografico, con soluzioni flessibili per ogni budget.
            </p>
            <div className="mt-8">
              <Button onClick={scrollToForm} data-testid="button-cta-quote" className="bg-primary text-primary-foreground">
                Richiedi un preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Gift, title: "Pacchetti", desc: "Soluzioni modulabili" },
              { icon: PartyPopper, title: "Atmosfera", desc: "Dettagli che fanno festa" },
              { icon: Camera, title: "Backdrop", desc: "Foto corner pronto" },
            ].map((f, i) => (
              <Card key={i} className="bg-white/70 backdrop-blur border border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold" data-testid={`text-feature-title-${i}`}>{f.title}</div>
                      <div className="text-sm text-muted-foreground" data-testid={`text-feature-desc-${i}`}>{f.desc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold">Gallery</h2>
          <p className="mt-2 text-muted-foreground">Bozza: aggiungi foto in `GALLERY_IMAGES`.</p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {items.map((it, idx) => (
              <button
                key={it.id}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-border bg-white/60 backdrop-blur shadow-sm hover:shadow-lg transition-all"
                data-testid={`card-gallery-${idx}`}
                onClick={() => {
                  if (!it.placeholder) window.open(it.src, "_blank");
                }}
              >
                {it.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Foto in arrivo</span>
                  </div>
                ) : (
                  <img src={it.src} alt="Gallery" className="h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/25 to-transparent" />
              </button>
            ))}
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Richiedi un preventivo</h2>
            <p className="mt-2 text-muted-foreground">Compili il modulo: la ricontatteremo entro 24 ore.</p>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Contact />
      <WhatsAppWidget />
    </div>
  );
}
