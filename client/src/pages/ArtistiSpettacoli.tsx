import { useEffect, useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Music, Wand2, Star, Zap, PartyPopper, Flame, Mic2, Check, LayoutGrid } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Dynamically load all webp images from the optimized assets folder
const imageModules = import.meta.glob("@/assets/optimized/spettacoli/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const IMAGES = Object.values(imageModules) as string[];

export default function ArtistiSpettacoliPage() {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    const allItems = useMemo(() => {
        if (IMAGES.length === 0) {
            return [];
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
        <div className="min-h-screen bg-[#fffcf9] text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative">
                    {/* Soft Glow Effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 blur-[120px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-5xl relative z-10 mx-auto text-center"
                    >
                        <Link href="/">
                            <a className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-orange-500 hover:text-orange-400 transition-colors mb-12 border-b border-orange-500/30 pb-1">
                                Back to Home / Entertainment
                            </a>
                        </Link>
                        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none italic uppercase text-slate-900">
                            Artisti <span className="text-orange-600 block md:inline">& Spettacoli</span>
                        </h1>
                        <p className="mt-12 text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium tracking-tight">
                            Collaboriamo con artists e performer professionisti per rendere ogni evento ancora più spettacolare e coinvolgente. Dal cabaret alle grandi illusioni, portiamo il palco a casa tua.
                        </p>
                        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
                            <Button onClick={scrollToForm} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-black px-12 h-20 text-xl rounded-none uppercase tracking-widest transition-all hover:shadow-[10px_10px_0px_rgba(255,165,0,0.1)]">
                                <span>Richiedi Show</span>
                            </Button>
                        </div>
                    </motion.div>
                </section>

                <section id="services" className="container mx-auto px-4 mt-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {[
                            { icon: Wand2, title: "Maghi & Illusionisti", desc: "Spettacoli di grande impatto per tutte le età." },
                            { icon: Mic2, title: "Cabaret & Intrattenimento", desc: "Artisti di strada e professionisti del sorriso." },
                            { icon: Zap, title: "Performance Dinamiche", desc: "Ali danzanti, ballerini e performer professionisti." },
                            { icon: Star, title: "Bolle Giganti", desc: "Uno show incantevole che lascia tutti a bocca aperta." },
                            { icon: Flame, title: "Effetti Speciali", desc: "Fuochi scenografici e momenti ad alto impatto visivo." },
                            { icon: PartyPopper, title: "Special Host", desc: "Presentatori e vocalist per gestire ogni fase dell'evento." },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white/80 backdrop-blur-md border border-orange-100 hover:border-orange-500/30 shadow-sm hover:shadow-xl transition-all group rounded-3xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100/50 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-orange-100 transition-all duration-700" />
                                <CardContent className="p-12">
                                    <f.icon className="h-10 w-10 text-orange-600 mb-8 transition-transform group-hover:scale-110" />
                                    <h3 className="font-display font-black text-2xl mb-4 uppercase tracking-tight italic text-slate-900">{f.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* GALLERY SECTION */}
                {allItems.length > 0 && (
                    <section className="container mx-auto px-4 mt-40">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-orange-100 pb-16">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase italic leading-none">
                                    Momenti <span className="text-orange-600">Magici</span>
                                </h2>
                                <p className="mt-6 text-slate-500 text-lg font-medium max-w-xl">
                                    Scatti rubati durante i nostri spettacoli e performance.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {items.map((p, idx) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="group relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center cursor-pointer"
                                    onClick={() => openLightbox(idx)}
                                >
                                    <img 
                                        src={p.src} 
                                        alt={`Spettacolo ${idx + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            ))}
                        </div>

                        {allItems.length > 6 && !showAllPhotos && (
                            <div className="mt-16 text-center">
                                <Button 
                                    onClick={() => setShowAllPhotos(true)} 
                                    variant="outline"
                                    size="lg" 
                                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-none px-12 h-16 text-lg font-black uppercase tracking-widest shadow-xl shadow-orange-900/5 transition-all hover:scale-105"
                                >
                                    Scopri di più ({allItems.length})
                                </Button>
                            </div>
                        )}
                    </section>
                )}

                <ImageLightbox
                  isOpen={lightboxOpen}
                  images={IMAGES}
                  currentIndex={lightboxIndex}
                  onClose={() => setLightboxOpen(false)}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />

                <section className="mt-40 py-40 bg-orange-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="grid grid-cols-6 h-full border-l border-white/10">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="border-r border-white/10" />
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 uppercase italic tracking-tighter">Accendi la Festa</h2>
                            <p className="text-xl text-orange-100 font-bold max-w-2xl mx-auto">Scegli il livello di intrattenimento perfetto per il tuo evento. Compila il form per iniziare.</p>
                        </div>

                        <div id="preventivo" className="bg-white p-10 md:p-20 shadow-[20px_20px_0px_rgba(0,0,0,0.5)] max-w-5xl mx-auto">
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
