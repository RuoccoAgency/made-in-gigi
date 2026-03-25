import { useEffect, useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { QuoteForm } from "../sections/QuoteForm";
import { Contact } from "../sections/Contact";
import { WhatsAppWidget } from "../ui/WhatsAppWidget";
import { ImageLightbox } from "../ui/ImageLightbox";
import { Button } from "../ui/button";
import { LucideIcon, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceLayoutProps {
  title: string;
  description: string;
  category: string;
  icon?: LucideIcon;
  images?: string[];
  initialImageCount?: number;
  gridClassName?: string;
  aspectRatioClassName?: string;
  filters?: string[];
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export function ServiceLayout({ 
  title, 
  description, 
  category, 
  icon: Icon, 
  images,
  initialImageCount = 4,
  gridClassName,
  aspectRatioClassName = "aspect-square",
  filters,
  activeFilter,
  onFilterChange
}: ServiceLayoutProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const galleryItems = useMemo(() => images && images.length > 0 
    ? images.map((src, idx) => ({ id: `img-${idx}`, src, label: `${title} ${idx + 1}`, placeholder: false }))
    : Array.from({ length: 4 }).map((_, idx) => ({
        id: `placeholder-${idx}`,
        src: "",
        label: `Progetto ${idx + 1}`,
        placeholder: true
      })), [images, title]);

  const displayedItems = showAllPhotos ? galleryItems : galleryItems.slice(0, initialImageCount);

  // Lightbox Handlers
  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const handleNext = () => setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  const handlePrev = () => setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  const cleanCategories = ["Matrimoni", "Effetti Speciali", "Format", "Gonfiabili", "Service", "Comunicazione"];
  const isCleanLayout = cleanCategories.some(c => category?.toLowerCase().includes(c.toLowerCase()));

  // Parse description
  const lines = description.split('\n').map(l => l.trim()).filter(Boolean);
  const sections: { title: string; content: string[] }[] = [];
  let currentSection: { title: string; content: string[] } | null = null;
  
  lines.forEach((line, idx) => {
    const isTitle = line.length > 0 && line.length < 55 && !line.includes('(') && !line.startsWith('-') && !line.includes('€') && (!line.includes(':') || line.length < 25) && !line.includes('.') && !line.includes(',');
    
    if (isTitle && idx > 0) {
      if (currentSection) sections.push(currentSection);
      currentSection = { title: line.replace(':', ''), content: [] };
    } else {
      if (!currentSection) {
        currentSection = { title: "Dettagli", content: [] };
      }
      currentSection.content.push(line);
    }
  });
  if (currentSection) sections.push(currentSection);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main className="pt-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-10">
          <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">{category}</span>
            <span>/</span>
            <span className="text-secondary">{title}</span>
          </nav>
        </div>

        {/* Presentation Section */}
        <section className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("mx-auto", isCleanLayout ? "max-w-3xl text-left" : "max-w-5xl text-center")}
          >
            {isCleanLayout ? (
              <div className="space-y-10">
                <header className="mb-12">
                  <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">
                    {title}
                  </h1>
                  <div className="w-16 h-1 bg-secondary/30 rounded-full" />
                </header>

                <div className="space-y-8 text-slate-600 leading-relaxed text-base italic md:text-lg">
                  {lines.map((line, idx) => {
                    const isHeading = line.length < 50 && !line.endsWith('.') && !line.includes(':') && idx > 0;
                    if (isHeading) return <h3 key={idx} className="text-xl font-bold text-slate-900 pt-10 border-t border-slate-50 not-italic uppercase tracking-wide">{line}</h3>;
                    return (
                      <p key={idx} className={cn(idx === 0 && "text-lg md:text-xl text-slate-800 font-medium not-italic border-l-2 border-secondary/30 pl-8 mb-12")}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            ) : (
              // Visual Layout with Cards
              <>
                <div className="flex flex-col items-center mb-16">
                  {Icon && (
                    <div className="p-5 bg-secondary/5 rounded-3xl mb-8">
                      <Icon className="w-10 h-10 text-secondary" />
                    </div>
                  )}
                  <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-4">
                    {title}
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sections.map((section, idx) => (
                    <div key={idx} className="bg-[#fafafa] border border-slate-100 p-10 shadow-sm hover:shadow-xl transition-all text-left group">
                      <h3 className="font-display font-bold text-xl mb-6 text-slate-900 border-b border-secondary/20 pb-4 flex items-center gap-3">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        {section.title}
                      </h3>
                      <div className="space-y-4">
                        {section.content.map((p, i) => (
                          <p key={i} className="text-slate-600 text-sm leading-relaxed font-medium">{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className={cn("mt-20", isCleanLayout ? "text-left" : "text-center")}>
              <Button 
                onClick={scrollToForm} 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-16 text-lg font-bold shadow-xl shadow-secondary/10 transition-all hover:scale-105"
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

              {filters && filters.length > 0 && onFilterChange && (
                <div className="flex bg-white/80 backdrop-blur p-2 rounded-2xl border border-slate-200/50 shadow-sm w-fit shrink-0">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => onFilterChange(f)}
                      className={cn(
                        "px-8 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300",
                        activeFilter === f 
                          ? "bg-secondary text-white shadow-lg shadow-secondary/10" 
                          : "text-slate-400 hover:text-secondary hover:bg-slate-50"
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={cn("grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6", gridClassName)}>
              {displayedItems.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={cn(
                    "group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center cursor-pointer",
                    aspectRatioClassName
                  )}
                  onClick={() => !p.placeholder && openLightbox(idx)}
                >
                  {p.placeholder ? (
                    <div className="flex flex-col items-center gap-2 text-slate-300 group-hover:text-secondary transition-colors duration-500">
                      <div className="w-10 h-10 rounded-full border-2 border-dashed border-current flex items-center justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Photo</span>
                      </div>
                      <span className="text-[10px] font-display font-medium uppercase tracking-widest">{p.label}</span>
                    </div>
                  ) : (
                    <img 
                      src={p.src} 
                      alt={p.label} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>

            {galleryItems.length > initialImageCount && !showAllPhotos && (
              <div className="mt-16 text-center">
                <Button 
                  onClick={() => setShowAllPhotos(true)} 
                  variant="outline"
                  size="lg" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-10 h-14 text-sm font-bold shadow-lg shadow-secondary/5 transition-all hover:scale-105"
                >
                  Vedi tutte le foto ({galleryItems.length})
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Implementation */}
        <ImageLightbox
          isOpen={lightboxOpen}
          images={galleryItems.filter(p => !p.placeholder).map(p => p.src)}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />

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
