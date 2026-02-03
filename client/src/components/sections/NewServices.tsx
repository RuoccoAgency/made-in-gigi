import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Sparkles, PartyPopper, Flower2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Allestimenti",
    href: "/allestimenti",
    description: "Decorazioni, balloon art, scenografie e dettagli su misura per rendere l’evento unico.",
    bullets: ["Tema personalizzato", "Backdrop e decorazioni", "Montaggio e assistenza"],
    cta: "Scopri Allestimenti",
    icon: Sparkles,
    theme: "amber", // Gold/Elegant
    borderColor: "hover:border-amber-400",
    iconColor: "text-amber-600",
    bgIcon: "bg-amber-100",
    btnColor: "bg-amber-600 hover:bg-amber-700",
  },
  {
    title: "Compleanni",
    href: "/compleanni",
    description: "Dai bimbi agli adulti: allestimenti e soluzioni complete per una festa memorabile.",
    bullets: ["Pacchetti flessibili", "Animazione su richiesta", "Foto corner / backdrop"],
    cta: "Scopri Compleanni",
    icon: PartyPopper,
    theme: "pink", // Fun/Vibrant
    borderColor: "hover:border-pink-400",
    iconColor: "text-pink-600",
    bgIcon: "bg-pink-100",
    btnColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    title: "Prima Comunione",
    href: "/prima-comunione",
    description: "Eleganza e dolcezza per un giorno importante: allestimenti, tavoli e dettagli coordinati.",
    bullets: ["Stile elegante e coordinato", "Centrotavola e confettata", "Personalizzazioni"],
    cta: "Scopri Prima Comunione",
    icon: Flower2,
    theme: "sky", // Soft/Pure
    borderColor: "hover:border-sky-400",
    iconColor: "text-sky-600",
    bgIcon: "bg-sky-100",
    btnColor: "bg-sky-600 hover:bg-sky-700",
  },
] as const;

export function NewServices() {
  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-transparent to-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Cosa Facciamo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            I Nostri Servizi
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tre mondi diversi, un’unica passione: rendere speciale il tuo evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
              className="h-full"
            >
              <Link href={s.href}>
                <Card
                  className={cn(
                    "h-full cursor-pointer bg-white/80 backdrop-blur border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group",
                    s.borderColor
                  )}
                  data-testid={`card-service-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center transition-colors duration-300", s.bgIcon)}>
                        <s.icon className={cn("h-7 w-7", s.iconColor)} />
                      </div>
                      <div className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors")}>
                         Servizio
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {s.description}
                    </p>

                    <div className="space-y-3 border-t border-slate-100 pt-6">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-3 text-sm">
                          <Check className={cn("h-5 w-5 shrink-0", s.iconColor)} />
                          <span className="text-foreground/80 font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-8 pt-0">
                    <Button
                      className={cn("w-full font-bold shadow-md transition-all", s.btnColor)}
                      data-testid={`button-service-cta-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = s.href;
                      }}
                    >
                      {s.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
