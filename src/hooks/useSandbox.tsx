import { useState, useCallback } from 'react';

export function useSandbox() {
  const [isSandboxOpen, setIsSandboxOpen] = useState(false);
  
  const openSandbox = useCallback(() => {
    console.log("openSandbox called, setting isSandboxOpen to true");
    setIsSandboxOpen(true);
  }, []);
  
  const closeSandbox = useCallback(() => {
    console.log("closeSandbox called, setting isSandboxOpen to false");
    setIsSandboxOpen(false);
  }, []);
  
  return {
    isSandboxOpen,
    openSandbox,
    closeSandbox
  };
} 