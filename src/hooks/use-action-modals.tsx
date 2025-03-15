
import { useState, useCallback, useEffect } from "react";
import GetStartedModal from "@/components/modals/GetStartedModal";
import DeployNowModal from "@/components/modals/DeployNowModal";
import ScheduleDemoModal from "@/components/modals/ScheduleDemoModal";

export function useActionModals() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isDeployNowOpen, setIsDeployNowOpen] = useState(false);
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
  const [productName, setProductName] = useState<string | undefined>(undefined);

  // Using useCallback to ensure consistent function references
  const openGetStarted = useCallback(() => {
    console.log("Opening Get Started modal");
    setIsGetStartedOpen(true);
  }, []);

  const openDeployNow = useCallback((name?: string) => {
    setProductName(name);
    setIsDeployNowOpen(true);
  }, []);

  const openScheduleDemo = useCallback((name?: string) => {
    setProductName(name);
    setIsScheduleDemoOpen(true);
  }, []);

  // For debugging: log state changes
  useEffect(() => {
    console.log("Get Started modal state updated:", isGetStartedOpen);
  }, [isGetStartedOpen]);

  // Render all the modals
  const ActionModals = useCallback(() => {
    console.log("ActionModals rendered, isGetStartedOpen:", isGetStartedOpen);
    return (
      <>
        <GetStartedModal 
          open={isGetStartedOpen} 
          onOpenChange={setIsGetStartedOpen} 
        />
        <DeployNowModal 
          open={isDeployNowOpen} 
          onOpenChange={setIsDeployNowOpen}
          productName={productName}
        />
        <ScheduleDemoModal 
          open={isScheduleDemoOpen} 
          onOpenChange={setIsScheduleDemoOpen}
          productName={productName}
        />
      </>
    );
  }, [isGetStartedOpen, isDeployNowOpen, isScheduleDemoOpen, productName]);

  return {
    openGetStarted,
    openDeployNow,
    openScheduleDemo,
    ActionModals,
    // Export state values for debugging
    isGetStartedOpen,
    isDeployNowOpen,
    isScheduleDemoOpen
  };
}
