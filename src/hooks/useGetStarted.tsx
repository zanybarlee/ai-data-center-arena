import { useState, useCallback } from 'react';

export function useGetStarted() {
  // Use localStorage to persist the state across page refreshes
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  
  const openGetStarted = useCallback(() => {
    console.log("openGetStarted called, setting isGetStartedOpen to true");
    setIsGetStartedOpen(true);
  }, []);
  
  const closeGetStarted = useCallback(() => {
    console.log("closeGetStarted called, setting isGetStartedOpen to false");
    setIsGetStartedOpen(false);
  }, []);
  
  return {
    isGetStartedOpen,
    openGetStarted,
    closeGetStarted
  };
}
