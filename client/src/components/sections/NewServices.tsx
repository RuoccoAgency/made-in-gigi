import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Sparkles, PartyPopper, Flower2, Palette, Candy, Baby, Music, Star, Heart } from "lucide-react";
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
    theme: "amber",
    borderColor: "hover:border-amber-400",
    iconColor: "text-amber-600",
    bgIcon: "bg-amber-100",
    btnColor: "bg-amber-600 hover:bg-amber-700",
    img: "/images/allestimento battesimo/napoli/339243573_544577887713398_2491566810232230303_n.jpg",
  },
  {
    title: "Compleanni",
    href: "/compleanni",
    description: "Organizziamo feste di compleanno divertenti e personalizzate con allestimenti, animazione e attività pensate per rendere la giornata speciale.",
    bullets: ["Pacchetti flessibili", "Animazione su richiesta", "Foto corner / backdrop"],
    cta: "Scopri Compleanni",
    icon: PartyPopper,
    theme: "pink",
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
    theme: "sky",
    borderColor: "hover:border-sky-400",
    iconColor: "text-sky-600",
    bgIcon: "bg-sky-100",
    btnColor: "bg-sky-600 hover:bg-sky-700",
  },
  {
    title: "Laboratori",
    href: "/laboratori",
    description: "Esperienze creative e coinvolgenti per bambini, con attività originali pensate per divertire, stimolare la fantasia e rendere ogni evento ancora più speciale.",
    bullets: ["Laboratori creativi"],
    cta: "Scopri Laboratori",
    icon: Palette,
    theme: "indigo",
    borderColor: "hover:border-indigo-400",
    iconColor: "text-indigo-600",
    bgIcon: "bg-indigo-100",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
    variant: "creative",
  },
  {
    title: "Angolo per Dolci",
    href: "/angolo-dolci",
    description: "Un angolo scenografico e goloso per arricchire il tuo evento con dolcezza, colore e intrattenimento visivo.",
    bullets: ["Angolo per Dolci", "Zucchero filato", "Fontana di cioccolato"],
    cta: "Scopri Angolo per Dolci",
    icon: Candy,
    theme: "rose",
    borderColor: "hover:border-rose-400",
    iconColor: "text-rose-600",
    bgIcon: "bg-rose-100",
    btnColor: "bg-rose-600 hover:bg-rose-700",
    variant: "display",
  },
  {
    title: "Gender Reveal",
    href: "/gender-reveal",
    description: "Un momento emozionante e indimenticabile per scoprire il sesso del tuo bimbo. Creiamo allestimenti spettacolari e scenografie personalizzate per rendere il tuo Gender Reveal davvero magico.",
    bullets: ["Allestimenti scenografici Boy or Girl", "Archi di palloncini personalizzati", "Lettere luminose BOY / GIRL", "Percorsi scenografici per la rivelazione", "Effetti speciali e fuochi scenografici"],
    cta: "Scopri Gender Reveal",
    icon: Baby,
    theme: "fuchsia",
    borderColor: "hover:border-fuchsia-300",
    iconColor: "text-fuchsia-600",
    bgIcon: "bg-fuchsia-50",
    btnColor: "bg-fuchsia-600 hover:bg-fuchsia-700",
    variant: "magical",
  },
  {
    title: "Artisti e Spettacoli",
    href: "/spettacoli",
    description: "Collaboriamo con artisti e performer professionisti per rendere ogni evento ancora più spettacolare e coinvolgente.",
    bullets: ["Maghi", "Prestigiatori", "Ballerini", "Ali danzanti", "Spettacoli con bolle giganti", "Cabarettisti e artisti di strada"],
    cta: "Scopri gli Spettacoli",
    icon: Music,
    theme: "orange",
    borderColor: "hover:border-orange-400",
    iconColor: "text-orange-600",
    bgIcon: "bg-orange-100",
    btnColor: "bg-orange-600 hover:bg-orange-700",
    variant: "dynamic",
  },
  {
    title: "Feste di 18 Anni",
    href: "/feste-18-anni",
    description: "Organizziamo il tuo 18° compleanno dalla progettazione iniziale fino all’allestimento completo, includendo musica, speaker, intrattenimento e supporto nella scelta della location per creare una festa indimenticabile.",
    bullets: ["Allestimenti personalizzati", "Musica e speaker", "Supporto nella scelta della location", "Organizzazione completa dell’evento"],
    cta: "Scopri Feste di 18 Anni",
    icon: Star,
    theme: "violet",
    borderColor: "hover:border-violet-400",
    iconColor: "text-violet-600",
    bgIcon: "bg-violet-100",
    btnColor: "bg-violet-600 hover:bg-violet-700",
  },
  {
    title: "Battesimi",
    href: "/battesimi",
    description: "Allestimenti eleganti e delicati per celebrare il battesimo con scenografie curate, decorazioni personalizzate e dettagli che rendono l’evento speciale.",
    bullets: ["Allestimenti eleganti", "Decorazioni personalizzate", "Tavoli e scenografie coordinate", "Dettagli curati per l’evento"],
    cta: "Scopri Battesimi",
    icon: Heart,
    theme: "teal",
    borderColor: "hover:border-teal-400",
    iconColor: "text-teal-600",
    bgIcon: "bg-teal-100",
    btnColor: "bg-teal-600 hover:bg-teal-700",
    img: "/images/allestimento battesimo/150 EURO.jpg",
  },
] as const;

export function NewServices() {
  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-transparent to-white/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Cosa Facciamo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            I Nostri Servizi
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Esperienze uniche e curate in ogni dettaglio per trasformare ogni tuo evento in un momento indimenticabile.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {SERVICES.map((s, index) => {
            const isCreative = (s as any).variant === "creative";
            const isDisplay = (s as any).variant === "display";
            const isMagical = (s as any).variant === "magical";
            const isDynamic = (s as any).variant === "dynamic";

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <Link href={s.href}>
                  <Card
                    className={cn(
                      "h-full cursor-pointer bg-white/80 backdrop-blur border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden",
                      s.borderColor,
                      isCreative && "rounded-[2rem] border-dashed border-2",
                      isDisplay && "shadow-xl shadow-rose-900/5 bg-gradient-to-br from-white to-rose-50/30",
                      isMagical && "border-fuchsia-100/50 bg-gradient-to-b from-white to-fuchsia-50/20",
                      isDynamic && "border-orange-100/50 hover:bg-orange-50/5"
                    )}
                    data-testid={`card-service-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {isCreative && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-100/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                        <div className="absolute top-1/2 -left-12 w-24 h-24 bg-purple-100/30 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700 delay-100" />
                      </div>
                    )}

                    {isDisplay && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-200/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}

                    {isMagical && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-white to-pink-200 opacity-50" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl" />
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100/20 rounded-full blur-3xl" />
                      </div>
                    )}

                    {isDynamic && (
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Music className="w-24 h-24 text-orange-500 rotate-12" />
                      </div>
                    )}

                    {(s as any).img && (
                      <div className="w-full h-48 overflow-hidden mb-4 rounded-t-[1.5rem]">
                        <img src={(s as any).img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    )}

                    <CardContent className="p-8 relative z-10 text-pretty">
                      <div className={cn(
                        "flex items-start justify-between gap-4 mb-8",
                        isCreative && "flex-row-reverse",
                        isMagical && "mb-10"
                      )}>
                        <div className={cn(
                          "h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-md",
                          s.bgIcon,
                          isCreative && "rotate-6 rounded-[1.5rem] group-hover:rotate-0",
                          isDisplay && "scale-110 shadow-rose-200",
                          isMagical && "rounded-full bg-gradient-to-tr from-blue-50 to-pink-50 border border-white",
                          isDynamic && "rounded-xl"
                        )}>
                          <s.icon className={cn(
                            "h-7 w-7",
                            s.iconColor,
                            isDisplay && "animate-pulse-slow",
                            isMagical && "text-slate-700"
                          )} />
                        </div>
                        <div className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-300 shadow-sm",
                          isCreative ? "bg-indigo-50 text-indigo-500" :
                            isDisplay ? "bg-rose-50 text-rose-500" :
                              isMagical ? "bg-white text-fuchsia-400 border border-fuchsia-50 font-bold" :
                                isDynamic ? "bg-orange-600 text-white font-bold" :
                                  "bg-slate-100 text-slate-500 group-hover:bg-slate-200 font-bold"
                        )}>
                          {isDynamic ? "Show" : (isMagical ? "Celebration" : "Premium")}
                        </div>
                      </div>

                      <h3 className={cn(
                        "text-2xl font-display font-bold mb-4 transition-colors duration-300",
                        isCreative && "tracking-wide italic",
                        isDisplay && "text-3xl leading-none",
                        isMagical && "text-slate-900",
                        isDynamic && "text-orange-600 underline decoration-orange-200 underline-offset-8"
                      )}>
                        {s.title}
                      </h3>

                      <p className={cn(
                        "text-muted-foreground leading-relaxed mb-8",
                        isCreative && "text-sm font-medium pr-4",
                        isMagical && "italic"
                      )}>
                        {s.description}
                      </p>

                      <div className={cn(
                        "space-y-3 border-t border-slate-100 pt-8 mt-auto",
                        isCreative && "border-indigo-50",
                        isDisplay && "border-rose-50",
                        isMagical && "border-fuchsia-100/30",
                        isDynamic && "border-orange-100"
                      )}>
                        {s.bullets.map((b) => (
                          <div key={b} className="flex items-start gap-3 text-sm">
                            <Check className={cn("h-4 w-4 shrink-0 mt-0.5", s.iconColor)} />
                            <span className="text-foreground/80 font-medium tracking-tight">{b}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 relative z-10">
                      <Button
                        className={cn(
                          "w-full font-bold shadow-md hover:shadow-lg transition-all active:scale-95 duration-300 h-12 rounded-xl",
                          s.btnColor,
                          isCreative && "rounded-full italic",
                          isDisplay && "h-14 text-lg",
                          isDynamic && "rounded-none skew-x-[-12deg]"
                        )}
                        data-testid={`button-service-cta-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = s.href;
                        }}
                      >
                        <span className={cn(isDynamic && "skew-x-[12deg]")}>
                          {s.cta}
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
