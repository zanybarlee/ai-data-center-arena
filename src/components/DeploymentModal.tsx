import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [deploymentTarget, setDeploymentTarget] = useState<string | null>(null);
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [deploymentLogs, setDeploymentLogs] = useState<string[]>([]);

  // Handle opening and closing with animation
  useEffect(() => {
    console.log("DeploymentModal isOpen state changed:", isOpen);
    
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
        setDeploymentTarget(null);
        setDeploymentProgress(0);
        setDeploymentLogs([]);
      }, 300); // Match this with the CSS transition duration
    }
  }, [isOpen]);

  // Agents available for deployment
  const availableAgents = [
    { id: "threatshield", name: "ThreatShield AI", description: "Security monitoring and threat detection" },
    { id: "failurepredictor", name: "FailurePredictor Pro", description: "Hardware failure prediction" },
    { id: "powerflow", name: "PowerFlow Optimizer", description: "Energy consumption optimization" },
    { id: "coolingsmart", name: "CoolingSmart AI", description: "Cooling system management" }
  ];

  // Deployment targets
  const deploymentTargets = [
    { id: "onprem", name: "On-Premises", description: "Deploy to your local data center" },
    { id: "cloud", name: "Cloud", description: "Deploy to your cloud infrastructure" },
    { id: "hybrid", name: "Hybrid", description: "Deploy across on-premises and cloud" },
    { id: "edge", name: "Edge", description: "Deploy to edge computing devices" }
  ];

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgent(agentId);
  };

  const handleTargetSelect = (targetId: string) => {
    setDeploymentTarget(targetId);
  };

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      handleDeploy();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDeploy = () => {
    setIsLoading(true);
    setDeploymentProgress(0);
    setDeploymentLogs([]);
    
    // Simulate deployment process
    const agent = availableAgents.find(a => a.id === selectedAgent)?.name || "Unknown Agent";
    const target = deploymentTargets.find(t => t.id === deploymentTarget)?.name || "Unknown Target";
    
    // Add initial log
    addDeploymentLog(`Starting deployment of ${agent} to ${target}...`);
    
    // Simulate deployment progress
    const progressInterval = setInterval(() => {
      setDeploymentProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
            toast({
              title: "Deployment Complete",
              description: `${agent} has been successfully deployed to ${target}.`,
              duration: 5000,
            });
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 800);
    
    // Simulate deployment logs
    const deploymentSteps = [
      `Initializing deployment environment...`,
      `Validating ${agent} configuration...`,
      `Checking compatibility with ${target}...`,
      `Preparing deployment package...`,
      `Establishing secure connection to ${target}...`,
      `Transferring agent files...`,
      `Installing dependencies...`,
      `Configuring agent settings...`,
      `Setting up monitoring and alerts...`,
      `Running initial diagnostics...`,
      `Verifying deployment...`,
      `Deployment complete!`
    ];
    
    let stepIndex = 0;
    const logInterval = setInterval(() => {
      if (stepIndex < deploymentSteps.length) {
        addDeploymentLog(deploymentSteps[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 1500);
  };

  const addDeploymentLog = (message: string) => {
    setDeploymentLogs(prev => [...prev, message]);
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
            Deploy AI Agent
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Configure and deploy an AI agent to your data center infrastructure.
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
                Choose an AI agent to deploy to your infrastructure.
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
              <h3 className="text-lg font-medium">Select Deployment Target</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Choose where you want to deploy the selected agent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {deploymentTargets.map((target) => (
                  <div 
                    key={target.id}
                    className={cn(
                      "border rounded-lg p-4 cursor-pointer transition-all",
                      deploymentTarget === target.id 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    )}
                    onClick={() => handleTargetSelect(target.id)}
                  >
                    <h4 className="font-medium">{target.name}</h4>
                    <p className="text-sm text-foreground/70">{target.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Deployment Configuration</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Review your deployment configuration and start the deployment process.
              </p>
              
              <div className="border border-border rounded-lg p-4 mb-4">
                <h4 className="font-medium mb-2">Deployment Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-foreground/70">Selected Agent:</div>
                  <div className="font-medium">
                    {availableAgents.find(a => a.id === selectedAgent)?.name || "None selected"}
                  </div>
                  <div className="text-foreground/70">Deployment Target:</div>
                  <div className="font-medium">
                    {deploymentTargets.find(t => t.id === deploymentTarget)?.name || "None selected"}
                  </div>
                  <div className="text-foreground/70">Estimated Time:</div>
                  <div className="font-medium">5-10 minutes</div>
                  <div className="text-foreground/70">Auto-scaling:</div>
                  <div className="font-medium">Enabled</div>
                </div>
              </div>
              
              {/* Deployment progress */}
              {isLoading && (
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Deployment Progress</span>
                    <span className="text-sm font-medium">{Math.round(deploymentProgress)}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${deploymentProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {/* Deployment logs */}
              <div className="h-[200px] rounded-lg overflow-hidden border border-border shadow-lg backdrop-blur-sm bg-black/80">
                <div className="h-8 bg-secondary flex items-center px-4 border-b border-border">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto text-xs text-foreground/60">Deployment Logs</div>
                </div>
                <div className="p-4 h-[calc(100%-32px)] overflow-auto bg-black">
                  <div className="font-mono text-xs text-green-400">
                    {deploymentLogs.map((log, index) => (
                      <p key={index} className="pb-1">{log}</p>
                    ))}
                    {isLoading && deploymentLogs.length === 0 && (
                      <p className="pb-1">Preparing deployment...</p>
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
            disabled={
              isLoading || 
              (currentStep === 0 && !selectedAgent) || 
              (currentStep === 1 && !deploymentTarget)
            }
          >
            {currentStep === 2 ? (isLoading ? 'Deploying...' : 'Deploy') : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentModal; 