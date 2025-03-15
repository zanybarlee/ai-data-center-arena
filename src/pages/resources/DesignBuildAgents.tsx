
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import AgentBuilderOverview from '@/components/resources/AgentBuilderOverview';
import DevelopmentProcess from '@/components/resources/DevelopmentProcess';
import GetStartedCTA from '@/components/resources/GetStartedCTA';
import ResourcesFAQ from '@/components/resources/ResourcesFAQ';

const DesignBuildAgents = () => {
  const faqs = [
    {
      question: "Do I need programming experience to build an agent?",
      answer: "No, our no-code builder allows anyone to create agents using our visual interface. However, for more complex agents, some programming knowledge can be beneficial for customization."
    },
    {
      question: "How long does it take to build a custom agent?",
      answer: "Simple agents can be built in a few hours, while more complex ones might take several days. Our templates accelerate the process by providing pre-configured starting points."
    },
    {
      question: "Can I integrate my custom agent with existing systems?",
      answer: "Yes, our agents support integration with most common data center management systems, monitoring tools, and cloud platforms through our extensive API connectors."
    },
    {
      question: "How are custom agents certified?",
      answer: "All agents undergo rigorous testing for security, performance, and reliability in our certification lab before they can be deployed to production environments."
    }
  ];

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
          
          <AgentBuilderOverview />
          <DevelopmentProcess />
          <GetStartedCTA />
          <ResourcesFAQ faqs={faqs} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignBuildAgents;
