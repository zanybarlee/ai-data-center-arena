
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';
import { Check } from 'lucide-react';

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Partner Program | MCP AI Agents Marketplace</title>
        <meta name="description" content="Join the MCP AI Agents partner ecosystem and grow your business" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner Program</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Join our ecosystem and help transform how data centers operate with specialized AI agents.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <h2>Why Partner With MCP?</h2>
            <p>
              The MCP Partner Program offers a unique opportunity to collaborate with a leader in AI-driven data center management. Whether you're developing AI agents, providing implementation services, or reselling solutions, our program is designed to help you grow your business while delivering exceptional value to customers.
            </p>
          </div>
          
          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Technology Partners",
                description: "Develop and certify AI agents for the MCP marketplace",
                benefits: [
                  "Access to development sandbox",
                  "Certification assistance",
                  "Joint marketing opportunities",
                  "Revenue sharing model"
                ]
              },
              {
                title: "Implementation Partners",
                description: "Provide professional services for MCP deployments",
                benefits: [
                  "Technical training and certification",
                  "Lead sharing program",
                  "Co-selling opportunities",
                  "Partner portal access"
                ]
              },
              {
                title: "Reseller Partners",
                description: "Expand your portfolio with MCP solutions",
                benefits: [
                  "Competitive margins",
                  "Sales enablement resources",
                  "Marketing development funds",
                  "Deal registration program"
                ]
              }
            ].map((program, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-foreground/70 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Partner Tiers */}
          <h2 className="text-2xl font-bold mb-6">Partner Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                tier: "Silver",
                description: "Entry-level partnership with basic benefits and support",
                requirements: "Complete partner training and achieve initial sales targets",
                benefits: [
                  "Basic partner portal access",
                  "Online training resources",
                  "Standard partner logo usage",
                  "Email support"
                ]
              },
              {
                tier: "Gold",
                description: "Mid-level partnership with enhanced benefits and priorities",
                requirements: "Maintain certified staff and meet quarterly sales goals",
                benefits: [
                  "Enhanced partner portal access",
                  "Advanced training and certification",
                  "Joint marketing activities",
                  "Dedicated partner manager"
                ]
              },
              {
                tier: "Platinum",
                description: "Elite partnership with maximum benefits and collaboration",
                requirements: "Strategic business alignment and exceptional performance",
                benefits: [
                  "Full partner ecosystem access",
                  "Earliest access to new features",
                  "Executive sponsorship",
                  "Strategic business planning"
                ]
              }
            ].map((tier, index) => (
              <div key={index} className={`rounded-xl p-6 hover:shadow-md transition-shadow ${
                index === 0 ? "border bg-card" :
                index === 1 ? "border-2 border-primary/50 bg-gradient-to-b from-primary/5 to-transparent" :
                "border-2 border-primary bg-gradient-to-b from-primary/10 to-transparent"
              }`}>
                <h3 className={`text-xl font-bold mb-1 ${
                  index === 0 ? "text-foreground" :
                  index === 1 ? "text-primary" :
                  "text-primary"
                }`}>{tier.tier}</h3>
                <p className="text-foreground/70 mb-4">{tier.description}</p>
                <p className="text-sm font-medium mb-3">Requirements:</p>
                <p className="text-sm text-foreground/70 mb-4">{tier.requirements}</p>
                <p className="text-sm font-medium mb-3">Key Benefits:</p>
                <ul className="space-y-2 text-sm">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
                        index === 0 ? "text-foreground/70" :
                        "text-primary"
                      }`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Application CTA */}
          <div className="bg-secondary p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Become a Partner?</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem today and access new revenue opportunities while helping customers transform their data center operations with cutting-edge AI technology.
            </p>
            <a 
              href="#" 
              className="px-8 py-3 bg-primary text-white rounded-lg text-base font-medium inline-block hover:bg-primary/90 transition-colors"
            >
              Apply to Partner Program
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
