import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RequestReceived from "./pages/RequestReceived";
import NotFound from "./pages/NotFound";
import PaintingDecoratingRichmond from "./pages/PaintingDecoratingRichmond";
import PlasteringEaling from "./pages/PlasteringEaling";
import InteriorDesignHounslow from "./pages/InteriorDesignHounslow";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/request-received" element={<RequestReceived />} />
          <Route path="/services/painting-decorating-richmond" element={<PaintingDecoratingRichmond />} />
          <Route path="/services/plastering-ealing" element={<PlasteringEaling />} />
          <Route path="/services/interior-design-hounslow" element={<InteriorDesignHounslow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
