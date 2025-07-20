import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Videoproduktion from "./pages/Videoproduktion";
import InehallPublicering from "./pages/InehallPublicering";
import Produktfotografering from "./pages/Produktfotografering";
import Webbdesign from "./pages/Webbdesign";
import SeoLokalSynlighet from "./pages/SeoLokalSynlighet";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/videoproduktion" element={<Videoproduktion />} />
          <Route path="/innehall-publicering" element={<InehallPublicering />} />
          <Route path="/produktfotografering" element={<Produktfotografering />} />
          <Route path="/webbdesign" element={<Webbdesign />} />
          <Route path="/seo-lokal-synlighet" element={<SeoLokalSynlighet />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
