import { useLocation, Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, Sparkles, PartyPopper, Zap, Music, Megaphone, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
const logo = "/images/logo.webp";
import { SERVICES_DATA } from "@/services-data";

const CATEGORY_ORDER = [
  "Matrimoni",
  "Effetti Speciali",
  "Format",
  "Gonfiabili",
  "Service",
  "Comunicazione",
];

const CATEGORY_ICONS: Record<string, any> = {
  "Matrimoni": Sparkles,
  "Effetti Speciali": Zap,
  "Format": LayoutGrid,
  "Gonfiabili": PartyPopper,
  "Service": Music,
  "Comunicazione": Megaphone,
};

// Generate NAV_SERVICES dynamically from SERVICES_DATA
const allCategoriesInData = Array.from(new Set(
  Object.values(SERVICES_DATA).flatMap(s => Array.isArray(s.category) ? s.category : [s.category])
));

const finalCategoryOrder = [
  ...CATEGORY_ORDER.filter(c => allCategoriesInData.includes(c)),
  ...allCategoriesInData.filter(c => !CATEGORY_ORDER.includes(c))
];

const NAV_SERVICES = finalCategoryOrder.map(catName => ({
  category: catName,
  icon: CATEGORY_ICONS[catName] || LayoutGrid,
  items: Object.entries(SERVICES_DATA)
    .filter(([_, data]) => 
      Array.isArray(data.category) 
        ? data.category.includes(catName) 
        : data.category === catName
    )
    .map(([slug, data]) => ({
      name: data.title,
      href: slug === "laboratori" ? "/laboratori" : `/servizi/${slug}`
    }))
}));


const QUICK_LINKS = [
  { name: "Gallery", href: "#gallery" },
  { name: "Zone", href: "#zone" },
  { name: "Contatti", href: "#contatti" },
];

export function Navbar() {
  const [activeCategory, setActiveCategory] = useState(NAV_SERVICES.length > 0 ? NAV_SERVICES[0].category : "");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const goHome = () => {
    if (location !== "/") {
      window.location.href = "/";
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSolid = isScrolled || location !== "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showSolid ? "bg-white/95 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer group"
          onClick={goHome}
        >
          <div className="relative">
            <img src={logo} alt="MadeinGigi Events" className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span
            className={cn(
              "font-display font-bold text-2xl hidden lg:block tracking-tight",
              showSolid ? "text-slate-900" : "text-white"
            )}
          >
            MadeinGigi <span className="text-secondary">Events</span>
          </span>
        </button>
 
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-white/10 text-sm font-semibold uppercase tracking-wider transition-all duration-300 h-10 px-4 group",
                    showSolid ? "text-slate-700 hover:text-secondary" : "text-white hover:text-white"
                  )}
                >
                  Servizi
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[650px] h-[500px] flex overflow-hidden bg-white/98 backdrop-blur-md rounded-[2rem] shadow-2xl border border-slate-100 ring-1 ring-slate-900/5 transition-all duration-500 animate-in fade-in zoom-in-95">
                    {/* Left Panel: Categories */}
                    <div className="w-[240px] bg-slate-50/50 border-r border-slate-100/50 p-4 flex flex-col gap-1 overflow-y-auto">
                      <div className="px-4 py-2 mb-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Categorie</span>
                      </div>
                      {NAV_SERVICES.map((cat) => (
                        <button
                          key={cat.category}
                          onMouseEnter={() => setActiveCategory(cat.category)}
                          className={cn(
                            "group/item w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 text-left shrink-0",
                            activeCategory === cat.category 
                              ? "bg-white text-secondary shadow-md shadow-slate-200/50 ring-1 ring-slate-900/5 font-bold translate-x-1" 
                              : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <cat.icon className={cn("w-4 h-4 transition-colors", activeCategory === cat.category ? "text-secondary" : "text-slate-400 group-hover/item:text-secondary")} />
                            <span className="text-[11px] uppercase tracking-wider">{cat.category}</span>
                          </div>
                          {activeCategory === cat.category && (
                            <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Right Panel: Subcategories */}
                    <div className="flex-1 p-8 bg-white/50 overflow-y-auto">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeCategory}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center gap-3 pb-4 border-b border-slate-50">
                             <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                                {NAV_SERVICES.find(c => c.category === activeCategory)?.icon && (() => {
                                  const Icon = NAV_SERVICES.find(c => c.category === activeCategory)!.icon;
                                  return <Icon className="w-4 h-4 text-secondary" />;
                                })()}
                             </div>
                             <h3 className="font-display font-bold text-slate-900 uppercase tracking-widest text-xs">
                               {activeCategory}
                             </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 gap-x-6 gap-y-1">
                            {NAV_SERVICES.find(c => c.category === activeCategory)?.items.map((item) => (
                              <NavigationMenuLink asChild key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group block p-2 rounded-lg hover:bg-secondary/5 transition-all hover:translate-x-1"
                                >
                                  <span className="text-sm font-medium text-slate-500 group-hover:text-secondary transition-colors">
                                    {item.name}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-4 w-[1px] bg-slate-200 mx-4 hidden xl:block" />

          {QUICK_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (location !== "/") {
                  window.location.href = `/${link.href}`;
                  return;
                }
                scrollToSection(link.href);
              }}
              className={cn(
                "font-bold text-xs uppercase tracking-[0.2em] px-4 py-2 hover:text-secondary transition-all",
                showSolid ? "text-slate-500" : "text-white/80"
              )}
            >
              {link.name}
            </button>
          ))}

          <Button
            className="ml-6 bg-secondary hover:bg-secondary/90 text-white rounded-full font-black px-8 h-12 shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-xs"
            onClick={() => {
              if (location !== "/") {
                window.location.href = "/#preventivo";
                return;
              }
              scrollToSection("#preventivo");
            }}
          >
            Richiedi Preventivo
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <Button
            className="bg-secondary text-white rounded-full font-bold px-4 h-10 shadow-md text-xs"
            onClick={() => {
              if (location !== "/") {
                window.location.href = "/#preventivo";
                return;
              }
              scrollToSection("#preventivo");
            }}
          >
            Preventivo
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={showSolid ? "text-slate-900" : "text-white"}>
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 p-0 overflow-y-auto">
              <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between sticky top-0 bg-white z-10">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="MadeinGigi" className="h-10 w-auto" />
                    <span className="font-display font-bold text-xl text-slate-900 tracking-tighter">
                      MadeinGigi
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    <AccordionItem value="servizi" className="border-none">
                      <AccordionTrigger className="hover:no-underline py-4 px-4 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-lg text-slate-800 uppercase tracking-tight">
                        <div className="flex items-center gap-4">
                          <LayoutGrid className="w-5 h-5 text-secondary" />
                          Servizi
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4 px-2">
                        <Accordion type="single" collapsible className="w-full space-y-1">
                          {NAV_SERVICES.map((category) => (
                            <AccordionItem key={category.category} value={category.category} className="border-none">
                              <AccordionTrigger className="hover:no-underline py-3 px-4 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-base text-slate-700 uppercase tracking-wide">
                                <div className="flex items-center gap-3">
                                  <category.icon className="w-4 h-4 text-secondary/70" />
                                  {category.category}
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pt-1 pb-2 px-4">
                                <div className="grid grid-cols-1 gap-1 border-l-2 border-secondary/10 ml-2 pl-4">
                                  {category.items.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                      <a
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 text-sm text-slate-500 hover:text-secondary font-medium transition-colors"
                                      >
                                        {item.name}
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
                    {QUICK_LINKS.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => {
                          if (location !== "/") {
                            window.location.href = `/${link.href}`;
                            return;
                          }
                          scrollToSection(link.href);
                          setIsOpen(false);
                        }}
                        className="text-left py-2 px-4 text-xl font-display font-black text-slate-900 uppercase tracking-tighter hover:text-secondary transition-colors"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-50/50 mt-auto">
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-16 rounded-2xl font-black text-lg shadow-xl shadow-secondary/10"
                    onClick={() => {
                      if (location !== "/") {
                        window.location.href = "/#preventivo";
                        return;
                      }
                      scrollToSection("#preventivo");
                      setIsOpen(false);
                    }}
                  >
                    Richiedi Preventivo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
