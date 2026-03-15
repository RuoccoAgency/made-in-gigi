import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Music, Mic, MapPin, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Feste18AnniPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    const scrollToForm = () => {
        const el = document.querySelector("#preventivo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#fcfaff] text-slate-800 font-sans">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative overflow-hidden">
                    {/* Decorative glows */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-violet-200/30 blur-[140px] rounded-full pointer-events-none mix-blend-multiply" />
                    <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-4xl relative z-10 mx-auto text-center"
                    >
                        <Link href="/">
                            <a className="inline-flex items-center text-sm font-black text-violet-600 hover:text-violet-700 transition-colors mb-8 bg-white border-2 border-violet-100 px-6 py-2 rounded-full shadow-lg shadow-violet-200/20">
                                ← Torna alla Home
                            </a>
                        </Link>
                        <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
                            Feste di <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600">18 Anni</span>
                        </h1>
                        <p className="mt-8 text-2xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-bold tracking-tight">
                            Organizziamo il tuo 18° compleanno dalla progettazione iniziale fino all’allestimento completo, includendo musica, speaker, intrattenimento e supporto nella scelta della location per creare una festa indimenticabile.
                        </p>
                        <div className="mt-12">
                            <Button onClick={scrollToForm} size="lg" className="bg-violet-600 hover:bg-violet-700 text-white shadow-2xl shadow-violet-500/30 font-black px-12 h-20 text-2xl rounded-2xl transition-transform hover:scale-105 active:scale-95">
                                Inizia a Progettare!
                            </Button>
                        </div>
                    </motion.div>
                </section>

                <section className="container mx-auto px-4 mt-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Sparkles, title: "Allestimenti", desc: "Decorazioni personalizzate e scenografie mozzafiato per il tuo tema.", img: "/images/allestimento battesimo/allestimenti per adulti/160 EURO CON 3 STRUTTURE ORO E ARCO 2 M.jpg" },
                            { icon: Music, title: "Musica e Speaker", desc: "I migliori DJ e speaker per animare la tua serata con energia.", img: "/images/allestimento battesimo/allestimenti per adulti/250 EURO COME FOTO.jpg" },
                            { icon: MapPin, title: "Location", desc: "Supporto professionale nella scelta della location perfetta.", img: "/images/allestimento battesimo/allestimenti per adulti/COSTO 150 EURO.jpeg" },
                            { icon: Star, title: "Organizzazione", desc: "Gestione completa di ogni dettaglio, dall'inizio alla fine.", img: "/images/allestimento battesimo/allestimenti per adulti/COSTO 300 EURO COME FOTO.jpg" },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white border-none shadow-xl shadow-violet-900/5 hover:shadow-violet-900/10 transition-all group overflow-hidden rounded-[2.5rem] relative">
                                {f.img && (
                                    <div className="w-full aspect-[4/3] overflow-hidden">
                                        <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                )}
                                <CardContent className="p-8 text-center flex flex-col items-center">
                                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-50 to-violet-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative -mt-14 border-4 border-white">
                                        <f.icon className="h-10 w-10 text-violet-500 animate-bounce-slow" />
                                    </div>
                                    <h3 className="font-display font-black text-2xl mb-4 text-slate-900 uppercase tracking-tighter">{f.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>


                <section className="mt-32 py-32 bg-violet-50/50 rounded-t-[5rem]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <Star className="h-16 w-16 text-violet-500 mx-auto mb-6" />
                            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 uppercase tracking-tighter">Il tuo party ideale</h2>
                            <p className="text-xl text-slate-700 font-bold max-w-2xl mx-auto">Compila il form e trasforma il tuo diciottesimo in un evento leggendario.</p>
                        </div>
                        <div id="preventivo" className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-violet-900/5 ring-1 ring-violet-100">
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
