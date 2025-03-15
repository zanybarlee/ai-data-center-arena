
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetStartedContext } from "@/App";
import { Bot, BrainCircuit, Component, Code } from "lucide-react";

const DesignBuildAgents = () => {
  const { openGetStarted } = useGetStartedContext();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Design & Build Agents | MCP AI Agents Marketplace</title>
        <meta name="description" content="Create custom AI agents tailored to your specific data center needs" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Design & Build Agents</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Create custom AI agents tailored to your unique data center requirements and operational challenges.
            </p>
          </div>
          
          {/* Agent Builder Overview */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2>Agent Builder Platform</h2>
            <p>
              Our Agent Builder platform empowers you to design, develop, and deploy custom AI agents
              without extensive AI expertise. Using our intuitive visual interface and pre-built components,
              you can create agents that solve your specific data center challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
              <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">No-Code Builder</h3>
                </div>
                <p className="text-foreground/80">
                  Drag-and-drop interface for creating agent logic, workflows, and decision trees without writing code.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Component className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Pre-built Components</h3>
                </div>
                <p className="text-foreground/80">
                  Access our library of certified components for monitoring, automation, security, and optimization.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Developer API</h3>
                </div>
                <p className="text-foreground/80">
                  Extend your agents with custom code through our comprehensive developer API and SDK.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Agent Marketplace</h3>
                </div>
                <p className="text-foreground/80">
                  Publish your agents to our marketplace or keep them private for your organization's use only.
                </p>
              </div>
            </div>
          </div>
          
          {/* Agent Development Process */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2>Development Process</h2>
            <p>
              Our structured development process guides you from concept to deployment, ensuring your custom agents
              meet the highest standards for performance, security, and reliability.
            </p>
            
            <div className="my-12 not-prose">
              <div className="relative">
                <div className="absolute h-full w-0.5 bg-primary/30 left-6 md:left-9 ml-[0.3rem] top-0"></div>
                
                {[
                  {
                    step: 1,
                    title: "Define Requirements",
                    description: "Clearly articulate the problems your agent needs to solve and the specific metrics for success."
                  },
                  {
                    step: 2,
                    title: "Design Architecture",
                    description: "Design your agent's logic flow, decision points, and integration requirements using our visual editor."
                  },
                  {
                    step: 3,
                    title: "Build & Configure",
                    description: "Assemble your agent using pre-built components and custom code, configuring it for your environment."
                  },
                  {
                    step: 4,
                    title: "Test & Validate",
                    description: "Test your agent in our sandbox environment with simulated scenarios and real data."
                  },
                  {
                    step: 5,
                    title: "Deploy & Monitor",
                    description: "Deploy your certified agent to production and monitor its performance through our dashboard."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative z-10 mb-8 flex items-start gap-5 md:gap-8">
                    <div className="flex-shrink-0 h-7 w-7 md:h-10 md:w-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Get Started */}
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
          
          {/* FAQ Section */}
          <div className="prose prose-lg max-w-none">
            <h2>Frequently Asked Questions</h2>
            
            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold">Do I need programming experience to build an agent?</h3>
                <p>
                  No, our no-code builder allows anyone to create agents using our visual interface. However,
                  for more complex agents, some programming knowledge can be beneficial for customization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">How long does it take to build a custom agent?</h3>
                <p>
                  Simple agents can be built in a few hours, while more complex ones might take several days.
                  Our templates accelerate the process by providing pre-configured starting points.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Can I integrate my custom agent with existing systems?</h3>
                <p>
                  Yes, our agents support integration with most common data center management systems, monitoring
                  tools, and cloud platforms through our extensive API connectors.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">How are custom agents certified?</h3>
                <p>
                  All agents undergo rigorous testing for security, performance, and reliability in our certification
                  lab before they can be deployed to production environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignBuildAgents;
