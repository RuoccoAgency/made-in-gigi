import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Box, Camera, Zap, Layout, Shapes, Star } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Load images from optimized assets folder
const laboratoriModules = import.meta.glob("@/assets/optimized/laboratori/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const GALLERY_IMAGES = Object.values(laboratoriModules) as string[];

export default function LaboratoriPage() {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        document.title = "Laboratori Creativi | MadeinGigi Events";
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
        <div className="min-h-screen bg-[#fafbff] text-slate-700 font-sans">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/40 blur-[100px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl relative z-10 mx-auto text-center"
                    >
                        <Link href="/">
                            <a className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors mb-8 bg-indigo-50 px-4 py-2 rounded-full shadow-sm">
                                ← Torna alla Home
                            </a>
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tight leading-tight italic">
                            Laboratori <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Creativi</span>
                        </h1>
                        <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                            Esperienze creative e coinvolgenti per bambini, con attività originali pensate per divertire, stimolare la fantasia e rendere ogni evento ancora più speciale.
                        </p>
                        <div className="mt-10">
                            <Button onClick={scrollToForm} size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/20 font-bold px-10 h-16 text-xl rounded-full">
                                Prenota un Laboratorio
                            </Button>
                        </div>
                    </motion.div>
                </section>                <section className="container mx-auto px-4 mt-24 py-16">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-16">
                            {[
                                { title: "Scatola dei sogni", desc: "Un viaggio nella fantasia attraverso creazioni artigianali che stimolano la manualità e lo spirito creativo di ogni bambino." },
                                { title: "Scatola per foto booth", desc: "Set creativi e originali per scatti indimenticabili, per trasformare ogni festa in un set fotografico divertente." },
                                { title: "Passerella per sfilata", desc: "Un momento dedicato al protagonismo e all'espressione artistica, dove la fantasia prende vita in movimento." },
                                { title: "Laser games", desc: "Sfide tecnologiche adrenaliniche e percorsi a ostacoli avvincenti per un divertimento dinamico e sicuro." },
                                { title: "Laboratori creativi", desc: "Pittura, slime, scienziato pazzo e tantissime altre attività manuali per esplorare nuovi mondi attraverso il gioco." },
                            ].map((item, idx) => (
                                <div key={idx} className="relative pl-12">
                                    <div className="absolute left-0 top-1.5 w-1 h-8 bg-indigo-200 rounded-full" />
                                    <h3 className="text-2xl md:text-3xl font-display font-black text-slate-800 mb-4 italic tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-6 italic">Momenti in Laboratorio</h2>
                        <div className="w-12 h-1 bg-indigo-200 mx-auto rounded-full" />
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
                                    className="group relative aspect-square rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-500 ring-1 ring-indigo-100"
                                    onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                                >
                                    {it.placeholder ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-indigo-50/50">
                                            <Star className="h-10 w-10 text-indigo-200 animate-pulse" />
                                        </div>
                                    ) : (
                                        <>
                                            <img
                                                src={it.src}
                                                alt={`Laboratori Gallery ${idx + 1}`}
                                                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 border border-indigo-100 shadow-sm">
                                                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Dettaglio</span>
                                            </div>
                                        </>
                                    )}
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {!showAllPhotos && allItems.length > 6 && (
                        <div className="mt-20 text-center">
                            <Button 
                                onClick={() => setShowAllPhotos(true)} 
                                variant="outline"
                                className="bg-white border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-full px-12 h-16 text-lg font-black shadow-xl shadow-indigo-900/5 transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter"
                            >
                                Vedi tutte le foto ({allItems.length})
                            </Button>
                        </div>
                    )}
                </section>


                <section className="mt-24 py-24 bg-indigo-50/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-6 italic">Crea con noi</h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">Raccontaci la tua idea e noi progetteremo il laboratorio perfetto per il tuo evento.</p>
                        </div>
                        <div id="preventivo" className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-indigo-500/10">
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
