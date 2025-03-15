
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThreatShieldAI from "./pages/ThreatShieldAI";
import FailurePredictorPro from "./pages/FailurePredictorPro";
import ServerGuardAI from "./pages/ServerGuardAI";
import NetworkHealthMonitor from "./pages/NetworkHealthMonitor";
import PowerFlowOptimizer from "./pages/PowerFlowOptimizer";
import CoolingSmart from "./pages/CoolingSmart";
import WorkloadBalancer from "./pages/WorkloadBalancer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/threatshield-ai" element={<ThreatShieldAI />} />
          <Route path="/products/failurepredictor-pro" element={<FailurePredictorPro />} />
          <Route path="/products/serverguard-ai" element={<ServerGuardAI />} />
          <Route path="/products/networkhealth-monitor" element={<NetworkHealthMonitor />} />
          <Route path="/products/powerflow-optimizer" element={<PowerFlowOptimizer />} />
          <Route path="/products/coolingsmart-ai" element={<CoolingSmart />} />
          <Route path="/products/workloadbalancer" element={<WorkloadBalancer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
