
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

// Mock data for agent cards
const predictiveMaintenanceAgents = [
  {
    id: "pm-001",
    name: "FailurePredictor Pro",
    description: "AI-powered predictive maintenance for cooling systems. Reduces downtime by 87% through early detection of potential failures.",
    category: "Predictive Maintenance",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    tags: ["Cooling", "HVAC", "Monitoring", "Real-time"],
    price: "$199/mo"
  },
  {
    id: "pm-002",
    name: "ServerGuard AI",
    description: "Continuous hardware monitoring with ML-based diagnostics to predict component failures before they impact operations.",
    category: "Predictive Maintenance",
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1539187577537-e54cf54ec75f?q=80&w=2187&auto=format&fit=crop",
    tags: ["Hardware", "Diagnostics", "24/7 Monitoring"],
    price: "$249/mo"
  },
  {
    id: "pm-003",
    name: "NetworkHealth Monitor",
    description: "Network infrastructure monitoring with anomaly detection to prevent outages and ensure optimal performance.",
    category: "Predictive Maintenance",
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    tags: ["Network", "Anomaly Detection", "Uptime"],
    price: "Free"
  }
];

const energyOptimizationAgents = [
  {
    id: "eo-001",
    name: "PowerFlow Optimizer",
    description: "Dynamically adjusts power distribution based on workload patterns, reducing energy consumption by up to 32%.",
    category: "Energy Optimization",
    rating: 4.9,
    reviews: 113,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    tags: ["Power Management", "ML", "Cost Saving"],
    price: "$299/mo"
  },
  {
    id: "eo-002",
    name: "CoolingSmart AI",
    description: "Intelligent cooling system management that uses weather forecasts and workload predictions to optimize energy use.",
    category: "Energy Optimization",
    rating: 4.6,
    reviews: 75,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    tags: ["HVAC", "Energy Efficiency", "Smart Cooling"],
    price: "$179/mo"
  },
  {
    id: "eo-003",
    name: "WorkloadBalancer",
    description: "Distributes computing tasks for optimal energy efficiency without compromising performance. Ideal for variable workloads.",
    category: "Energy Optimization",
    rating: 4.8,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?q=80&w=2069&auto=format&fit=crop",
    tags: ["Load Balancing", "Efficiency", "Resource Management"],
    price: "Free"
  }
];

const securityAgents = [
  {
    id: "sec-001",
    name: "ThreatShield AI",
    description: "Real-time threat detection and response using advanced behavioral analysis to identify potential security breaches.",
    category: "Security",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2068&auto=format&fit=crop",
    tags: ["Threat Detection", "Real-time", "Zero-day"],
    price: "$349/mo"
  },
  {
    id: "sec-002",
    name: "AccessGuardian",
    description: "AI-powered access control system with anomaly detection for identifying suspicious login patterns and potential breaches.",
    category: "Security",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    tags: ["Access Control", "Identity", "Authentication"],
    price: "$199/mo"
  },
  {
    id: "sec-003",
    name: "SecureConfig AI",
    description: "Continuously audits system configurations against security best practices, identifying and fixing vulnerabilities automatically.",
    category: "Security",
    rating: 4.8,
    reviews: 103,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    tags: ["Configuration", "Compliance", "Auto-remediation"],
    price: "Free"
  }
];

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        
        <div id="agent-store" className="bg-gradient-to-b from-background to-secondary py-10">
          <CategorySection 
            title="Predictive Maintenance Agents"
            subtitle="AI-powered solutions that predict potential failures before they happen, ensuring uninterrupted data center operations."
            agents={predictiveMaintenanceAgents}
            className="py-24"
          />
          
          <CategorySection 
            title="Energy Optimization Agents"
            subtitle="Smart agents that dynamically adjust power and cooling resources to minimize energy consumption while maintaining performance."
            agents={energyOptimizationAgents}
            className="py-24 bg-background"
          />
          
          <CategorySection 
            title="Security & Compliance Agents"
            subtitle="Advanced security protocols and regulatory compliance monitoring to protect your data center from threats and ensure legal compliance."
            agents={securityAgents}
            className="py-24"
          />
        </div>
        
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
                  <button className="h-12 px-6 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg">
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
              <button className="h-14 px-10 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90 hover:shadow-lg">
                Get Started with Deployment
              </button>
            </div>
          </div>
        </section>
        
        <section id="documentation" className="py-24 px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Documentation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Comprehensive Resources
              </h2>
              <p className="text-lg text-foreground/80">
                Everything you need to understand, deploy, and optimize AI agents for your data center environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Quick Start Guide",
                  description: "Get up and running with your first AI agent in under 15 minutes."
                },
                {
                  title: "API Documentation",
                  description: "Complete API reference for developers integrating with MCP."
                },
                {
                  title: "Use Cases",
                  description: "Real-world examples of AI agents transforming data centers."
                },
                {
                  title: "Troubleshooting",
                  description: "Common issues and their solutions for smooth operation."
                }
              ].map((resource, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-subtle hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{resource.description}</p>
                  <a href="#" className="text-primary text-sm font-medium flex items-center">
                    Read More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Transform Your Data Center?
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join the leading AI data center revolution with MCP certified agents. Experience increased efficiency, reduced costs, and enhanced security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-white font-medium text-lg transition-all hover:bg-primary/90 hover:shadow-lg">
                Get Started
              </button>
              <button className="w-full sm:w-auto h-14 px-8 rounded-full bg-white dark:bg-black border border-input text-foreground font-medium text-lg transition-all hover:bg-secondary hover:shadow-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
