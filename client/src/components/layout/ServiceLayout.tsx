import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { QuoteForm } from "../sections/QuoteForm";
import { Contact } from "../sections/Contact";
import { WhatsAppWidget } from "../ui/WhatsAppWidget";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceLayoutProps {
  title: string;
  description: string;
  category: string;
  icon?: LucideIcon;
  images?: string[];
}

export function ServiceLayout({ title, description, category, icon: Icon, images }: ServiceLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const galleryItems = images && images.length > 0 
    ? images.map((src, idx) => ({ id: `img-${idx}`, src, label: `${title} ${idx + 1}`, placeholder: false }))
    : Array.from({ length: 6 }).map((_, idx) => ({
        id: `placeholder-${idx}`,
        src: "",
        label: `Progetto ${idx + 1}`,
        placeholder: true
      }));

  // Parse description into sections
  const lines = description.split('\n').map(l => l.trim()).filter(Boolean);
  const sections: { title: string; content: string }[] = [];
  let intro = "";
  let currentTitle = "";
  let currentContent: string[] = [];

  lines.forEach((line, idx) => {
    // Detect title (short line, no special chars, no colon unless very short)
    const isTitle = line.length > 0 && line.length < 50 && !line.includes('(') && !line.startsWith('-') && !line.includes('€') && (!line.includes(':') || line.length < 25);
    
    if (isTitle && idx > 0) {
      if (currentTitle || currentContent.length > 0) {
        sections.push({ title: currentTitle, content: currentContent.join(' ') });
      }
      currentTitle = line;
      currentContent = [];
    } else if (idx === 0 && !isTitle) {
      intro = line;
    } else if (idx === 0 && isTitle) {
      currentTitle = line;
    } else {
      currentContent.push(line);
    }
  });
  
  if (currentTitle || currentContent.length > 0) {
    sections.push({ title: currentTitle, content: currentContent.join(' ') });
  }

  // If there's no explicit intro found but the first section is very general, we could use it
  if (!intro && sections.length > 0) {
    // optional: logic to move first section to intro if desirable
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main className="pt-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">{category}</span>
            <span>/</span>
            <span className="text-secondary">{title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
              {Icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl shrink-0">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
                {title}
              </h1>
            </div>

            {intro && (
              <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-4xl font-light leading-relaxed">
                {intro}
              </p>
            )}

            {intro && sections.length > 0 && (
              <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-4xl font-light leading-relaxed border-l-4 border-secondary/20 pl-6">
                {intro}
              </p>
            )}

            {/* Content Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(sections.length > 0 ? sections : (intro ? [{ title: "Descrizione Servizio", content: intro }] : [])).map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="h-full bg-white/50 backdrop-blur-sm border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                        {Icon ? <Icon className="w-5 h-5 text-secondary" /> : <div className="w-2 h-2 rounded-full bg-secondary" />}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 bg-secondary/5 px-3 py-1 rounded-full">
                        Premium Service
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                      {section.title || title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light flex-grow">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center md:text-left">
              <Button 
                onClick={scrollToForm} 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl shadow-secondary/20 transition-all hover:scale-105"
              >
                Richiedi Preventivo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="bg-slate-50 py-24 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">Portfolio & Gallery</h2>
                <div className="w-12 h-1 bg-secondary mt-4 rounded-full"></div>
                <p className="mt-6 text-slate-500 text-base max-w-xl">
                  Scopri alcuni dei nostri lavori più recenti per il servizio di {title}. 
                  Ogni evento è unico e personalizzato.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center cursor-pointer"
                  onClick={() => !p.placeholder && window.open(p.src, "_blank")}
                >
                  {p.placeholder ? (
                    <div className="flex flex-col items-center gap-4 text-slate-300 group-hover:text-secondary transition-colors duration-500">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-current flex items-center justify-center">
                        <span className="text-xs font-bold uppercase tracking-tighter">Photo</span>
                      </div>
                      <span className="text-sm font-display font-bold uppercase tracking-widest">{p.label}</span>
                    </div>
                  ) : (
                    <img 
                      src={p.src} 
                      alt={p.label} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32" id="preventivo">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Prenota il tuo evento</h2>
                <p className="text-lg text-slate-600 font-light">
                  Compila il form per richiedere informazioni dettagliate o un preventivo personalizzato. 
                  Ti risponderemo entro 24 ore.
                </p>
              </div>
              <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-50">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <WhatsAppWidget />
    </div>
  );
}
