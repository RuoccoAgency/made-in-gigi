import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Check, Trophy, Wand2, PartyPopper, Zap, Tent, Ghost, Star, Plus, Cross, Heart, Flower2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = [
  "/images/allestimento battesimo/cenerentola/133036814_2874776119245844_4103192305374465438_n.webp",
  "/images/allestimento battesimo/shimmer/FB_IMG_1597500355447.webp",
  "/images/allestimento battesimo/shimmer/FB_IMG_1597500358055.webp",
  "/images/allestimento battesimo/allestimenti per compleanni/WhatsApp Image 2023-04-19 at 18.18.42.webp",
  "/images/allestimento battesimo/allestimenti per compleanni/temi con personalizzazione/326847291_1291176211739546_515201103014120937_n.webp",
];

const PACKAGES = [
  {
    title: "PACCHETTO BASE",
    description: "2 animatori a partire da 7 bambini",
    icon: Sparkles,
    activities: [
      "Giochi dinamici (corsa col sacco, tiro alla fune ecc.)",
      "Giochi al tavolo (forza quattro, carte uno, sfide ecc.)",
      "Musica",
      "Accoglienza del festeggiato",
      "Regalini e modellabili per i bambini"
    ]
  },
  {
    title: "PACCHETTO A TEMA LUNA PARK",
    description: "2 animatori a partire da 7 bambini",
    icon: Tent,
    activities: [
      "Giochi dinamici",
      "Giochi gonfiabili",
      "Tiro con l’arco",
      "Tiro a segno",
      "Sparare alla gallina",
      "Giochi a tema luna park"
    ],
    setup: [
      "Arco di palloncini per delimitare la zona giochi",
      "Transenne per organizzare l’area attività"
    ]
  },
  {
    title: "PACCHETTO BASE CON LASER GAMES",
    description: "2 animatori a partire da 7 bambini",
    icon: Zap,
    activities: [
      "Giochi dinamici (corsa col sacco, tiro alla fune ecc.)",
      "Giochi al tavolo (forza quattro, carte uno ecc.)",
      "Musica",
      "Accoglienza del festeggiato",
      "Regalini e modellabili"
    ],
    special: {
      title: "Laser games with strutture di gioco per creare percorsi e sfide.",
      includes: ["Pistole laser", "Pettorine per tutti i bambini"]
    }
  },
  {
    title: "PACCHETTO OLIMPIADI",
    description: "2 animatori",
    icon: Trophy,
    activities: [
      "Ping pong",
      "Volano",
      "Campo basket",
      "Calcio",
      "Tiro a segno",
      "Tiro con l’arco"
    ],
    organization: [
      "Delimitazione delle postazioni di gioco",
      "Lavagna per segnare i punti delle squadre",
      "Giochi competitivi e tanto divertimento"
    ]
  },
  {
    title: "PACCHETTO A TEMA ALICE NEL PAESE DELLE MERAVIGLIE",
    description: "Allestimento scenografico e animazione a tema.",
    icon: Wand2,
    includes: [
      "Decorazioni da sogno",
      "Mascotte pronte ad accogliere i bambini",
      "Angolo dolcezza a tema",
      "Sfide e indovinelli magici",
      "Animazione e giochi ispirati al mondo di Alice"
    ],
    outro: "Un’esperienza immersiva e piena di divertimento per tutti i bambini."
  }
];

// Dynamically load all webp images from the optimized assets folder
const imageModules = import.meta.glob("@/assets/optimized/comunioni/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const IMAGES = Object.values(imageModules) as string[];

export default function PrimaComunionePage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const allItems = useMemo(() => {
    if (IMAGES.length === 0) {
      return Array.from({ length: 4 }).map((_, idx) => ({
        id: `placeholder-${idx}`,
        src: "",
        placeholder: true,
      }));
    }

    return IMAGES.map((src, idx) => ({
      id: `img-${idx}`,
      src,
      placeholder: false,
    }));
  }, []);

  const items = showAllPhotos ? allItems : allItems.slice(0, 6);

  // Lightbox Handlers
  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const handleNext = () => setLightboxIndex((prev) => (prev + 1) % IMAGES.length);
  const handlePrev = () => setLightboxIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-700 font-sans">
      <Navbar />
      <main className="pt-28">
        {/* SECTION INTRO */}
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
              Un giorno di purezza ed eleganza. <br />
              Organizziamo animazione, giochi e allestimenti per rendere la Prima Comunione un evento speciale per bambini e famiglie.
            </p>
            <div className="mt-12">
              <Button onClick={scrollToForm} variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-300 px-8 py-6 rounded-none uppercase tracking-widest text-sm transition-all duration-300">
                Richiedi Preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* SECTION: PACCHETTI COMUNIONE */}
        <section className="container mx-auto px-4 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 uppercase tracking-widest">Pacchetti Comunione</h2>
            <div className="w-12 h-px bg-sky-200 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border-slate-100 hover:border-sky-100 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-500 rounded-none bg-white flex flex-col group">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-display font-medium text-slate-900 uppercase tracking-wide leading-tight min-h-[3rem] flex items-center">
                        {pkg.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-400 italic mb-6">
                      {pkg.description}
                    </p>

                    <div className="space-y-4 flex-grow">
                      {pkg.activities && (
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold mb-3">Attività</h4>
                          <ul className="space-y-2">
                            {pkg.activities.map((act, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                                <Check className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {pkg.special && (
                        <div className="mt-6 p-4 bg-sky-50/50 border border-sky-100/50">
                          <h4 className="text-[10px] uppercase tracking-[0.2em] text-sky-600/70 font-bold mb-2">Attività Speciale</h4>
                          <p className="text-sm font-medium text-sky-800 mb-2">{pkg.special.title}</p>
                          <ul className="space-y-1">
                            {pkg.special.includes.map((inc: string, idx: number) => (
                              <li key={idx} className="text-xs text-sky-600 flex items-center gap-2">
                                <div className="w-1 h-1 bg-sky-300 rounded-full" />
                                {inc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {pkg.outro && (
                      <p className="mt-8 pt-6 border-t border-slate-50 text-sm text-slate-500 italic">
                        {pkg.outro}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION: TEMI EXTRA */}
        <section className="container mx-auto px-4 mt-32">
          <div className="bg-slate-50/50 border border-slate-100 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/20 blur-[100px] rounded-full -mr-32 -mt-32" />

            <div className="max-w-4xl relative z-10">
              <h2 className="text-3xl font-display font-light text-slate-900 uppercase tracking-widest mb-6">
                Temi personalizzati disponibili
              </h2>
              <p className="text-slate-500 text-lg mb-12 max-w-2xl font-light">
                I pacchetti comunione possono essere personalizzati in base alle esigenze del cliente.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-start gap-4 p-6 bg-white shadow-sm border border-slate-100 mb-8 hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
                      <Ghost className="h-6 w-6 text-sky-600/60" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-slate-900 uppercase tracking-wide mb-2">Un tuffo nel mondo dei dinosauri</h4>
                      <p className="text-sm text-slate-500 font-light mb-3">con laboratori, enigmi e dinosauri in carne e ossa come mascotte.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Laboratori aggiuntivi</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Pittura", "Slime", "Scienziato pazzo", "Pasta di sale"].map((lab) => (
                          <span key={lab} className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-600 uppercase tracking-wider">
                            {lab}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:border-l lg:border-slate-200 lg:pl-12">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Servizi extra disponibili</h4>
                  <div className="space-y-4">
                    {[
                      { title: "Spettacoli", icon: PartyPopper },
                      { title: "Carrettini", icon: Star },
                      { title: "Gonfiabili", icon: Tent },
                    ].map((service, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="h-10 w-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center group-hover:bg-sky-50 transition-colors">
                          <service.icon className="h-5 w-5 text-sky-400" />
                        </div>
                        <span className="text-slate-700 font-light tracking-wide uppercase text-sm">{service.title}</span>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="container mx-auto px-4 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light text-slate-900 uppercase tracking-widest">Il nostro portfolio per le comunioni</h2>
            <div className="w-12 h-px bg-sky-200 mx-auto mt-4 mb-6"></div>
            <p className="text-slate-400 italic font-serif leading-relaxed">Alcuni degli allestimenti e delle animazioni realizzate per le Prime Comunioni.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {items.map((it, idx) => (
              <motion.button
                key={it.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm cursor-pointer"
                onClick={() => !it.placeholder && openLightbox(idx)}
              >
                {it.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-sky-50/30">
                    <span className="text-[10px] font-bold text-sky-200 uppercase tracking-widest">Photo</span>
                  </div>
                ) : (
                  <img 
                    src={it.src} 
                    alt="Portfolio" 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-sky-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </motion.div>

          {!showAllPhotos && allItems.length > 6 && (
            <div className="mt-16 text-center">
                <Button 
                    onClick={() => setShowAllPhotos(true)} 
                    variant="outline"
                    className="border-sky-200 text-sky-700 hover:bg-sky-50 rounded-full px-10 h-14 text-sm font-bold shadow-md transition-all hover:scale-105"
                >
                    Vedi tutte le foto ({allItems.length})
                </Button>
            </div>
          )}
        </section>

        <ImageLightbox
          isOpen={lightboxOpen}
          images={IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />

        {/* FINAL CALL TO ACTION */}
        <section className="mt-32 bg-sky-50/50 py-24 border-y border-sky-100/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-light text-slate-900 mb-4 uppercase tracking-widest">
                Richiedi un preventivo per la Prima Comunione
              </h2>
              <div className="w-12 h-px bg-slate-300 mx-auto mb-8"></div>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Contattaci per organizzare un evento personalizzato e ricevere tutte le informazioni sui pacchetti disponibili.
              </p>
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
