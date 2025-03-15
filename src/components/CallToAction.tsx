
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Calendar } from 'lucide-react';
import { useActionModals } from '@/hooks/use-action-modals';

const CallToAction = () => {
  const { openGetStarted, openScheduleDemo, isGetStartedOpen } = useActionModals();

  const handleGetStarted = () => {
    console.log("CallToAction: Get Started button clicked");
    console.log("Current modal state before click:", isGetStartedOpen);
    openGetStarted();
  };

  const handleScheduleDemo = () => {
    console.log("CallToAction: Schedule Demo button clicked");
    openScheduleDemo();
  };

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
            className="w-full sm:w-auto rounded-full"
            onClick={handleGetStarted}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto rounded-full"
            onClick={handleScheduleDemo}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
