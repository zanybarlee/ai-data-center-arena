import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext } from "react";
import { useGetStarted } from "./hooks/useGetStarted";
import { useSandbox } from "./hooks/useSandbox";
import { useDeployment } from "./hooks/useDeployment";
import { useScheduleDemo } from "./hooks/useScheduleDemo";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThreatShieldAI from "./pages/ThreatShieldAI";
import FailurePredictorPro from "./pages/FailurePredictorPro";
import ServerGuardAI from "./pages/ServerGuardAI";
import NetworkHealthMonitor from "./pages/NetworkHealthMonitor";
import PowerFlowOptimizer from "./pages/PowerFlowOptimizer";
import CoolingSmart from "./pages/CoolingSmart";
import WorkloadBalancer from "./pages/WorkloadBalancer";
import GetStartedForm from "./components/GetStartedForm";
import SandboxModal from "./components/SandboxModal";
import DeploymentModal from "./components/DeploymentModal";
import ScheduleDemoModal from "./components/ScheduleDemoModal";

const queryClient = new QueryClient();

// Create context for GetStarted functionality
type GetStartedContextType = ReturnType<typeof useGetStarted>;
export const GetStartedContext = createContext<GetStartedContextType | undefined>(undefined);

export const useGetStartedContext = () => {
  const context = useContext(GetStartedContext);
  if (context === undefined) {
    throw new Error("useGetStartedContext must be used within a GetStartedProvider");
  }
  return context;
};

// Create context for Sandbox functionality
type SandboxContextType = ReturnType<typeof useSandbox>;
export const SandboxContext = createContext<SandboxContextType | undefined>(undefined);

export const useSandboxContext = () => {
  const context = useContext(SandboxContext);
  if (context === undefined) {
    throw new Error("useSandboxContext must be used within a SandboxProvider");
  }
  return context;
};

// Create context for Deployment functionality
type DeploymentContextType = ReturnType<typeof useDeployment>;
export const DeploymentContext = createContext<DeploymentContextType | undefined>(undefined);

export const useDeploymentContext = () => {
  const context = useContext(DeploymentContext);
  if (context === undefined) {
    throw new Error("useDeploymentContext must be used within a DeploymentProvider");
  }
  return context;
};

// Create context for Schedule Demo functionality
type ScheduleDemoContextType = ReturnType<typeof useScheduleDemo>;
export const ScheduleDemoContext = createContext<ScheduleDemoContextType | undefined>(undefined);

export const useScheduleDemoContext = () => {
  const context = useContext(ScheduleDemoContext);
  if (context === undefined) {
    throw new Error("useScheduleDemoContext must be used within a ScheduleDemoProvider");
  }
  return context;
};

const App = () => {
  const getStartedState = useGetStarted();
  const sandboxState = useSandbox();
  const deploymentState = useDeployment();
  const scheduleDemoState = useScheduleDemo();
  
  // Add debugging log
  console.log("App rendering with states:", { 
    getStarted: { isOpen: getStartedState.isGetStartedOpen },
    sandbox: { isOpen: sandboxState.isSandboxOpen },
    deployment: { isOpen: deploymentState.isDeploymentOpen },
    scheduleDemo: { isOpen: scheduleDemoState.isScheduleDemoOpen }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GetStartedContext.Provider value={getStartedState}>
          <SandboxContext.Provider value={sandboxState}>
            <DeploymentContext.Provider value={deploymentState}>
              <ScheduleDemoContext.Provider value={scheduleDemoState}>
                <Toaster />
                <Sonner />
                <GetStartedForm 
                  isOpen={getStartedState.isGetStartedOpen} 
                  onClose={getStartedState.closeGetStarted} 
                />
                <SandboxModal
                  isOpen={sandboxState.isSandboxOpen}
                  onClose={sandboxState.closeSandbox}
                />
                <DeploymentModal
                  isOpen={deploymentState.isDeploymentOpen}
                  onClose={deploymentState.closeDeployment}
                />
                <ScheduleDemoModal
                  isOpen={scheduleDemoState.isScheduleDemoOpen}
                  onClose={scheduleDemoState.closeScheduleDemo}
                />
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
              </ScheduleDemoContext.Provider>
            </DeploymentContext.Provider>
          </SandboxContext.Provider>
        </GetStartedContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
