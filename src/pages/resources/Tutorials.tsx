
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import { Play, Clock, BookOpen } from 'lucide-react';

const Tutorials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Tutorials | MCP AI Agents Marketplace</title>
        <meta name="description" content="Step-by-step tutorials for getting the most out of MCP AI Agents" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tutorials</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Learn how to maximize the value of your AI agents with our step-by-step tutorials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Getting Started with ThreatShield AI",
                type: "Video",
                duration: "15 min",
                level: "Beginner",
                image: "/placeholder.svg"
              },
              {
                title: "Advanced Configurations for PowerFlow Optimizer",
                type: "Text",
                duration: "20 min",
                level: "Advanced",
                image: "/placeholder.svg"
              },
              {
                title: "Integrating Multiple Agents for Complete Coverage",
                type: "Video",
                duration: "25 min",
                level: "Intermediate",
                image: "/placeholder.svg"
              },
              {
                title: "Custom Alert Configuration for Critical Systems",
                type: "Text",
                duration: "10 min",
                level: "Intermediate",
                image: "/placeholder.svg"
              },
              {
                title: "Deploying to Distributed Data Centers",
                type: "Video",
                duration: "30 min",
                level: "Advanced",
                image: "/placeholder.svg"
              },
              {
                title: "Basic Troubleshooting Techniques",
                type: "Text",
                duration: "15 min",
                level: "Beginner",
                image: "/placeholder.svg"
              }
            ].map((tutorial, index) => (
              <div key={index} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                  />
                  {tutorial.type === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tutorial.level === "Beginner" ? "bg-green-100 text-green-800" :
                      tutorial.level === "Intermediate" ? "bg-orange-100 text-orange-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {tutorial.level}
                    </span>
                    <span className="flex items-center text-xs text-foreground/70">
                      <Clock className="w-3 h-3 mr-1" />
                      {tutorial.duration}
                    </span>
                    <span className="flex items-center text-xs text-foreground/70">
                      {tutorial.type === "Video" ? 
                        <Play className="w-3 h-3 mr-1" /> : 
                        <BookOpen className="w-3 h-3 mr-1" />
                      }
                      {tutorial.type}
                    </span>
                  </div>
                  <h3 className="text-md font-semibold mb-2">{tutorial.title}</h3>
                  <a 
                    href="#" 
                    className="text-primary text-sm font-medium flex items-center mt-3"
                  >
                    View Tutorial
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

export default Tutorials;
