import { useState } from 'react';

export const useScheduleDemo = () => {
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);

  const openScheduleDemo = () => {
    console.log("Opening Schedule Demo modal");
    setIsScheduleDemoOpen(true);
  };

  const closeScheduleDemo = () => {
    console.log("Closing Schedule Demo modal");
    setIsScheduleDemoOpen(false);
  };

  return {
    isScheduleDemoOpen,
    openScheduleDemo,
    closeScheduleDemo,
  };
}; 