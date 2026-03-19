import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Heart } from "lucide-react";

export default function ChiSiamoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const scrollToForm = () => {
    const el = document.querySelector("#preventivo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -mt-48 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">L'Eccellenza negli Eventi</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight">
              Chi Siamo
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              MadeinGigi non è solo un'agenzia di eventi, è il partner che trasforma le tue idee in realtà spettacolari. 
              Con sede nel cuore della Campania, operiamo in tutta Italia portando innovazione e stile in ogni progetto.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6 text-secondary">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Passione Creativa</h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Ogni evento è per noi una tela bianca su cui dipingere emozioni. Curiamo ogni dettaglio per rendere unica la vostra storia.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6 text-secondary">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tecnologia Avanzata</h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Disponiamo di un parco macchine ed effetti speciali tra i più moderni in Europa, garantendo performance di livello internazionale.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-8"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6 text-secondary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Affidabilità Certificata</h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Oltre 10 anni di esperienza sul campo ci permettono di gestire ogni imprevisto e garantire il successo del vostro evento.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Cosa ci rende unici?</h2>
                <div className="w-12 h-1 bg-secondary mb-8 rounded-full"></div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-slate-600 font-light"><span className="font-bold text-slate-900">Magazzino di Proprietà:</span> Non siamo semplici intermediari, possediamo tutte le attrezzature che noleggiamo.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-slate-600 font-light"><span className="font-bold text-slate-900">Team Multidisciplinare:</span> Artisti, tecnici, grafici e organizzatori lavorano in sinergia per il vostro obiettivo.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-slate-600 font-light"><span className="font-bold text-slate-900">Presenza su tutto il territorio:</span> Dalla cerimonia intima al grande concerto in piazza, sappiamo come muoverci.</p>
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full aspect-square bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 flex items-center justify-center p-12">
                 {/* This would ideally have a professional team photo or office photo */}
                 <div className="text-center text-slate-300">
                    <Star className="w-32 h-32 mx-auto mb-4 opacity-50" />
                    <span className="text-xs uppercase tracking-widest font-black">MadeinGigi Team</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32" id="preventivo">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Pronto a creare qualcosa di unico?</h2>
                <p className="text-lg text-slate-600 font-light mb-12">
                  Mettiamo a tua disposizione la nostra professionalità e le nostre attrezzature. 
                  Inizia ora a progettare il tuo evento ideale.
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
