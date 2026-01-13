import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Setup Veloce",
    description: "Installazione rapida e puntuale per non farti perdere nemmeno un minuto di festa.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Sicurezza 100%",
    description: "Attrezzature certificate e staff qualificato per garantire divertimento senza rischi.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Animazione Pro",
    description: "Animatori esperti che sanno come coinvolgere e divertire ospiti di tutte le età.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Globe,
    title: "Ampia Copertura",
    description: "Operiamo in tutta la Campania e fuori regione per portare la festa ovunque tu sia.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Perché Scegliere Noi?
          </h2>
          <p className="text-muted-foreground text-lg">
            Non siamo solo animatori, siamo creatori di ricordi. Ecco cosa ci distingue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="border-none shadow-none hover:shadow-xl transition-shadow duration-300 h-full bg-slate-50/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl mb-6 ${feature.bg} ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
