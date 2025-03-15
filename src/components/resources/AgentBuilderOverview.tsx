
import React from 'react';
import { BrainCircuit, Component, Code, Bot } from "lucide-react";

const AgentBuilderOverview = () => {
  return (
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
  );
};

export default AgentBuilderOverview;
