import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Flower2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BattesimiPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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
                    {/* Subtle Teal orbs */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50/40 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50/40 blur-[120px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl relative z-10 mx-auto text-center"
                    >
                        <Link href="/">
                            <a data-testid="link-breadcrumb-home" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-teal-600 transition-colors mb-10">
                                Home / Battesimi
                            </a>
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display font-light text-slate-900 tracking-tight leading-tight uppercase">
                            Battesimi
                        </h1>
                        <div className="w-20 h-px bg-slate-200 mx-auto my-10" />
                        <p className="mt-8 text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-light italic">
                            Allestimenti eleganti e delicati per celebrare il battesimo con scenografie curate, decorazioni personalizzate e dettagli che rendono l’evento speciale.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                            <Button onClick={scrollToForm} size="lg" className="bg-white border border-teal-200 text-teal-600 hover:bg-teal-50 shadow-sm font-bold px-10 h-16 text-lg rounded-none uppercase tracking-widest transition-all">
                                Organizza il Battesimo
                            </Button>
                        </div>
                    </motion.div>
                </section>

                <section className="container mx-auto px-4 mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        {[
                            { icon: Sparkles, title: "Allestimenti Eleganti", desc: "Scenografie raffinate e delicate per un'atmosfera magica." },
                            { icon: Heart, title: "Decorazioni Personalizzate", desc: "Dettagli creati su misura per riflettere il tuo stile." },
                            { icon: Star, title: "Tavoli Coordinati", desc: "Confettate, sweet table e allestimenti tavoli spettacolari." },
                            { icon: Flower2, title: "Dettagli Curati", desc: "Ogni piccolo elemento è pensato per rendere l'evento indimenticabile." },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white/50 backdrop-blur-sm border border-slate-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all group rounded-none">
                                <CardContent className="p-10 flex flex-col items-center text-center">
                                    <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-white shadow-inner group-hover:bg-teal-50 transition-colors">
                                        <f.icon className="h-6 w-6 text-slate-400 group-hover:text-teal-400 transition-colors" />
                                    </div>
                                    <h3 className="font-display font-medium text-lg mb-4 text-slate-900 uppercase tracking-widest">{f.title}</h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* GALLERY SECTION */}
                <section className="container mx-auto px-4 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 uppercase tracking-widest">Foto Battesimi</h2>
                        <div className="w-12 h-px bg-teal-200 mx-auto mt-4 mb-6"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "/images/allestimento battesimo/100 EURO.jpg",
                            "/images/allestimento battesimo/150 EURO.jpg",
                            "/images/allestimento battesimo/200 EURO.jpg",
                            "/images/allestimento battesimo/250 EURO.jpg"
                        ].map((src, idx) => (
                            <button
                                key={idx}
                                className="group relative aspect-[4/5] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500"
                                onClick={() => window.open(src, "_blank")}
                            >
                                <img src={src} alt="Gallery" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" />
                            </button>
                        ))}
                    </div>
                </section>

                <section className="mt-32 py-24 bg-gradient-to-tr from-teal-50/20 via-white to-emerald-50/20 border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 mb-6 uppercase tracking-widest">Inizia la Cerimonia</h2>
                            <div className="w-12 h-px bg-teal-200 mx-auto mb-8" />
                            <p className="text-slate-500 font-light text-lg italic">Rendiamo il battesimo un momento di pura eleganza. Contattaci per un preventivo personalizzato.</p>
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
