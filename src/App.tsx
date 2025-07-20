import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Videoproduktion from "./pages/Videoproduktion";
import SocialaMedier from "./pages/SocialaMedier";
import Produktfoto from "./pages/Produktfoto";
import Webbdesign from "./pages/Webbdesign";
import SEO from "./pages/SEO";
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
          <Route path="/sociala-medier" element={<SocialaMedier />} />
          <Route path="/produktfoto" element={<Produktfoto />} />
          <Route path="/webbdesign" element={<Webbdesign />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
