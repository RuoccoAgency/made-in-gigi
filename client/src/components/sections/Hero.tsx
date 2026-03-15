import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-slate-900" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
      </div>

      {/* Floating Particles (CSS only for perf) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary/30 rounded-full blur-[2px] animate-bounce duration-[3000ms]" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-[1px] animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
            Rendiamo il tuo evento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Indimenticabile
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Animazione professionale, spettacoli e allestimenti da sogno per feste, cerimonie ed eventi aziendali.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
              onClick={() => scrollToSection("#preventivo")}
            >
              Richiedi Preventivo
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90 text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1"
              onClick={() => scrollToSection("#servizi")}
            >
              Scopri i Servizi
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
