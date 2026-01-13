import { MapPin } from "lucide-react";

const areas = [
  "Napoli", "Salerno", "Caserta", "Avellino", "Benevento", "Fuori Regione"
];

export function Areas() {
  return (
    <section id="zone" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Abstract bg shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Dove Operiamo
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              Siamo basati in Campania ma portiamo il divertimento ovunque tu abbia bisogno. 
              Copriamo tutte le province e siamo disponibili per trasferte in tutta Italia su richiesta.
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <div 
                  key={area} 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl overflow-hidden min-h-[300px] flex items-center justify-center">
               {/* Decorative stylized map representation */}
               <div className="text-center opacity-80">
                  <div className="relative w-64 h-64 mx-auto border-4 border-dashed border-white/30 rounded-full flex items-center justify-center animate-spin-slow" style={{ animationDuration: "20s" }}>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,165,0,0.8)]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold block mb-2">CAMPANIA</span>
                    <span className="text-sm uppercase tracking-widest">+ ITALIA</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
