
import { useState, useCallback } from 'react';

export function useGetStarted() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  
  const openGetStarted = useCallback(() => {
    setIsGetStartedOpen(true);
  }, []);
  
  const closeGetStarted = useCallback(() => {
    setIsGetStartedOpen(false);
  }, []);
  
  return {
    isGetStartedOpen,
    openGetStarted,
    closeGetStarted
  };
}
