
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import { Clock } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog | MCP AI Agents Marketplace</title>
        <meta name="description" content="Latest insights and news from the MCP AI Agents team" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Insights, updates, and thought leadership from the MCP team.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm md:flex">
              <div className="md:w-1/2 aspect-video md:aspect-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="The Future of Data Center Management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Featured
                  </span>
                  <span className="ml-3 text-foreground/60 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    June 15, 2023
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">The Future of Data Center Management: AI-Driven Optimization</h2>
                <p className="text-foreground/70 mb-6">
                  As data centers grow increasingly complex, traditional management approaches are reaching their limits. Learn how specialized AI agents are revolutionizing operations, security, and energy efficiency.
                </p>
                <a 
                  href="#" 
                  className="text-primary font-medium flex items-center"
                >
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Recent Posts */}
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Case Study: How ThreatShield AI Prevented a Major Security Breach",
                category: "Security",
                date: "May 28, 2023",
                excerpt: "An in-depth look at how our threat detection AI agent identified and mitigated a sophisticated attack pattern before it caused damage.",
                image: "/placeholder.svg"
              },
              {
                title: "The Role of AI in Achieving Sustainability Goals for Data Centers",
                category: "Sustainability",
                date: "May 15, 2023",
                excerpt: "Explore how AI-driven power optimization can significantly reduce energy consumption while maintaining performance.",
                image: "/placeholder.svg"
              },
              {
                title: "Introducing Our New Certification Framework for Third-Party AI Agents",
                category: "Announcements",
                date: "April 30, 2023",
                excerpt: "Learn about our enhanced certification process designed to ensure quality and security across all marketplace offerings.",
                image: "/placeholder.svg"
              },
              {
                title: "The Hidden Costs of Datacenter Downtime and How to Avoid Them",
                category: "Operations",
                date: "April 18, 2023",
                excerpt: "Beyond the immediate financial impact, downtime creates cascading effects that can impact your business for months.",
                image: "/placeholder.svg"
              }
            ].map((post, index) => (
              <div key={index} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="ml-3 text-foreground/60 text-xs flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="text-primary font-medium text-sm flex items-center"
                  >
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

export default Blog;
