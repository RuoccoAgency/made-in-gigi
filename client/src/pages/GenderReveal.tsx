import { useEffect, useMemo } from "react";
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

                <section className="container mx-auto px-4 mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Baby, title: "Allestimenti Boy or Girl", desc: "Archi e decorazioni tematiche in tinte pastello." },
                            { icon: PartyPopper, title: "Lancio Segreto", desc: "Effetti speciali, fumo colorato o palloncini giganti." },
                            { icon: Star, title: "Lettere Luminose", desc: "Scritte BOY o GIRL a LED per un impatto scenico totale." },
                            { icon: Heart, title: "Percorsi Emozionali", desc: "Un cammino guidato verso la grande rivelazione." },
                            { icon: Sparkles, title: "Dettagli Magici", desc: "Confettate, gadget e inviti coordinati per gli ospiti." },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white/50 backdrop-blur-sm border border-slate-100 hover:border-fuchsia-200 shadow-sm hover:shadow-md transition-all group rounded-none">
                                <CardContent className="p-10 flex flex-col items-center text-center">
                                    <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-white shadow-inner group-hover:bg-fuchsia-50 transition-colors">
                                        <f.icon className="h-6 w-6 text-slate-400 group-hover:text-fuchsia-400 transition-colors" />
                                    </div>
                                    <h3 className="font-display font-medium text-lg mb-4 text-slate-900 uppercase tracking-widest">{f.title}</h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-4 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 mb-6 uppercase tracking-widest">Le Nostre Rivelazioni</h2>
                        <div className="w-12 h-px bg-fuchsia-200 mx-auto" />
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]"
                    >
                        {items.map((it, idx) => (
                            <button
                                key={it.id}
                                className={`group relative overflow-hidden transition-all ${idx % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                    }`}
                                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                            >
                                {it.placeholder ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 border border-slate-100">
                                        <span className="font-light text-slate-300">Foto in arrivo</span>
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
