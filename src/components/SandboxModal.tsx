import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface SandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SandboxModal: React.FC<SandboxModalProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  // Handle opening and closing with animation
  useEffect(() => {
    console.log("SandboxModal isOpen state changed:", isOpen);
    
    if (isOpen) {
      // First make it visible
      setVisible(true);
    } else {
      // When closing, first animate out, then make invisible
      setTimeout(() => {
        setVisible(false);
        // Reset state when modal is closed
        setCurrentStep(0);
        setSelectedAgent(null);
        setConsoleOutput([]);
      }, 300); // Match this with the CSS transition duration
    }
  }, [isOpen]);

  // Agents available for testing
  const availableAgents = [
    { id: "threatshield", name: "ThreatShield AI", description: "Security monitoring and threat detection" },
    { id: "failurepredictor", name: "FailurePredictor Pro", description: "Hardware failure prediction" },
    { id: "powerflow", name: "PowerFlow Optimizer", description: "Energy consumption optimization" },
    { id: "coolingsmart", name: "CoolingSmart AI", description: "Cooling system management" }
  ];

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgent(agentId);
  };

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      handleLaunchSandbox();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLaunchSandbox = () => {
    setIsLoading(true);
    
    // Clear previous console output
    setConsoleOutput([]);
    
    // Simulate sandbox initialization with timed console outputs
    const agent = availableAgents.find(a => a.id === selectedAgent)?.name || "Unknown Agent";
    
    const simulateConsole = (messages: string[], delays: number[]) => {
      let index = 0;
      
      const addMessage = () => {
        if (index < messages.length) {
          setConsoleOutput(prev => [...prev, messages[index]]);
          setTimeout(addMessage, delays[index]);
          index++;
        } else {
          setIsLoading(false);
          toast({
            title: "Sandbox Test Complete",
            description: "Your test has completed successfully. View the results in the console.",
            duration: 5000,
          });
        }
      };
      
      addMessage();
    };
    
    // Simulate console output based on selected agent
    const messages = [
      `> Initializing testing environment...`,
      `> Environment ready`,
      `> Loading agent: ${agent} v2.4.1`,
      `> Agent loaded successfully`,
      `> Configuring test parameters...`,
      `> Test parameters set`,
      `> Starting simulation...`,
      `> Running diagnostics...`,
      `> Diagnostics complete`,
      `> Evaluating performance...`,
      `> Performance score: 92/100`,
      `> Generating detailed report...`,
      `> Report available for download`,
      `> Test completed successfully`
    ];
    
    const delays = [800, 1000, 1200, 900, 1100, 800, 1000, 1500, 1200, 1300, 1000, 1100, 900, 800];
    
    simulateConsole(messages, delays);
  };

  // If not visible at all, don't render anything
  if (!visible && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/80 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => !isLoading && onClose()}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative bg-background rounded-lg shadow-lg w-full max-w-2xl p-6 mx-4 transition-all duration-300",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-4"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          onClick={() => !isLoading && onClose()}
          disabled={isLoading}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            MCP Testing Sandbox
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Test AI agents in a secure environment before deploying to your data center.
          </p>
        </div>
        
        {/* Step indicator */}
        <div className="flex items-center mb-6">
          {[0, 1, 2].map((step) => (
            <React.Fragment key={step}>
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  currentStep >= step 
                    ? "bg-primary text-white" 
                    : "bg-secondary text-foreground/60"
                )}
              >
                {step + 1}
              </div>
              {step < 2 && (
                <div 
                  className={cn(
                    "h-1 flex-1 mx-2",
                    currentStep > step ? "bg-primary" : "bg-secondary"
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Step content */}
        <div className="mb-6">
          {currentStep === 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Select an Agent</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Choose an AI agent to test in the sandbox environment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availableAgents.map((agent) => (
                  <div 
                    key={agent.id}
                    className={cn(
                      "border rounded-lg p-4 cursor-pointer transition-all",
                      selectedAgent === agent.id 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    <h4 className="font-medium">{agent.name}</h4>
                    <p className="text-sm text-foreground/70">{agent.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Configure Test Parameters</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Set up the testing environment parameters.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Test Duration</span>
                  <span className="text-sm font-medium">5 minutes</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-1/2 bg-primary rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm">Load Intensity</span>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-2/3 bg-primary rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm">Scenario Complexity</span>
                  <span className="text-sm font-medium">Advanced</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-3/4 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Launch Sandbox</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Review your selections and launch the sandbox environment.
              </p>
              
              <div className="border border-border rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Test Configuration</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-foreground/70">Selected Agent:</div>
                  <div className="font-medium">
                    {availableAgents.find(a => a.id === selectedAgent)?.name || "None selected"}
                  </div>
                  <div className="text-foreground/70">Test Duration:</div>
                  <div className="font-medium">5 minutes</div>
                  <div className="text-foreground/70">Load Intensity:</div>
                  <div className="font-medium">Medium</div>
                  <div className="text-foreground/70">Scenario Complexity:</div>
                  <div className="font-medium">Advanced</div>
                </div>
              </div>
              
              {/* Console output */}
              <div className="h-[200px] rounded-lg overflow-hidden border border-border shadow-lg backdrop-blur-sm bg-black/80">
                <div className="h-8 bg-secondary flex items-center px-4 border-b border-border">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto text-xs text-foreground/60">MCP Sandbox Console</div>
                </div>
                <div className="p-4 h-[calc(100%-32px)] overflow-auto bg-black">
                  <div className="font-mono text-xs text-green-400">
                    {consoleOutput.map((line, index) => (
                      <p key={index} className="pb-1">{line}</p>
                    ))}
                    {isLoading && consoleOutput.length === 0 && (
                      <p className="pb-1">Initializing sandbox environment...</p>
                    )}
                    <p className="animate-pulse">&nbsp;_</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 0 || isLoading}
          >
            Back
          </Button>
          
          <Button
            onClick={handleNextStep}
            disabled={isLoading || (currentStep === 0 && !selectedAgent)}
          >
            {currentStep === 2 ? (isLoading ? 'Running...' : 'Launch Test') : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SandboxModal; 