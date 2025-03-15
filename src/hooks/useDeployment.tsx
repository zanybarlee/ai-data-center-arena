import { useState, useCallback } from 'react';

export function useDeployment() {
  const [isDeploymentOpen, setIsDeploymentOpen] = useState(false);
  
  const openDeployment = useCallback(() => {
    console.log("openDeployment called, setting isDeploymentOpen to true");
    setIsDeploymentOpen(true);
  }, []);
  
  const closeDeployment = useCallback(() => {
    console.log("closeDeployment called, setting isDeploymentOpen to false");
    setIsDeploymentOpen(false);
  }, []);
  
  return {
    isDeploymentOpen,
    openDeployment,
    closeDeployment
  };
} 