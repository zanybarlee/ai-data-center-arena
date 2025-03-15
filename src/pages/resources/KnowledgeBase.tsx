
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Knowledge Base | MCP AI Agents Marketplace</title>
        <meta name="description" content="Browse our knowledge base for answers to common questions about MCP AI Agents" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Base</h1>
            <p className="text-xl text-foreground/70 max-w-3xl mb-8">
              Find answers to common questions and solutions to known issues with our AI agents.
            </p>
            
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-foreground/50" />
              </div>
              <input
                type="text"
                placeholder="Search the knowledge base..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                category: "Getting Started",
                articles: [
                  "Setting Up Your MCP Account",
                  "Understanding Agent Certification Levels",
                  "Initial Environment Configuration",
                  "Connecting to Your Data Center"
                ]
              },
              {
                category: "Troubleshooting",
                articles: [
                  "Common Deployment Errors",
                  "Agent Communication Issues",
                  "Performance Optimization Tips",
                  "Resolving Access Control Problems"
                ]
              },
              {
                category: "Configuration",
                articles: [
                  "Custom Alert Thresholds",
                  "Integration with Existing Monitoring Tools",
                  "Data Retention Policies",
                  "Network Configuration Requirements"
                ]
              },
              {
                category: "Security",
                articles: [
                  "Understanding Data Privacy Measures",
                  "Authentication Best Practices",
                  "Compliance with Industry Standards",
                  "Secure Agent Communication"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-card border rounded-xl overflow-hidden p-6">
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a 
                        href="#" 
                        className="text-foreground/80 hover:text-primary transition-colors flex items-center"
                      >
                        <span className="mr-2">•</span>
                        <span>{article}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-4 inline-block text-primary font-medium text-sm"
                >
                  View all articles →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
