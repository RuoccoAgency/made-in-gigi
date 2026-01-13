import { useLocation, Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@assets/image_1768325229427.png";

const navLinks = [
  { name: "Servizi", href: "#servizi" },
  { name: "Gallery", href: "#gallery" },
  { name: "Zone", href: "#zone" },
  { name: "Contatti", href: "#contatti" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="MadeinGigi_event Srls" className="h-10 w-auto object-contain" />
          <span className={cn("font-display font-bold text-xl hidden sm:block", isScrolled ? "text-primary" : "text-white")}>
            MadeinGigi_event Srls
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "font-medium text-sm hover:text-secondary transition-colors",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            onClick={() => scrollToSection("#preventivo")}
          >
            Richiedi Preventivo
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="MadeinGigi_event Srls" className="h-12 w-auto" />
                  <span className="font-display font-bold text-xl text-primary">MadeinGigi_event Srls</span>
                </div>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-lg font-medium text-left hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                  <Button 
                    className="bg-secondary hover:bg-secondary/90 text-white w-full mt-4"
                    onClick={() => scrollToSection("#preventivo")}
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
