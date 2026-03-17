import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AllestimentiPage from "@/pages/Allestimenti";
import CompleanniPage from "@/pages/Compleanni";
import PrimaComunionePage from "@/pages/PrimaComunione";
import LaboratoriPage from "@/pages/Laboratori";
import AngoloDolciPage from "@/pages/AngoloDolci";
import GenderRevealPage from "@/pages/GenderReveal";
import ArtistiSpettacoliPage from "@/pages/ArtistiSpettacoli";
import Feste18AnniPage from "@/pages/Feste18Anni";
import BattesimiPage from "@/pages/Battesimi";
import GonfiabiliPage from "@/pages/Gonfiabili";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import PhotoboothPage from "@/pages/servizi/photobooth";
import SilentDiscoPage from "@/pages/servizi/silent-disco";
import VillaggioSportPage from "@/pages/servizi/villaggio-sport";
import LunaParkPage from "@/pages/servizi/luna-park";
import SalaGiochiArcadePage from "@/pages/servizi/sala-giochi-arcade";
import CalcioBiliardoPage from "@/pages/servizi/calcio-biliardo";
import CalcioBalillaPage from "@/pages/servizi/calcio-balilla";
import GiochiQuartierePage from "@/pages/servizi/giochi-quartiere";
import GliImpiantatiPage from "@/pages/servizi/gli-impiantati";
import ScacchieraGigantePage from "@/pages/servizi/scacchiera-gigante";
import PortaRigoriPage from "@/pages/servizi/porta-rigori";
import VillaggioBabboNatalePage from "@/pages/servizi/villaggio-babbo-natale";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/allestimenti" component={AllestimentiPage} />
      <Route path="/compleanni" component={CompleanniPage} />
      <Route path="/prima-comunione" component={PrimaComunionePage} />
      <Route path="/laboratori" component={LaboratoriPage} />
      <Route path="/angolo-dolci" component={AngoloDolciPage} />
      <Route path="/gender-reveal" component={GenderRevealPage} />
      <Route path="/spettacoli" component={ArtistiSpettacoliPage} />
      <Route path="/feste-18-anni" component={Feste18AnniPage} />
      <Route path="/battesimi" component={BattesimiPage} />
      <Route path="/servizi/gonfiabili" component={GonfiabiliPage} />
      <Route path="/servizi/photobooth" component={PhotoboothPage} />
      <Route path="/servizi/silent-disco" component={SilentDiscoPage} />
      <Route path="/servizi/villaggio-sport" component={VillaggioSportPage} />
      <Route path="/servizi/luna-park" component={LunaParkPage} />
      <Route path="/servizi/sala-giochi-arcade" component={SalaGiochiArcadePage} />
      <Route path="/servizi/calcio-biliardo" component={CalcioBiliardoPage} />
      <Route path="/servizi/calcio-balilla" component={CalcioBalillaPage} />
      <Route path="/servizi/giochi-quartiere" component={GiochiQuartierePage} />
      <Route path="/servizi/gli-impiantati" component={GliImpiantatiPage} />
      <Route path="/servizi/scacchiera-gigante" component={ScacchieraGigantePage} />
      <Route path="/servizi/porta-rigori" component={PortaRigoriPage} />
      <Route path="/servizi/villaggio-babbo-natale" component={VillaggioBabboNatalePage} />
      <Route path="/servizi/:slug" component={ServiceDetailPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
