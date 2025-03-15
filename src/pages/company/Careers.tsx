
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import { MapPin } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Careers | MCP AI Agents Marketplace</title>
        <meta name="description" content="Join our team and help transform data center management with AI" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Join our mission to transform how data centers operate with specialized AI agents.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Life at MCP</h2>
            <p>
              Working at MCP means joining a team of passionate individuals who are dedicated to solving complex problems at the intersection of artificial intelligence and data center operations. We value innovation, collaboration, and impact, and we're committed to creating an inclusive environment where diverse perspectives thrive.
            </p>
            
            <h3>Our Values</h3>
            <ul>
              <li><strong>Innovation First</strong> - We push boundaries and challenge the status quo.</li>
              <li><strong>Customer Obsession</strong> - We're deeply committed to our customers' success.</li>
              <li><strong>Data-Driven Decisions</strong> - We let evidence guide our choices.</li>
              <li><strong>Collaborative Spirit</strong> - We achieve more by working together.</li>
              <li><strong>Continuous Learning</strong> - We're always growing and improving.</li>
            </ul>
            
            <h3>Benefits</h3>
            <ul>
              <li>Competitive salary and equity packages</li>
              <li>Comprehensive health, dental, and vision coverage</li>
              <li>Flexible work arrangements and unlimited PTO</li>
              <li>Professional development stipend</li>
              <li>Wellness programs and mental health support</li>
              <li>Regular team events and retreats</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6 mb-12">
            {[
              {
                title: "Senior AI Engineer",
                department: "Engineering",
                location: "San Francisco, CA (Hybrid)",
                type: "Full-time"
              },
              {
                title: "Data Center Solutions Architect",
                department: "Product",
                location: "Remote (US)",
                type: "Full-time"
              },
              {
                title: "DevOps Engineer",
                department: "Engineering",
                location: "San Francisco, CA (Hybrid)",
                type: "Full-time"
              },
              {
                title: "Product Marketing Manager",
                department: "Marketing",
                location: "Remote (US)",
                type: "Full-time"
              },
              {
                title: "Customer Success Manager",
                department: "Customer Success",
                location: "New York, NY (Hybrid)",
                type: "Full-time"
              }
            ].map((job, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-primary font-medium mb-2">{job.department}</p>
                    <div className="flex items-center text-foreground/70 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{job.location}</span>
                      <span className="mx-2">•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="mt-4 md:mt-0 px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium inline-block hover:bg-primary/90 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-secondary p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-3">Don't see a position that matches your skills?</h3>
            <p className="text-foreground/70 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="#" 
              className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium inline-block hover:bg-primary/90 transition-colors"
            >
              Submit General Application
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
