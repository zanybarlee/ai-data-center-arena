
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | MCP AI Agents Marketplace</title>
        <meta name="description" content="Learn about the mission and team behind MCP AI Agents Marketplace" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              We're transforming how data centers operate with specialized AI agents.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              At MCP, we believe that the future of data center management lies in specialized AI agents that can optimize operations, enhance security, and reduce energy consumption. Our mission is to create a marketplace that connects data center operators with the most effective AI solutions, ensuring that each implementation is certified, secure, and optimized for their specific needs.
            </p>
            
            <h2>Our Story</h2>
            <p>
              Founded in 2021 by a team of data center experts and AI researchers, MCP emerged from the recognition that while AI holds tremendous potential for transforming data center operations, implementation was often complex and results varied widely. We set out to create a standardized ecosystem that would simplify deployment while ensuring quality and security.
            </p>
            <p>
              What began as a small collection of internally developed AI agents has grown into a comprehensive marketplace featuring solutions from dozens of specialized providers, all adhering to our rigorous certification standards.
            </p>
            
            <h2>Our Approach</h2>
            <p>
              We believe in:
            </p>
            <ul>
              <li><strong>Specialization</strong> - Each agent is designed for a specific purpose, ensuring optimal performance.</li>
              <li><strong>Rigorous Testing</strong> - All agents undergo extensive certification to verify effectiveness and security.</li>
              <li><strong>Easy Integration</strong> - Our platform simplifies deployment and management, reducing technical barriers.</li>
              <li><strong>Measurable Results</strong> - We focus on delivering quantifiable improvements in efficiency, security, and cost.</li>
            </ul>
            
            <h2>Leadership Team</h2>
            <p>
              Our team combines expertise in data center operations, artificial intelligence, and enterprise software development.
            </p>
            
            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12">
              {[
                {
                  name: "Dr. Elena Chen",
                  role: "CEO & Co-Founder",
                  bio: "Former Head of AI Research at TechGiant, PhD in Machine Learning from Stanford",
                  image: "/placeholder.svg"
                },
                {
                  name: "Marcus Johnson",
                  role: "CTO & Co-Founder",
                  bio: "20+ years experience in data center operations and infrastructure management",
                  image: "/placeholder.svg"
                },
                {
                  name: "Sarah Williams",
                  role: "Chief Product Officer",
                  bio: "Led product teams at several enterprise software companies, focused on operational efficiency",
                  image: "/placeholder.svg"
                }
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                  <p className="text-primary text-sm mb-2">{person.role}</p>
                  <p className="text-foreground/70 text-sm">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
