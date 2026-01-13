import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import logo from "@assets/image_1768325229427.png";

export function Contact() {
  return (
    <footer id="contatti" className="bg-slate-900 text-slate-300 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               <img src={logo} alt="MadeinGigi Events" className="h-10 w-auto brightness-0 invert opacity-90" />
               <span className="font-display font-bold text-xl text-white">MadeinGigi Events</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Studio di animazione specializzato in eventi e intrattenimento.
              Portiamo allegria e professionalità in ogni festa.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-2">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:3505081212" className="hover:text-white transition-colors">350 508 1212</a>
                  <a href="tel:0815209692" className="hover:text-white transition-colors">081 520 9692</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@madeingigievent.it" className="hover:text-white transition-colors">info@madeingigievent.it</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Via Cesare Battisti, 29<br/>80011 Acerra (NA)</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-2">Orari di Apertura</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Lunedì - Sabato</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span className="text-secondary font-medium">Chiuso</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg mb-2">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><a href="#servizi" className="hover:text-primary transition-colors">Servizi</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#zone" className="hover:text-primary transition-colors">Zone Servite</a></li>
              <li><a href="#preventivo" className="hover:text-primary transition-colors">Richiedi Preventivo</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MadeinGigi Events. P.IVA 12345678901 - Via Cesare Battisti, 29, 80011 Acerra NA</p>
        </div>
      </div>
    </footer>
  );
}
