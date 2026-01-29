import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    title: "Allestimenti",
    href: "/allestimenti",
    description:
      "Decorazioni, balloon art, scenografie e dettagli su misura per rendere l’evento unico.",
    bullets: ["Tema personalizzato", "Backdrop e decorazioni", "Montaggio e assistenza"],
    cta: "Scopri Allestimenti",
  },
  {
    title: "Compleanni",
    href: "/compleanni",
    description:
      "Dai bimbi agli adulti: allestimenti e soluzioni complete per una festa memorabile.",
    bullets: ["Pacchetti flessibili", "Animazione su richiesta", "Foto corner / backdrop"],
    cta: "Scopri Compleanni",
  },
  {
    title: "Prima Comunione",
    href: "/prima-comunione",
    description:
      "Eleganza e dolcezza per un giorno importante: allestimenti, tavoli e dettagli coordinati.",
    bullets: ["Stile elegante e coordinato", "Centrotavola e confettata", "Personalizzazioni"],
    cta: "Scopri Prima Comunione",
  },
] as const;

export function NewServices() {
  return (
    <section id="servizi" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            I Nostri Servizi
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tre soluzioni pensate per ogni momento speciale. Scopra i dettagli e
            richieda un preventivo.
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
                  className="h-full cursor-pointer bg-white/70 backdrop-blur border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                  data-testid={`card-service-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-display font-bold">{s.title}</h3>
                      <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                      </div>
                    </div>

                    <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>

                    <ul className="mt-6 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-4 w-4 text-primary" />
                          </span>
                          <span className="text-foreground/90">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-7 pt-0">
                    <Button
                      className="w-full bg-primary text-primary-foreground"
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
