import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Baby, Sparkles, Heart, Star, PartyPopper, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const GALLERY_IMAGES: string[] = [
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.24 (1).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.24.webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25 (1).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25 (2).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25 (3).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25 (4).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25 (5).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25 (6).webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.25.webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.18.43.webp",
    "/images/gender reveal/WhatsApp Image 2026-03-17 at 10.19.01.webp",
];


export default function GenderRevealPage() {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    const allItems = useMemo(() => {
        if (GALLERY_IMAGES.length === 0) {
            return Array.from({ length: 4 }).map((_, idx) => ({
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

    const items = showAllPhotos ? allItems : allItems.slice(0, 4);


    const scrollToForm = () => {
        const el = document.querySelector("#preventivo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative overflow-hidden">
                    {/* Subtle Pink/Blue orbs */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/40 blur-[120px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl relative z-10 mx-auto text-center"
                    >
                        <Link href="/">
                            <a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-fuchsia-600 transition-colors mb-10">
                                Home / Gender Reveal
                            </a>
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display font-light text-slate-900 tracking-tight leading-tight uppercase">
                            Gender <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-pink-400 font-bold">Reveal</span>
                        </h1>
                        <div className="w-20 h-px bg-slate-200 mx-auto my-10" />
                        <p className="mt-8 text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-light italic">
                            Un momento emozionante e indimenticabile per scoprire il sesso del tuo bimbo. Creiamo allestimenti spettacolari e scenografie personalizzate per rendere il tuo Gender Reveal davvero magico.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                            <Button onClick={scrollToForm} size="lg" className="bg-white border border-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-50 shadow-sm font-bold px-10 h-16 text-lg rounded-none uppercase tracking-widest transition-all">
                                Organizza il tuo Reveal
                            </Button>
                        </div>
                    </motion.div>
                </section>

               <section className="container mx-auto px-4 mt-24 py-16 bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-12">
                            <div className="border-l-4 border-blue-100 pl-8 py-2">
                                <h2 className="text-3xl font-display font-light text-slate-900 uppercase tracking-widest mb-4">Allestimenti Tematici</h2>
                                <p className="text-xl text-slate-600 font-light leading-relaxed italic">
                                    Archi di palloncini e decorazioni in tinte pastello blue e pink per creare un'attesa magica.
                                </p>
                            </div>
                            <div className="border-l-4 border-fuchsia-100 pl-8 py-2">
                                <h2 className="text-3xl font-display font-light text-slate-900 uppercase tracking-widest mb-4">La Grande Rivelazione</h2>
                                <p className="text-xl text-slate-600 font-light leading-relaxed italic">
                                    Effetti speciali, fumo colorato, lettere giganti a LED e lanci segreti per il momento del reveal.
                                </p>
                            </div>
                            <div className="border-l-4 border-pink-100 pl-8 py-2">
                                <h2 className="text-3xl font-display font-light text-slate-900 uppercase tracking-widest mb-4">Percorsi Emozionali</h2>
                                <p className="text-xl text-slate-600 font-light leading-relaxed italic">
                                    Dettagli curati, confettate e gadget coordinati per guidare gli ospiti verso il momento più atteso.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 mb-6 uppercase tracking-widest">Le Nostre Rivelazioni</h2>
                        <div className="w-12 h-px bg-fuchsia-200 mx-auto" />
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {items.map((it, idx) => (
                            <button
                                key={it.id}
                                className="group relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm"
                                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                            >
                                {it.placeholder ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 border border-slate-100">
                                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none text-center">Photo</span>
                                    </div>
                                ) : (
                                    <img
                                        src={it.src}
                                        alt="Gender Reveal Gallery"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-fuchsia-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        ))}
                    </motion.div>

                    {!showAllPhotos && allItems.length > 4 && (
                        <div className="mt-12 text-center">
                            <Button 
                                onClick={() => setShowAllPhotos(true)} 
                                variant="outline"
                                className="bg-white border-fuchsia-200 text-fuchsia-600 hover:bg-fuchsia-50 rounded-full px-10 h-14 text-sm font-bold shadow-md transition-all hover:scale-105"
                            >
                                Vedi tutte le foto ({allItems.length})
                            </Button>
                        </div>
                    )}
                </section>


                <section className="mt-32 py-24 bg-gradient-to-tr from-blue-50/20 via-white to-pink-50/20 border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 mb-6 uppercase tracking-widest">Inizia la Magia</h2>
                            <div className="w-12 h-px bg-fuchsia-200 mx-auto mb-8" />
                            <p className="text-slate-500 font-light text-lg italic">Ogni dettaglio è pensato per stupire e commuovere. Contattaci per un preventivo personalizzato.</p>
                        </div>
                        <div id="preventivo" className="bg-white border border-slate-100 p-8 md:p-16 shadow-xl max-w-5xl mx-auto">
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
