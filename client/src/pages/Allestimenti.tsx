import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Palette, Camera, Crown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GALLERY_IMAGES: string[] = [
  "/images/wetransfer_allestimento-battesimo_2026-03-13_1002/allestimento battesimo/100 EURO.jpg",
  "/images/wetransfer_allestimento-battesimo_2026-03-13_1002/allestimento battesimo/150 EURO.jpg",
  "/images/wetransfer_allestimento-battesimo_2026-03-13_1002/allestimento battesimo/200 EURO.jpg",
  "/images/wetransfer_allestimento-battesimo_2026-03-13_1002/allestimento battesimo/250 EURO.jpg",
  "/images/wetransfer_allestimento-battesimo_2026-03-13_1002/allestimento battesimo/298176587_5602720523118043_1171489281677965741_n.jpg",
  "/images/allestimenti per adulti/160 EURO CON 3 STRUTTURE ORO E ARCO 2 M.jpg",
  "/images/allestimenti per adulti/250 EURO COME FOTO.jpg",
  "/images/allestimenti per adulti/293324034_5523000047756758_2071711076166925323_n.jpg",
  "/images/allestimenti per adulti/COSTO 150 EURO.jpeg",
  "/images/allestimenti per adulti/COSTO 150 EURO.jpg",
  "/images/allestimenti per adulti/COSTO 250 EURO COME FOTO.jpg",
  "/images/allestimenti per adulti/COSTO 300 EURO COME FOTO.jpg",
  "/images/allestimenti per adulti/COSTO 300 EURO.jpeg",
  "/images/allestimenti per adulti/COSTO 350 EURO.jpg",
  "/images/allestimenti per compleanni/202341580_4309865342403574_4538620096295082383_n.jpg",
  "/images/allestimenti per compleanni/221235282_4416454168411357_1810285300504269591_n.jpg",
  "/images/allestimenti per compleanni/251539037_4721967907859980_6889398567289818069_n.jpg",
  "/images/allestimenti per compleanni/280690891_5359640354092729_7898705918205218487_n.jpg",
  "/images/allestimenti per compleanni/297009636_5602718916451537_8869247767338697131_n.jpg",
  "/images/allestimenti per compleanni/298168800_1602628480134195_7691046820701733505_n.webp",
  "/images/allestimenti per compleanni/310013885_5752612191462208_8532070385258570788_n.jpg",
  "/images/allestimenti per compleanni/314953839_818141679640074_2033614512149437795_n.jpg",
  "/images/allestimenti per compleanni/315349985_818755086245400_1435910162807736504_n.jpg",
  "/images/allestimenti per compleanni/348677374_1713116509146512_421041108702839202_n.jpg",
  "/images/allestimenti per compleanni/351158892_229986173087839_6233193098050466300_n.jpg",
  "/images/allestimenti per compleanni/362639300_1022434969210743_5751204042057348135_n.jpg",
  "/images/allestimenti per compleanni/4dc2a760-9b42-4e04-99ff-0894b2e06073.jpg",
  "/images/allestimenti per compleanni/allestimenti a partire da 150 euro in base alle specifiche richieste.jfif",
  "/images/allestimenti per compleanni/d9e14925-fc85-4f0c-8243-d1a97ed52bf9.jpg",
  "/images/allestimenti per compleanni/f3e5276a-48fa-4282-826d-08b330866a98.jpg",
  "/images/allestimenti per compleanni/FB_IMG_1615409557103.jpg",
  "/images/allestimenti per compleanni/IMG_20210703_193147.jpg",
  "/images/allestimenti per compleanni/IMG_20210730_181059.jpg",
  "/images/allestimenti per compleanni/IMG_20210823_182422.jpg",
  "/images/allestimenti per compleanni/IMG_20220529_104557.jpg",
  "/images/allestimenti per compleanni/WhatsApp Image 2021-05-25 at 10.29.23 (1).jpeg",
  "/images/allestimenti per compleanni/WhatsApp Image 2023-04-19 at 18.13.01 (6).jpeg",
  "/images/allestimenti per compleanni/WhatsApp Image 2023-04-19 at 18.18.42.jpeg",
  "/images/allestimenti per compleanni/WhatsApp Image 2023-09-27 at 17.29.19 (2).jpeg",
  "/images/ARCHI VELA/1.jpeg",
  "/images/ARCHI VELA/10.jpeg",
  "/images/ARCHI VELA/12.jpg",
  "/images/ARCHI VELA/13.jpg",
  "/images/ARCHI VELA/14.jpg",
  "/images/ARCHI VELA/15.jpg",
  "/images/ARCHI VELA/16.jpg",
  "/images/ARCHI VELA/17.jpg",
  "/images/ARCHI VELA/18.JPG",
  "/images/ARCHI VELA/19.jpeg",
  "/images/ARCHI VELA/2.jpeg",
  "/images/ARCHI VELA/3.jpeg",
  "/images/ARCHI VELA/4.jpeg",
  "/images/ARCHI VELA/5.jpeg",
  "/images/ARCHI VELA/6.jpeg",
  "/images/ARCHI VELA/7.jpeg",
  "/images/ARCHI VELA/8.jpeg",
  "/images/ARCHI VELA/9.jpeg",
  "/images/ARCHI VELA/sweet.jpeg",
  "/images/bioancaneve/408970890_1169670361153869_1441541955601944849_n.jpg",
  "/images/bioancaneve/409014875_1169670371153868_819781436404844000_n.jpg",
  "/images/bioancaneve/409039333_1169670357820536_1989993705658322857_n.jpg",
  "/images/bioancaneve/409050842_1169670351153870_3234703287452454696_n.jpg",
  "/images/bioancaneve/409068940_1169670367820535_228322455896984901_n.jpg",
  "/images/bioancaneve/409100053_1169670354487203_8976811030479576826_n.jpg",
  "/images/bioancaneve/409106551_1169670364487202_7339619238156564153_n.jpg",
  "/images/cenerentola/071e6819-83bd-4db0-ae28-fa4436731dfb.jpg",
  "/images/cenerentola/0de9a402-91b5-4ab3-ab64-9fb046ecdf50.jpg",
  "/images/cenerentola/13096fd8-710e-4063-b793-53f5e0e30877.jpg",
  "/images/cenerentola/2174b607-7993-45c2-9a85-dc2f161b9c7b.jpg",
  "/images/cenerentola/427121ab-18bb-45cf-b2c2-d7a9173cf7a7.jpg",
  "/images/cenerentola/7f0083e2-2c33-477f-939e-88e86826c1b4.jpg",
  "/images/cenerentola/b6fc02b7-c3ce-4cbb-b58e-a40a7f1c8df5.jpg",
  "/images/cenerentola/ba5a4198-4b8b-478c-b151-be50b7c1629c.jpg",
  "/images/cenerentola/cf9dd46f-e200-4893-bd33-60ac64bb300c.jpg",
  "/images/cenerentola/e37610f2-6469-4ccd-a9a3-c9d8dc9378fc.jpg",
  "/images/cenerentola/WhatsApp Image 2023-04-14 at 11.42.36.jpeg",
  "/images/cenerentola/WhatsApp Image 2023-04-19 at 18.18.51 (10).jpeg",
  "/images/cenerentola/WhatsApp Image 2023-04-19 at 18.18.51 (7).jpeg",
  "/images/cenerentola/WhatsApp Image 2023-04-19 at 18.18.51 (8).jpeg",
  "/images/cenerentola/WhatsApp Image 2023-04-19 at 18.18.52.jpeg",
  "/images/temi con personalizzazione/120047775_3531210693602380_8590353904957541347_n.jpg",
  "/images/temi con personalizzazione/135e28d9-5adb-49e1-ba82-a5bb5c0cd3d7 (1).jfif",
  "/images/temi con personalizzazione/292217385_5502172849839478_4492420795884389494_n(1).jpg",
  "/images/temi con personalizzazione/294255205_5542197332503696_2661678291067827710_n.jpg",
  "/images/temi con personalizzazione/297066370_5582994351757327_5714870777046302944_n.jpg",
  "/images/temi con personalizzazione/305092745_5678014938921934_1893668868365247599_n.jpg",
  "/images/temi con personalizzazione/307130454_5719454298111331_7332263841368222809_n.jpg",
  "/images/temi con personalizzazione/307335564_5719451821444912_4207009058834044389_n.jpg",
  "/images/temi con personalizzazione/327425828_727183168824348_7506514868513529473_n.jpg",
  "/images/temi con personalizzazione/350458511_268839135503990_1940822417483299988_n.jpg",
  "/images/temi con personalizzazione/362657862_1022434912544082_7710157068083436294_n.jpg",
  "/images/temi con personalizzazione/3679dcab-f6f2-44a0-b980-454141d0d969.jpg",
  "/images/temi con personalizzazione/384394330_1070489787738594_4742793390778134951_n.jpg",
  "/images/temi con personalizzazione/49948749_2182097471847049_7348036448945176576_n.jpg",
  "/images/temi con personalizzazione/4d658058-4fcb-469d-b5ab-9055d8a34e39.jfif",
  "/images/temi con personalizzazione/60597538_2387431107980350_529610780887220224_n.jpg",
  "/images/temi con personalizzazione/60635175_2387431314646996_6291481988847108096_n.jpg",
  "/images/temi con personalizzazione/60907222_2387431207980340_4231985586333810688_n.jpg",
  "/images/temi con personalizzazione/62337316_2417653101624817_1748230815378046976_n.jpg",
  "/images/temi con personalizzazione/62502084_2417652978291496_4574937191616086016_n.jpg",
  "/images/temi con personalizzazione/67e5d039-01e0-4052-a42b-04ee4c7bd866.jpg",
  "/images/temi con personalizzazione/70094482_2606286332761492_6686560611473555456_n.jpg",
  "/images/temi con personalizzazione/70097549_2606286226094836_1935201135593783296_n.jpg",
  "/images/temi con personalizzazione/70322506_2585727168150742_3934238520431869952_n.jpg",
  "/images/temi con personalizzazione/79217998_2800111720045618_477256714391912448_n.jpg",
  "/images/temi con personalizzazione/cddf96db-8b8a-4f0c-91c2-e4e04872dce9.jpg",
  "/images/temi con personalizzazione/FB_IMG_1615390006489.jpg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.14.15 (4).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.44 (6).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.45 (1).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.47 (1).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.47 (7).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.49.jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.50 (1).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-04-19 at 18.18.51.jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-09-27 at 17.29.59 (4).jpeg",
  "/images/temi con personalizzazione/WhatsApp Image 2023-09-27 at 17.29.59 (5).jpeg",
  "/images/wetransfer_baby-boss_2026-03-13_0955/23.jpeg",
];

export default function AllestimentiPage() {
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
    <div className="min-h-screen bg-[#f8f5f0] text-foreground font-sans">
      <Navbar />
      <main className="pt-28">
        {/* HERO SECTION - Allestimenti (Gold/Elegant) */}
        <section className="container mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl relative z-10"
          >
            <Link href="/">
              <a className="inline-flex items-center text-sm font-medium text-amber-700/70 hover:text-amber-800 transition-colors mb-6 bg-amber-50 px-3 py-1 rounded-full border border-amber-100" data-testid="link-breadcrumb-home">
                ← Torna alla Home
              </a>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight">
              Allestimenti <span className="text-amber-600">Esclusivi</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Trasformiamo spazi vuoti in scenografie emozionanti. Decorazioni, balloon art e dettagli di design curati per creare un'atmosfera coerente e raffinata.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={scrollToForm} size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/10 font-bold px-8 h-14 text-lg">
                Richiedi un preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* FEATURES - Amber/Gold Theme */}
        <section className="container mx-auto px-4 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Palette, title: "Moodboard Design", desc: "Studio della palette colori e dello stile" },
              { icon: Crown, title: "Finiture Premium", desc: "Materiali di alta qualità e dettagli oro" },
              { icon: Camera, title: "Scenografie", desc: "Backdrop d'impatto per foto perfette" },
            ].map((f, i) => (
              <Card key={i} className="bg-white/50 backdrop-blur border border-amber-100/50 hover:border-amber-200 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                    <f.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl mb-2 text-slate-800" data-testid={`text-feature-title-${i}`}>{f.title}</div>
                    <div className="text-slate-500 leading-relaxed" data-testid={`text-feature-desc-${i}`}>{f.desc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* GALLERY */}
        <section className="container mx-auto px-4 mt-24">
          <div className="flex items-end justify-between gap-6 mb-8 border-b border-amber-100 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">I Nostri Lavori</h2>
              <p className="mt-2 text-slate-500">Ispirazioni dai nostri ultimi eventi.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {items.map((it, idx) => (
              <button
                key={it.id}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100"
                onClick={() => !it.placeholder && window.open(it.src, "_blank")}
              >
                {it.placeholder ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-amber-50/50">
                    <span className="text-sm font-medium text-amber-800/50">Foto in arrivo</span>
                  </div>
                ) : (
                  <img src={it.src} alt="Gallery" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </motion.div>
        </section>

        <section className="mt-24 bg-white py-24 border-t border-amber-100/50">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Pronti a stupire?</h2>
                <p className="text-lg text-slate-600">Raccontaci la tua idea, noi la realizzeremo.</p>
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
