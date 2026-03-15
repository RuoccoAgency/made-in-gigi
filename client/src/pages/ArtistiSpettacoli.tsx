import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Music, Wand2, Star, Zap, PartyPopper, Flame, Mic2, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ArtistiSpettacoliPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    const scrollToForm = () => {
        const el = document.querySelector("#preventivo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-orange-500 selection:text-white">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative">
                    {/* Neon Glow Effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

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
                        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none italic uppercase">
                            Artisti <span className="text-orange-600 block md:inline">& Spettacoli</span>
                        </h1>
                        <p className="mt-12 text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium tracking-tight">
                            Collaboriamo con artisti e performer professionisti per rendere ogni evento ancora più spettacolare e coinvolgente. Dal cabaret alle grandi illusioni, portiamo il palco a casa tua.
                        </p>
                        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
                            <Button onClick={scrollToForm} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-black px-12 h-20 text-xl rounded-none uppercase tracking-widest skew-x-[-15deg] transition-all hover:shadow-[10px_10px_0px_rgba(255,165,0,0.2)]">
                                <span className="skew-x-[15deg]">Richiedi Show</span>
                            </Button>
                        </div>
                    </motion.div>
                </section>

                <section className="container mx-auto px-4 mt-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { icon: Wand2, title: "Maghi & Illusionisti", desc: "Spettacoli di grande impatto per tutte le età." },
                            { icon: Mic2, title: "Cabaret & Intrattenimento", desc: "Artisti di strada e professionisti del sorriso." },
                            { icon: Zap, title: "Performance Dinamiche", desc: "Ali danzanti, ballerini e performer professionisti." },
                            { icon: Star, title: "Bolle Giganti", desc: "Uno show incantevole che lascia tutti a bocca aperta." },
                            { icon: Flame, title: "Effetti Speciali", desc: "Fuochi scenografici e momenti ad alto impatto visivo." },
                            { icon: PartyPopper, title: "Special Host", desc: "Presentatori e vocalist per gestire ogni fase dell'evento." },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-500/50 transition-all group overflow-hidden rounded-none relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-orange-600/20 transition-all duration-700" />
                                <CardContent className="p-12">
                                    <f.icon className="h-10 w-10 text-orange-600 mb-8 transition-transform group-hover:scale-110" />
                                    <h3 className="font-display font-black text-2xl mb-4 uppercase tracking-tight italic">{f.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

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
