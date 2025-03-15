
import React from 'react';
import { Button } from "@/components/ui/button";
import { useGetStartedContext } from "@/App";

const GetStartedCTA = () => {
  const { openGetStarted } = useGetStartedContext();

  return (
    <div className="bg-secondary/30 p-8 md:p-12 rounded-2xl border border-border mb-16">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:max-w-xl mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Custom Agent?</h2>
          <p className="text-lg text-foreground/80">
            Schedule a consultation with our AI specialists to discuss your requirements and get started
            with the Agent Builder platform.
          </p>
        </div>
        
        <Button 
          onClick={openGetStarted}
          className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default GetStartedCTA;
