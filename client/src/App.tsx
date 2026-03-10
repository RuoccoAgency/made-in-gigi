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
import CandyWallPage from "@/pages/CandyWall";
import GenderRevealPage from "@/pages/GenderReveal";
import ArtistiSpettacoliPage from "@/pages/ArtistiSpettacoli";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/allestimenti" component={AllestimentiPage} />
      <Route path="/compleanni" component={CompleanniPage} />
      <Route path="/prima-comunione" component={PrimaComunionePage} />
      <Route path="/laboratori" component={LaboratoriPage} />
      <Route path="/candy-wall" component={CandyWallPage} />
      <Route path="/gender-reveal" component={GenderRevealPage} />
      <Route path="/spettacoli" component={ArtistiSpettacoliPage} />
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
