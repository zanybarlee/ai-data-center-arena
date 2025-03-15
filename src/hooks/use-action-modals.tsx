
import { useState } from "react";
import GetStartedModal from "@/components/modals/GetStartedModal";
import DeployNowModal from "@/components/modals/DeployNowModal";
import ScheduleDemoModal from "@/components/modals/ScheduleDemoModal";

export function useActionModals() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isDeployNowOpen, setIsDeployNowOpen] = useState(false);
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
  const [productName, setProductName] = useState<string | undefined>(undefined);

  const openGetStarted = () => {
    console.log("Opening Get Started modal");
    setIsGetStartedOpen(true);
    console.log("Modal state after setting:", isGetStartedOpen); // This will still show false due to state update timing
  };

  const openDeployNow = (name?: string) => {
    setProductName(name);
    setIsDeployNowOpen(true);
  };

  const openScheduleDemo = (name?: string) => {
    setProductName(name);
    setIsScheduleDemoOpen(true);
  };

  // Render all the modals
  const ActionModals = () => {
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
  };

  return {
    openGetStarted,
    openDeployNow,
    openScheduleDemo,
    ActionModals,
  };
}
