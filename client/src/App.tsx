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
import ServiceDetailPage from "@/pages/ServiceDetailPage";

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
