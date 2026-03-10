import { useLocation, Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
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

const servicePages = [
  { name: "Allestimenti", href: "/allestimenti" },
  { name: "Compleanni", href: "/compleanni" },
  { name: "Prima Comunione", href: "/prima-comunione" },
  { name: "Laboratori", href: "/laboratori" },
  { name: "Candy Wall", href: "/candy-wall" },
  { name: "Gender Reveal", href: "/gender-reveal" },
  { name: "Spettacoli", href: "/spettacoli" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer"
          onClick={goHome}
          data-testid="button-home-logo"
        >
          <img src={logo} alt="MadeinGigi Events" className="h-10 w-auto object-contain" />
          <span
            className={cn(
              "font-display font-bold text-xl hidden sm:block",
              isScrolled ? "text-foreground" : "text-white"
            )}
            data-testid="text-brand"
          >
            MadeinGigi Events
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
                "font-medium text-sm hover:text-secondary transition-colors",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </button>
          ))}

          <div className="hidden lg:flex items-center gap-4">
            {servicePages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={cn(
                  "text-sm font-medium hover:text-secondary transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                )}
                data-testid={`link-service-${p.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {p.name}
              </Link>
            ))}
          </div>

          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold shadow-md"
            onClick={() => {
              if (location !== "/") {
                window.location.href = "/#preventivo";
                return;
              }
              scrollToSection("#preventivo");
            }}
            data-testid="button-nav-quote"
          >
            Richiedi Preventivo
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"} data-testid="button-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="MadeinGigi Events" className="h-12 w-auto" />
                  <span className="font-display font-bold text-xl text-foreground" data-testid="text-brand-mobile">MadeinGigi Events</span>
                </div>

                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        if (location !== "/") {
                          window.location.href = `/${link.href}`;
                          return;
                        }
                        scrollToSection(link.href);
                      }}
                      className="text-lg font-medium text-left hover:text-secondary transition-colors"
                      data-testid={`link-mobile-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </button>
                  ))}

                  <div className="mt-2 border-t border-border pt-4">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Servizi</div>
                    <div className="flex flex-col gap-2">
                      {servicePages.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="text-base font-medium hover:text-secondary transition-colors"
                          data-testid={`link-mobile-service-${p.name.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
                    onClick={() => {
                      if (location !== "/") {
                        window.location.href = "/#preventivo";
                        return;
                      }
                      scrollToSection("#preventivo");
                    }}
                    data-testid="button-mobile-quote"
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
