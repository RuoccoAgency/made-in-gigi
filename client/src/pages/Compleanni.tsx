import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Gift, PartyPopper, Smile, Star } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = [
  "/images/allestimenti per compleanni/202341580_4309865342403574_4538620096295082383_n.webp",
  "/images/allestimenti per compleanni/221235282_4416454168411357_1810285300504269591_n.webp",
  "/images/allestimenti per compleanni/251539037_4721967907859980_6889398567289818069_n.webp",
  "/images/allestimenti per compleanni/280690891_5359640354092729_7898705918205218487_n.webp",
  "/images/allestimenti per compleanni/297009636_5602718916451537_8869247767338697131_n.webp",
  "/images/allestimenti per compleanni/298168800_1602628480134195_7691046820701733505_n.webp",
  "/images/allestimenti per compleanni/310013885_5752612191462208_8532070385258570788_n.webp",
  "/images/allestimenti per compleanni/314953839_818141679640074_2033614512149437795_n.webp",
  "/images/allestimenti per compleanni/315349985_818755086245400_1435910162807736504_n.webp",
  "/images/allestimenti per compleanni/348677374_1713116509146512_421041108702839202_n.webp",
  "/images/allestimenti per compleanni/351158892_229986173087839_6233193098050466300_n.webp",
  "/images/allestimenti per compleanni/362639300_1022434969210743_5751204042057348135_n.webp",
  "/images/allestimenti per compleanni/4dc2a760-9b42-4e04-99ff-0894b2e06073.webp",
  "/images/allestimenti per compleanni/FB_IMG_1615409557103.webp",
  "/images/allestimenti per compleanni/IMG_20210703_193147.webp",
  "/images/allestimenti per compleanni/IMG_20210730_181059.webp",
  "/images/allestimenti per compleanni/IMG_20210823_182422.webp",
  "/images/allestimenti per compleanni/IMG_20220529_104557.webp",
  "/images/allestimenti per compleanni/WhatsApp Image 2021-05-25 at 10.29.23 (1).webp",
  "/images/allestimenti per compleanni/WhatsApp Image 2023-04-19 at 18.13.01 (6).webp",
  "/images/allestimenti per compleanni/WhatsApp Image 2023-04-19 at 18.18.42.webp",
  "/images/allestimenti per compleanni/WhatsApp Image 2023-09-27 at 17.29.19 (2).webp"
];

export default function CompleanniPage() {
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
    <div className="min-h-screen bg-[#fff0f5] text-foreground font-sans">
      <Navbar />
      <main className="pt-28">
        {/* HERO SECTION - Compleanni (Pink/Fun) */}
        <section className="container mx-auto px-4 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-pink-300/20 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-300/20 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="max-w-4xl relative z-10 mx-auto text-center"
          >
             <Link href="/">
              <a className="inline-flex items-center text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors mb-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:shadow-md" data-testid="link-breadcrumb-home">
                ← Torna alla Home
              </a>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Feste di <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Compleanno</span> <br/>Indimenticabili
            </h1>
            <p className="mt-8 text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Dalla festa dei bimbi scatenata agli eventi per adulti. Colori, divertimento e allestimenti che lasciano il segno!
            </p>
            <div className="mt-10">
              <Button onClick={scrollToForm} size="lg" className="bg-pink-600 hover:bg-pink-700 text-white shadow-xl shadow-pink-500/20 font-bold px-10 h-16 text-xl rounded-full hover:scale-105 transition-transform">
                Organizza la tua festa!
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FEATURES - Fun Icons */}
        <section className="container mx-auto px-4 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Gift, title: "Pacchetti All-in-One", desc: "Pensiamo a tutto noi: allestimento, torta e gadget.", color: "text-purple-500", bg: "bg-purple-100" },
              { icon: Smile, title: "Animazione Top", desc: "Giochi, musica e intrattenimento per non annoiarsi mai.", color: "text-pink-500", bg: "bg-pink-100" },
              { icon: Star, title: "Effetto WOW", desc: "Palloncini organici, neon led e scritte personalizzate.", color: "text-yellow-500", bg: "bg-yellow-100" },
            ].map((f, i) => (
              <Card key={i} className="bg-white border-2 border-transparent hover:border-pink-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`h-16 w-16 rounded-full ${f.bg} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className={`h-8 w-8 ${f.color}`} />
                  </div>
                  <div className="font-display font-bold text-xl mb-3 text-slate-900" data-testid={`text-feature-title-${i}`}>{f.title}</div>
                  <div className="text-slate-600" data-testid={`text-feature-desc-${i}`}>{f.desc}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* GALLERY - Masonry Grid look */}
        <section className="container mx-auto px-4 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Foto Party</h2>
            <p className="mt-4 text-lg text-slate-600">I sorrisi più belli delle nostre feste.</p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {items.map((it, idx) => (
              <button
                key={it.id}
                className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md hover:shadow-xl transition-all"
                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
              >
                {it.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-pink-50">
                    <span className="text-[10px] font-bold text-pink-300 uppercase">Photo</span>
                  </div>
                ) : (
                  <img src={it.src} alt="Gallery" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </motion.div>

          {!showAllPhotos && allItems.length > 4 && (
            <div className="mt-12 text-center">
                <Button 
                    onClick={() => setShowAllPhotos(true)} 
                    variant="outline"
                    className="bg-white border-pink-200 text-pink-600 hover:bg-pink-50 rounded-full px-10 h-14 text-sm font-bold shadow-md transition-all hover:scale-105"
                >
                    Vedi tutte le foto ({allItems.length})
                </Button>
            </div>
          )}
        </section>

        <section className="mt-24 py-20 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-10">
                <PartyPopper className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Facciamo Festa?</h2>
                <p className="text-lg text-slate-600">Compila il modulo, ci mettiamo subito al lavoro!</p>
             </div>
             <div id="preventivo">
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
