import React from 'react';
import { useSandboxContext } from '@/App';

const TestingSandbox = () => {
  const { openSandbox } = useSandboxContext();

  const handleLaunchSandbox = () => {
    console.log("Launch Sandbox button clicked");
    openSandbox();
  };

  return (
    <section id="testing-sandbox" className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl opacity-70" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Testing Sandbox
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Test Before Deployment
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Our secure sandbox environment allows you to test AI agents against your data center configurations without any risk to your production environment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Simulate real-world scenarios and challenges",
                  "Evaluate performance against specific metrics",
                  "Compare multiple agents in parallel testing",
                  "Generate comprehensive compatibility reports"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-primary mt-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="h-12 px-6 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
                onClick={handleLaunchSandbox}
              >
                Launch Sandbox
              </button>
            </div>
            
            <div className="w-full md:w-1/2 h-[340px] rounded-xl overflow-hidden border border-border shadow-lg backdrop-blur-sm bg-white/5">
              <div className="h-8 bg-secondary flex items-center px-4 border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto text-xs text-foreground/60">MCP Sandbox Environment</div>
              </div>
              <div className="p-4 h-[calc(100%-32px)] overflow-hidden bg-gradient-to-b from-transparent to-black/5">
                <div className="font-mono text-xs text-foreground/70 h-full overflow-auto">
                  <p className="pb-1">{`> Initializing testing environment...`}</p>
                  <p className="pb-1 text-green-500">{`> Environment ready`}</p>
                  <p className="pb-1">{`> Loading agent: ThreatShield AI v2.4.1`}</p>
                  <p className="pb-1 text-green-500">{`> Agent loaded successfully`}</p>
                  <p className="pb-1">{`> Configuring test parameters...`}</p>
                  <p className="pb-1 text-green-500">{`> Test parameters set`}</p>
                  <p className="pb-1">{`> Starting security simulation...`}</p>
                  <p className="pb-1">{`> Simulating DDoS attack pattern...`}</p>
                  <p className="pb-1 text-green-500">{`> Attack detected in 1.42 seconds`}</p>
                  <p className="pb-1 text-green-500">{`> Mitigation strategy implemented`}</p>
                  <p className="pb-1">{`> Simulating unauthorized access attempt...`}</p>
                  <p className="pb-1 text-green-500">{`> Access blocked, alerts generated`}</p>
                  <p className="pb-1">{`> Testing response to zero-day vulnerabilities...`}</p>
                  <p className="pb-1 text-yellow-500">{`> Partial detection achieved`}</p>
                  <p className="pb-1">{`> Evaluating overall performance...`}</p>
                  <p className="pb-1 text-green-500">{`> Performance score: 94/100`}</p>
                  <p className="pb-1">{`> Generating detailed report...`}</p>
                  <p className="pb-1 text-green-500">{`> Report available for download`}</p>
                  <p className="pb-1">{`> Test completed successfully`}</p>
                  <p className="animate-pulse">&nbsp;_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingSandbox;
