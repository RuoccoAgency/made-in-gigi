import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Import images

const services = [
  {
    id: "gonfiabili",
    title: "Gonfiabili",
    description: "Castelli gonfiabili, percorsi ad ostacoli e scivoli giganti per il massimo divertimento.",
    image: "",
    highlights: ["Assistenza inclusa", "Certificazione di sicurezza", "Varie misure disponibili", "Indoor & Outdoor"],
    details: "I nostri gonfiabili sono l'attrazione perfetta per ogni festa. Disponiamo di una vasta gamma di strutture: dai classici castelli salterini ai percorsi avventura, fino agli scivoli giganti. Tutti i nostri giochi sono certificati, puliti e sanificati prima di ogni utilizzo. Un nostro operatore sarà sempre presente per garantire la sicurezza dei bambini durante il gioco.",
  },
  {
    id: "spettacoli",
    title: "Spettacoli",
    description: "Show di magia, bolle giganti, cabaret e intrattenimento coinvolgente per tutte le età.",
    image: "",
    highlights: ["Per bambini e adulti", "Impianto audio incluso", "Artisti professionisti", "Temi personalizzabili"],
    details: "Trasforma il tuo evento in uno show indimenticabile! Offriamo spettacoli di magia comica, show di bolle di sapone giganti, giocoleria, cabaret e intrattenimento musicale. Il nostro staff è composto da artisti professionisti capaci di adattare lo spettacolo al tipo di pubblico, che si tratti di un compleanno, una cerimonia o un evento aziendale.",
  },
  {
    id: "allestimenti",
    title: "Allestimenti",
    description: "Scenografie mozzafiato, balloon art e decorazioni a tema per rendere unico il tuo evento.",
    image: "",
    highlights: ["Temi su richiesta", "Balloon Art design", "Backdrop fotografici", "Sweet table"],
    details: "Creiamo l'atmosfera perfetta per il tuo giorno speciale. Dai classici archi di palloncini alle scenografie complesse con fondali personalizzati, luci e dettagli curati. Progettiamo allestimenti per compleanni a tema, battesimi eleganti, comunioni e matrimoni, curando ogni aspetto visivo per garantire un effetto 'wow' appena si entra in sala.",
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const openModal = (service: typeof services[0]) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);
  
  const scrollToQuote = () => {
    closeModal();
    const element = document.querySelector("#preventivo");
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 300);
    }
  };

  return (
    <section id="servizi" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Cosa Facciamo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            I Nostri Servizi Premium
          </h2>
          <p className="text-muted-foreground text-lg">
            Offriamo soluzioni complete per rendere ogni evento unico. Dalla pianificazione all'esecuzione, pensiamo a tutto noi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <div className="w-full h-full bg-slate-200" />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium">
                        <span className="bg-primary/10 text-primary p-1 rounded-full">
                          <Check className="w-3 h-3" />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button 
                    className="w-full bg-white text-primary border-2 border-primary/20 hover:bg-primary hover:text-white transition-all font-bold"
                    onClick={() => openModal(service)}
                  >
                    Scopri di più
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {selectedService && (
            <>
              <div className="relative h-64 w-full">
                <div className="w-full h-full bg-slate-200" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </Button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-display font-bold">{selectedService.title}</h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="prose prose-blue max-w-none mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedService.details}
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl mb-8">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-secondary rounded-full block"></span>
                    Caratteristiche Principali
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <DialogFooter className="flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="lg" onClick={closeModal} className="w-full sm:w-auto">
                    Chiudi
                  </Button>
                  <Button size="lg" onClick={scrollToQuote} className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-bold shadow-lg" data-testid="button-quote-service">
                    Richiedi un preventivo
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
