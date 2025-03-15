
import React from 'react';

const DocumentationSection = () => {
  return (
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
  );
};

export default DocumentationSection;
