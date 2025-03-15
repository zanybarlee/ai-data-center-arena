
import React from 'react';
import { useGetStartedContext } from '@/App';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const { openGetStarted } = useGetStartedContext();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Ready to Transform Your Data Center?
        </h2>
        <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Join the leading AI data center revolution with MCP certified agents. Experience increased efficiency, reduced costs, and enhanced security.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90 hover:shadow-lg"
            onClick={openGetStarted}
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-white dark:bg-black border border-input text-foreground font-medium text-lg transition-all hover:bg-secondary hover:shadow-lg"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
