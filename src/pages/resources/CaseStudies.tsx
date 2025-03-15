
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies | MCP AI Agents Marketplace</title>
        <meta name="description" content="Real-world examples of MCP AI Agents transforming data center operations" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              See how organizations are using MCP AI Agents to transform their data center operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Global Financial Services Firm Reduces Energy Consumption by 32%",
                company: "Major Financial Institution",
                solution: "PowerFlow Optimizer",
                image: "/placeholder.svg"
              },
              {
                title: "Tech Giant Prevents 97% of Security Breaches With Predictive AI",
                company: "Leading Technology Corporation",
                solution: "ThreatShield AI",
                image: "/placeholder.svg"
              },
              {
                title: "Healthcare Provider Achieves 99.99% Uptime with AI-Driven Monitoring",
                company: "National Healthcare Network",
                solution: "ServerGuard AI",
                image: "/placeholder.svg"
              },
              {
                title: "Retail Chain Cuts Cooling Costs by 40% While Improving Equipment Lifespan",
                company: "International Retail Corporation",
                solution: "CoolingSmart",
                image: "/placeholder.svg"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    <span className="font-medium">{caseStudy.company}</span> • Solution: {caseStudy.solution}
                  </p>
                  <a 
                    href="#" 
                    className="text-primary font-medium flex items-center text-sm"
                  >
                    Read Case Study
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
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
