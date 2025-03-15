
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useGetStartedContext } from "@/App";
import { ExternalLink } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

const GetStartedCTA = () => {
  const { openGetStarted } = useGetStartedContext();
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  
  const handleOpenAkira = () => {
    console.log('Opening Akira Generative Engineering dialog');
    setIsFrameOpen(true);
  };

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
        
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
          <Button 
            onClick={handleOpenAkira}
            className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90"
            variant="default"
          >
            <span className="flex items-center">
              Call Akira Generative Engineering 
              <ExternalLink className="ml-2 h-4 w-4" />
            </span>
          </Button>
          
          <Button 
            onClick={openGetStarted}
            className="w-full md:w-auto h-12 px-8 bg-primary/90 hover:bg-primary"
          >
            Get Started
          </Button>
        </div>
      </div>

      <Dialog open={isFrameOpen} onOpenChange={setIsFrameOpen}>
        <DialogContent className="max-w-4xl h-[80vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/bb2cfa8c-c134-4d11-a895-7bc15dde2b1e.png" 
                alt="Akira Logo" 
                className="h-6" 
              />
              Akira Generative Engineering
            </DialogTitle>
            <DialogDescription>
              Connect with our AI engineering team
            </DialogDescription>
          </DialogHeader>
          <div className="p-0 h-full">
            <iframe 
              src="http://localhost:999" 
              className="w-full h-[calc(80vh-100px)]"
              title="Akira Generative Engineering" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GetStartedCTA;
