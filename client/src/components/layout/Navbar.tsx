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
import logo from "@assets/image_1768325229427.png";

const NAV_SERVICES = [
  {
    title: "Matrimoni",
    icon: Sparkles,
    href: "/allestimenti",
    items: [
      { name: "Musica in chiesa", href: "/musica-in-chiesa" },
      { name: "Musica in sala", href: "/musica-in-sala" },
      { name: "Casinò tavoli da gioco", href: "/casino-tavoli-gioco" },
      { name: "Effetti speciali", href: "/effetti-speciali" },
      { name: "Illuminazione", href: "/illuminazione" },
      { name: "Spettacoli e intrattenimento", href: "/spettacoli" },
    ],
  },
  {
    title: "Effetti Speciali",
    icon: Zap,
    href: "/effetti-speciali",
    items: [
      { name: "Schiuma Party Cannone", href: "/schiuma-party" },
      { name: "Nevicata Artificiale Cannone Neve", href: "/nevicata-artificiale" },
      { name: "Spara coriandoli a CO2", href: "/spara-coriandoli" },
      { name: "Spara fiamme", href: "/spara-fiamme" },
      { name: "Geyser CO2 Blaster", href: "/geyser-co2" },
      { name: "Bazooka CO2 Cannone CO2", href: "/bazooka-co2" },
      { name: "Sparkular", href: "/sparkular" },
      { name: "Fumo basso", href: "/fumo-basso" },
      { name: "Fontane fredde / fuochi freddi", href: "/fontane-fredde" },
      { name: "Cascata palloni", href: "/cascata-palloni" },
      { name: "Laser show", href: "/laser-show" },
      { name: "Bolle di sapone", href: "/bolle-sapone" },
      { name: "Dance floor / pedana", href: "/dance-floor" },
    ],
  },
  {
    title: "Gonfiabili",
    icon: PartyPopper,
    href: "/laboratori",
    items: [
      { name: "Gonfiabili", href: "/gonfiabili" },
    ],
  },
  {
    title: "Service",
    icon: Music,
    href: "/spettacoli",
    items: [
      { name: "Attrezzature per DJ / Consolle", href: "/attrezzature-dj" },
      { name: "Impianti audio", href: "/impianti-audio" },
      { name: "Ledwall maxischermo", href: "/ledwall" },
      { name: "Video proiezioni", href: "/video-proiezioni" },
      { name: "Pedane palchi passerelle", href: "/pedane-palchi" },
      { name: "Illuminazione", href: "/illuminazione" },
      { name: "Dance floor / pedana", href: "/dance-floor" },
    ],
  },
  {
    title: "Comunicazione",
    icon: Megaphone,
    href: "/comunicazione",
    items: [
      { name: "Volantinaggio", href: "/volantinaggio" },
      { name: "Campagne pubblicitarie", href: "/campagne-pubblicitarie" },
      { name: "Servizio hostess", href: "/servizio-hostess" },
      { name: "Roller girls", href: "/roller-girls" },
    ],
  },
];

const QUICK_LINKS = [
  { name: "Gallery", href: "#gallery" },
  { name: "Zone", href: "#zone" },
  { name: "Contatti", href: "#contatti" },
];

export function Navbar() {
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-6"
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
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            MadeinGigi <span className="text-secondary">Events</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {NAV_SERVICES.map((category) => (
                <NavigationMenuItem key={category.title}>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-white/10 text-sm font-semibold uppercase tracking-wider transition-all duration-300 h-10 px-4",
                      isScrolled ? "text-slate-700 hover:text-secondary" : "text-white hover:text-white"
                    )}
                  >
                    {category.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[450px] p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 ring-1 ring-slate-900/5 transition-all duration-300 animate-in fade-in zoom-in-95">
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-50">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <category.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="font-display font-bold text-slate-900 uppercase tracking-widest text-xs">
                          {category.title}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {category.items.map((item) => (
                          <NavigationMenuLink asChild key={item.name}>
                            <Link
                              href={item.href}
                              className="group block p-2 rounded-lg hover:bg-secondary/5 transition-colors"
                            >
                              <span className="text-sm font-medium text-slate-600 group-hover:text-secondary transition-colors">
                                {item.name}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
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
                isScrolled ? "text-slate-500" : "text-white/80"
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
              <Button variant="ghost" size="icon" className={isScrolled ? "text-slate-900" : "text-white"}>
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="MadeinGigi" className="h-10 w-auto" />
                    <span className="font-display font-bold text-xl text-slate-900 tracking-tighter">
                      MadeinGigi
                    </span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {NAV_SERVICES.map((category) => (
                      <AccordionItem key={category.title} value={category.title} className="border-none">
                        <AccordionTrigger className="hover:no-underline py-4 px-4 rounded-xl hover:bg-slate-50 transition-all font-display font-bold text-lg text-slate-800 uppercase tracking-tight">
                          <div className="flex items-center gap-4">
                            <category.icon className="w-5 h-5 text-secondary" />
                            {category.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4 px-4 space-y-1">
                          {category.items.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-8 text-slate-600 hover:text-secondary font-medium transition-colors border-l-2 border-transparent hover:border-secondary"
                              >
                                {item.name}
                              </a>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
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

                <div className="p-6 bg-slate-50/50">
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
