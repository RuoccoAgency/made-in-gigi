import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Palette, Box, Camera, Zap, Layout, Shapes } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LaboratoriPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

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
                </section>

                <section className="container mx-auto px-4 mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Box, title: "Scatola dei sogni", desc: "Un viaggio nella fantasia attraverso creazioni artigianali." },
                            { icon: Camera, title: "Scatola per foto booth", desc: "Set creativi per scatti indimenticabili e divertenti." },
                            { icon: Layout, title: "Passerella per sfilata", desc: "Il momento del protagonismo e dell'espressione artistica." },
                            { icon: Zap, title: "Laser games", desc: "Sfide tecnologiche adrenaliniche e percorsi a ostacoli." },
                            { icon: Shapes, title: "Laboratori creativi", desc: "Pittura, slime, scienziato pazzo e molto altro." },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white/70 backdrop-blur border-indigo-100/50 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all group overflow-hidden rounded-[2rem]">
                                <CardContent className="p-8 text-center flex flex-col items-center">
                                    <div className="h-16 w-16 rounded-3xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                                        <f.icon className="h-8 w-8 text-indigo-600" />
                                    </div>
                                    <h3 className="font-display font-bold text-xl mb-3 text-slate-900 italic tracking-wide">{f.title}</h3>
                                    <p className="text-slate-500 font-medium">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
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
