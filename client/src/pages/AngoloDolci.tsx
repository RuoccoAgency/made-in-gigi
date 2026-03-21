import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Candy, Cookie, IceCream, Cake, Star, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMemo } from "react";

// Load images from optimized assets folder
const dolciModules = import.meta.glob("@/assets/optimized/dolci/*.webp", { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});

const GALLERY_IMAGES = Object.values(dolciModules) as string[];

export default function AngoloDolciPage() {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        document.title = "Angolo dei Dolci | MadeinGigi Events";
    }, []);

    const allItems = useMemo(() => {
        if (GALLERY_IMAGES.length === 0) {
            return Array.from({ length: 6 }).map((_, i) => ({
                id: `placeholder-${i}`,
                src: "",
                placeholder: true
            }));
        }
        return GALLERY_IMAGES.map((src, i) => ({
            id: `img-${i}`,
            src,
            placeholder: false
        }));
    }, []);

    const items = showAllPhotos ? allItems : allItems.slice(0, 6);

    const scrollToForm = () => {
        const el = document.querySelector("#preventivo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#fffafa] text-slate-800 font-sans cursor-default">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative overflow-hidden">
                    {/* Decorative sugar splashes */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-200/30 blur-[140px] rounded-full pointer-events-none mix-blend-multiply" />
                    <div className="absolute top-1/2 -left-20 w-80 h-80 bg-fuchsia-200/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl relative z-10 mx-auto text-center"
                    >
                        <Link href="/">
                            <a className="inline-flex items-center text-sm font-black text-rose-600 hover:text-rose-700 transition-colors mb-8 bg-white border-2 border-rose-100 px-6 py-2 rounded-full shadow-lg shadow-rose-200/20">
                                ← Torna alla Home
                            </a>
                        </Link>
                        <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
                            Angolo per <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">Dolci</span>
                        </h1>
                        <p className="mt-8 text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-bold tracking-tight">
                            Un angolo scenografico e goloso per arricchire il tuo evento con dolcezza, colore e intrattenimento visivo.
                        </p>
                        <div className="mt-12">
                            <Button onClick={scrollToForm} size="lg" className="bg-rose-600 hover:bg-rose-700 text-white shadow-2xl shadow-rose-500/30 font-black px-12 h-20 text-2xl rounded-2xl transition-transform hover:scale-105 active:scale-95">
                                Dolcezza Infinita!
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* GALLERY */}
                <section className="container mx-auto px-4 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tighter">I Nostri Allestimenti</h2>
                        <div className="w-24 h-2 bg-gradient-to-r from-rose-400 to-fuchsia-500 mx-auto mt-4 rounded-full" />
                        <p className="mt-6 text-xl text-slate-600 font-bold max-w-xl mx-auto italic">Scopri la cura nei dettagli delle nostre proposte dolciarie.</p>
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
                                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500 ring-1 ring-rose-100"
                                    onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                                >
                                    {it.placeholder ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-rose-50/50">
                                            <Star className="h-10 w-10 text-rose-200 animate-pulse" />
                                        </div>
                                    ) : (
                                        <>
                                            <img 
                                                src={it.src} 
                                                alt={`Dolci Gallery ${idx + 1}`} 
                                                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 border border-rose-100 shadow-sm">
                                                <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Dettaglio</span>
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
                                className="bg-white border-2 border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 rounded-full px-12 h-16 text-lg font-black shadow-xl shadow-rose-900/5 transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter"
                            >
                                Scopri di più ({allItems.length - 6} foto)
                            </Button>
                        </div>
                    )}
                </section>


                <section className="container mx-auto px-4 mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Candy, title: "Angolo per Dolci", desc: "Una parete di caramelle mozzafiato, perfetta per foto e golosi." },
                            { icon: Star, title: "Zucchero filato", desc: "La magia classica delle nuvole dolci appena fatte." },
                            { icon: IceCream, title: "Fontana di cioccolato", desc: "Fiumi di cioccolato belga per tuffare frutta e biscotti." },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white border-none shadow-xl shadow-rose-900/5 hover:shadow-rose-900/10 transition-all group overflow-hidden rounded-[2.5rem]">
                                <CardContent className="p-10 text-center flex flex-col items-center">
                                    <div className="h-20 w-20 rounded-[2.5rem] bg-gradient-to-br from-rose-50 to-rose-100/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <f.icon className="h-10 w-10 text-rose-500 animate-bounce-slow" />
                                    </div>
                                    <h3 className="font-display font-black text-2xl mb-4 text-slate-900 uppercase tracking-tighter">{f.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mt-32 py-32 bg-rose-50/50 rounded-t-[5rem]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <Candy className="h-16 w-16 text-rose-500 mx-auto mb-6" />
                            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 uppercase tracking-tighter">Pronti per il Sugar Rush?</h2>
                            <p className="text-xl text-slate-700 font-bold max-w-2xl mx-auto">Compila il form e trasforma il tuo evento in un paradiso per i sensi.</p>
                        </div>
                        <div id="preventivo" className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-rose-900/5 ring-1 ring-rose-100">
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
