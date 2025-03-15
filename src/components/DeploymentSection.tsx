import React from 'react';
import { useDeploymentContext } from '@/App';

const DeploymentSection = () => {
  const { openDeployment } = useDeploymentContext();

  const handleDeploymentClick = () => {
    console.log("Get Started with Deployment button clicked");
    openDeployment();
  };

  return (
    <section id="deployment" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Deployment UI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Seamless Integration Process
          </h2>
          <p className="text-lg text-foreground/80">
            Deploy certified AI agents to your data center with just a few clicks. Our intuitive deployment interface handles all the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Select",
              description: "Choose from our marketplace of certified AI agents tailored to your specific data center needs.",
              icon: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 5h12v7H6V9zm1 1v5h10v-5H7zm5 1a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1z"
            },
            {
              title: "Configure",
              description: "Customize agent parameters to meet your specific requirements with an intuitive configuration interface.",
              icon: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            },
            {
              title: "Deploy",
              description: "One-click deployment with automatic compatibility checks and real-time monitoring of the integration process.",
              icon: "M5 13l4 4L19 7"
            }
          ].map((step, index) => (
            <div key={index} className="glass-panel rounded-xl p-8 text-center transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d={step.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="h-14 px-10 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90 hover:shadow-lg"
            onClick={handleDeploymentClick}
          >
            Get Started with Deployment
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
