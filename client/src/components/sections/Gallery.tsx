import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Stock images import
import img1 from "@assets/stock_images/colorful_bouncy_cast_53c1708a.jpg";
import img2 from "@assets/stock_images/childrens_party_ente_7e93c1ae.jpg";
import img3 from "@assets/stock_images/elegant_balloon_arch_a2b51acc.jpg";
import img4 from "@assets/stock_images/colorful_stage_light_534230f0.jpg";
import img5 from "@assets/stock_images/colorful_bouncy_cast_9eb4d68f.jpg";
import img6 from "@assets/stock_images/childrens_party_ente_e64b0463.jpg";
import img7 from "@assets/stock_images/elegant_balloon_arch_f4b6f3ac.jpg";
import img8 from "@assets/stock_images/colorful_stage_light_0b96c6de.jpg";

const galleryItems = [
  { id: 1, src: img1, category: "Gonfiabili", title: "Castello Colorato" },
  { id: 2, src: img2, category: "Spettacoli", title: "Magic Show" },
  { id: 3, src: img3, category: "Allestimenti", title: "Arco Palloncini" },
  { id: 4, src: img4, category: "Spettacoli", title: "Luci Stage" },
  { id: 5, src: img5, category: "Gonfiabili", title: "Scivolo Gigante" },
  { id: 6, src: img6, category: "Spettacoli", title: "Intrattenimento" },
  { id: 7, src: img7, category: "Allestimenti", title: "Decorazioni Eleganti" },
  { id: 8, src: img8, category: "Allestimenti", title: "Atmosfera Party" },
];

const categories = ["Tutto", "Gonfiabili", "Spettacoli", "Allestimenti"];

export function Gallery() {
  const [filter, setFilter] = useState("Tutto");

  const filteredItems = filter === "Tutto" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-6">Gallery</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Dai un'occhiata ai nostri eventi più recenti.
          </p>

          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  filter === cat
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative group aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
