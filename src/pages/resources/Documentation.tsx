
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Documentation | MCP AI Agents Marketplace</title>
        <meta name="description" content="Comprehensive documentation for the MCP AI Agents Marketplace" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Everything you need to understand, deploy, and optimize AI agents for your data center environment.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Getting Started</h2>
            <p>
              The MCP AI Agents Marketplace provides a comprehensive ecosystem for deploying and managing AI agents specifically designed for data center optimization. This documentation will guide you through the process of selecting, testing, and deploying the right AI solution for your needs.
            </p>
            
            <h2>Key Concepts</h2>
            <p>
              Before diving into specific implementation details, it's important to understand the core concepts behind the MCP platform:
            </p>
            
            <ul>
              <li><strong>Agent Certification</strong> - All AI agents in our marketplace undergo rigorous testing and certification.</li>
              <li><strong>Sandbox Environment</strong> - Test AI agents in a safe, isolated environment before deployment.</li>
              <li><strong>Deployment Profiles</strong> - Standardized configuration settings for common data center environments.</li>
              <li><strong>Monitoring & Metrics</strong> - Real-time performance tracking and optimization suggestions.</li>
            </ul>
            
            <h2>Architecture Overview</h2>
            <p>
              The MCP platform consists of several interconnected components that work together to provide a seamless experience:
            </p>
            
            <ul>
              <li><strong>Agent Store</strong> - Browse and select from certified AI agents.</li>
              <li><strong>Testing Sandbox</strong> - Validate agent performance in a simulated environment.</li>
              <li><strong>Deployment Engine</strong> - Securely install and configure agents in your production environment.</li>
              <li><strong>Monitoring Dashboard</strong> - Track performance metrics and receive optimization recommendations.</li>
              <li><strong>Update Manager</strong> - Seamlessly update agents with the latest improvements.</li>
            </ul>
            
            <p>
              For more detailed information, please explore the specific sections of our documentation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
