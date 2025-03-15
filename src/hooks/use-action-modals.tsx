
import { useState, useCallback } from "react";
import GetStartedModal from "@/components/modals/GetStartedModal";
import DeployNowModal from "@/components/modals/DeployNowModal";
import ScheduleDemoModal from "@/components/modals/ScheduleDemoModal";

export function useActionModals() {
  const [modals, setModals] = useState({
    getStarted: false,
    deployNow: false,
    scheduleDemo: false,
    productName: undefined as string | undefined
  });

  const openGetStarted = useCallback(() => {
    console.log("Opening Get Started modal from hook");
    setModals((prev) => ({ ...prev, getStarted: true }));
  }, []);

  const closeGetStarted = useCallback(() => {
    console.log("Closing Get Started modal from hook");
    setModals((prev) => ({ ...prev, getStarted: false }));
  }, []);

  const openDeployNow = useCallback((name?: string) => {
    setModals((prev) => ({ ...prev, deployNow: true, productName: name }));
  }, []);

  const closeDeployNow = useCallback(() => {
    setModals((prev) => ({ ...prev, deployNow: false }));
  }, []);

  const openScheduleDemo = useCallback((name?: string) => {
    setModals((prev) => ({ ...prev, scheduleDemo: true, productName: name }));
  }, []);

  const closeScheduleDemo = useCallback(() => {
    setModals((prev) => ({ ...prev, scheduleDemo: false }));
  }, []);

  // The React component that renders all modals
  const ActionModals = useCallback(() => {
    console.log("ActionModals render, getStarted:", modals.getStarted);
    
    return (
      <>
        <GetStartedModal 
          isOpen={modals.getStarted} 
          onClose={closeGetStarted} 
        />
        <DeployNowModal 
          open={modals.deployNow} 
          onOpenChange={(open) => {
            if (!open) closeDeployNow();
          }}
          productName={modals.productName}
        />
        <ScheduleDemoModal 
          open={modals.scheduleDemo} 
          onOpenChange={(open) => {
            if (!open) closeScheduleDemo();
          }}
          productName={modals.productName}
        />
      </>
    );
  }, [modals, closeGetStarted, closeDeployNow, closeScheduleDemo]);

  return {
    openGetStarted,
    openDeployNow,
    openScheduleDemo,
    ActionModals,
    // For debugging and state inspection
    isGetStartedOpen: modals.getStarted,
    isDeployNowOpen: modals.deployNow,
    isScheduleDemoOpen: modals.scheduleDemo
  };
}
