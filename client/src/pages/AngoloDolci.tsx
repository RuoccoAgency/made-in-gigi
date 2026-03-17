import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Candy, Cookie, IceCream, Cake, Star, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMemo } from "react";

const GALLERY_IMAGES: string[] = [
  "/images/ARCHI VELA/sweet.jpeg",
  "/images/torte/297039539_5582994698423959_4263431021959720845_n - Copia.jpg",
  "/images/torte/297039539_5582994698423959_4263431021959720845_n.jpg",
  "/images/torte/3fcdd9b7afb02487dec6962b2a7c1903.jpg",
  "/images/torte/408961082_1169670374487201_2688390413769390592_n.jpg",
  "/images/torte/BBUG3367.JPG",
  "/images/torte/FB_IMG_1626127615333.jpg",
  "/images/torte/FB_IMG_1627479916939.jpg",
  "/images/torte/FB_IMG_1632555017368.jpg",
  "/images/torte/IMG_20210703_193159.jpg",
  "/images/torte/IMG_20210703_193204.jpg",
  "/images/torte/IMG_3112.JPG",
  "/images/torte/JGQI0534.JPEG",
  "/images/torte/NZCJ2958.JPG",
  "/images/torte/RLMT9631.JPG",
  "/images/torte/WhatsApp Image 2023-09-27 at 17.29.20.jpeg",
  "/images/torte/WhatsApp Image 2025-05-12 at 19.03.51.jpeg",
];

export default function AngoloDolciPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    const items = useMemo(() => {
        if (GALLERY_IMAGES.length === 0) {
            return Array.from({ length: 4 }).map((_, i) => ({
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

    const scrollToForm = () => {
        const el = document.querySelector("#preventivo");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#fffafa] text-slate-800 font-sans">
            <Navbar />
            <main className="pt-28 pb-0">
                <section className="container mx-auto px-4 relative overflow-hidden">
                    {/* Decorative sugar splashes */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-200/30 blur-[140px] rounded-full pointer-events-none mix-blend-multiply" />
                    <div className="absolute top-1/2 -left-20 w-80 h-80 bg-fuchsia-200/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
                <section className="container mx-auto px-4 mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase tracking-tighter">I Nostri Angoli</h2>
                        <p className="mt-4 text-xl text-slate-600 font-bold">Un'esplosione di dolcezza per i tuoi occhi.</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {items.map((it) => (
                            <button
                                key={it.id}
                                className="group relative aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-rose-900/5 ring-1 ring-rose-100"
                                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
                            >
                                {it.placeholder ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-lg font-black text-rose-200 uppercase tracking-widest">Foto in arrivo</span>
                                    </div>
                                ) : (
                                    <img src={it.src} alt="Gallery" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        ))}
                    </motion.div>
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
