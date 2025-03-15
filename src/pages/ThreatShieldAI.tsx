
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, Zap, Lock, Server, LineChart, Users, CreditCard, Star } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ThreatShieldAI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Security
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  ThreatShield AI
                </h1>
                <p className="text-xl text-foreground/80 max-w-lg">
                  Real-time threat detection and response using advanced behavioral analysis to identify potential security breaches.
                </p>
                <div className="flex items-center gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  <span className="text-lg font-medium ml-2">4.9</span>
                  <span className="text-foreground/60">(142 reviews)</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button size="lg" className="rounded-full">
                    Deploy Now
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2068&auto=format&fit=crop" 
                    alt="ThreatShield AI" 
                    className="w-full h-auto aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex">
                    <div className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      Enterprise-Grade Security
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {["Threat Detection", "Real-time", "Zero-day", "Behavioral Analysis", "Machine Learning", "24/7 Monitoring"].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Advanced Security Features
              </h2>
              <p className="text-lg text-foreground/80">
                ThreatShield AI employs cutting-edge technology to protect your data center from evolving threats.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-10 h-10 text-primary" />,
                  title: "Real-time Threat Detection",
                  description: "Continuous monitoring with millisecond response times to identify and mitigate potential threats before they impact your systems."
                },
                {
                  icon: <Zap className="w-10 h-10 text-primary" />,
                  title: "Zero-day Vulnerability Protection",
                  description: "Advanced heuristics and behavioral analysis to protect against unknown and emerging threats that traditional systems miss."
                },
                {
                  icon: <Lock className="w-10 h-10 text-primary" />,
                  title: "Advanced Encryption",
                  description: "Military-grade encryption for all data in transit and at rest, ensuring your sensitive information remains protected."
                },
                {
                  icon: <Server className="w-10 h-10 text-primary" />,
                  title: "Infrastructure Scanning",
                  description: "Continuous scanning of your infrastructure for misconfigurations, outdated software, and potential vulnerabilities."
                },
                {
                  icon: <LineChart className="w-10 h-10 text-primary" />,
                  title: "Anomaly Detection",
                  description: "ML-powered analysis to establish baselines and detect abnormal patterns that may indicate a security breach."
                },
                {
                  icon: <Users className="w-10 h-10 text-primary" />,
                  title: "Access Control & Auditing",
                  description: "Comprehensive access management with detailed audit trails for all system activities and authentication events."
                }
              ].map((feature, index) => (
                <Card key={index} className="border border-border bg-card shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-foreground/80">
                Choose the plan that best fits your data center security needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Standard",
                  description: "Essential security for small data centers",
                  price: "$199",
                  features: [
                    "Real-time threat detection",
                    "Basic anomaly detection",
                    "24/7 monitoring",
                    "Email alerts",
                    "Weekly reports",
                    "Community support"
                  ],
                  cta: "Get Started",
                  highlight: false
                },
                {
                  title: "Professional",
                  description: "Comprehensive security for medium-sized operations",
                  price: "$349",
                  features: [
                    "All Standard features",
                    "Advanced anomaly detection",
                    "Zero-day vulnerability protection",
                    "Infrastructure scanning",
                    "Access control & auditing",
                    "Priority support"
                  ],
                  cta: "Get Started",
                  highlight: true
                },
                {
                  title: "Enterprise",
                  description: "Ultimate protection for large-scale data centers",
                  price: "Custom",
                  features: [
                    "All Professional features",
                    "Custom security rules",
                    "Dedicated security team",
                    "Annual security assessment",
                    "Custom integrations",
                    "24/7 premium support"
                  ],
                  cta: "Contact Us",
                  highlight: false
                }
              ].map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border ${plan.highlight ? 'border-primary shadow-lg scale-105' : 'border-border'} relative`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-foreground/60">/month</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-8 ${plan.highlight ? 'bg-primary' : ''}`}
                      variant={plan.highlight ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                What Our Customers Say
              </h2>
              <p className="text-lg text-foreground/80">
                Join hundreds of satisfied data center operators who trust ThreatShield AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "ThreatShield AI identified a zero-day vulnerability that our traditional security systems missed. It potentially saved us millions in damages.",
                  author: "Sarah Chen",
                  title: "CTO, CloudMatrix Solutions",
                  image: "https://randomuser.me/api/portraits/women/32.jpg"
                },
                {
                  quote: "The real-time monitoring and instant alerts have dramatically improved our incident response time. We've reduced our security breaches by 87%.",
                  author: "Michael Rodriguez",
                  title: "Security Director, DataVault Inc.",
                  image: "https://randomuser.me/api/portraits/men/46.jpg"
                },
                {
                  quote: "Implementing ThreatShield AI was seamless. Their team worked with us to customize the solution for our specific needs and infrastructure.",
                  author: "Aisha Johnson",
                  title: "IT Manager, TechFront Systems",
                  image: "https://randomuser.me/api/portraits/women/65.jpg"
                },
                {
                  quote: "The anomaly detection capability is remarkable. It caught unusual access patterns that turned out to be an attempted breach in its early stages.",
                  author: "David Kim",
                  title: "CISO, Quantum Computing Lab",
                  image: "https://randomuser.me/api/portraits/men/22.jpg"
                },
                {
                  quote: "The ROI on ThreatShield AI has been incredible. We've reduced our security team's workload while improving our overall security posture.",
                  author: "Emma Parker",
                  title: "VP of Operations, NexusHost",
                  image: "https://randomuser.me/api/portraits/women/17.jpg"
                },
                {
                  quote: "As regulations tightened, we needed a solution that could adapt quickly. ThreatShield AI's compliance features have been a lifesaver.",
                  author: "James Wilson",
                  title: "Compliance Officer, FinTech Data",
                  image: "https://randomuser.me/api/portraits/men/67.jpg"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border border-border bg-card shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="inline-block w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground/80 italic flex-grow mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-foreground/60">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/80">
                Everything you need to know about ThreatShield AI.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How quickly can ThreatShield AI be deployed?",
                    answer: "ThreatShield AI can be deployed within 24-48 hours for standard configurations. Custom enterprise deployments may take 3-5 business days depending on the complexity of your infrastructure and specific requirements."
                  },
                  {
                    question: "Does ThreatShield AI integrate with existing security tools?",
                    answer: "Yes, ThreatShield AI is designed to integrate seamlessly with your existing security infrastructure including SIEM systems, firewalls, and other security solutions through our comprehensive API and pre-built connectors."
                  },
                  {
                    question: "How does the anomaly detection work?",
                    answer: "ThreatShield AI establishes behavioral baselines for your systems and users through machine learning. It then continuously monitors for deviations from these baselines that may indicate security threats, using a combination of statistical analysis and advanced AI algorithms."
                  },
                  {
                    question: "What kind of alerts and notifications are provided?",
                    answer: "ThreatShield AI provides real-time alerts through multiple channels including email, SMS, Slack, and other integrations. Alerts are prioritized based on severity and can be customized to your team's workflow and preferences."
                  },
                  {
                    question: "Is ThreatShield AI compliant with industry regulations?",
                    answer: "Yes, ThreatShield AI is designed to help you maintain compliance with major regulations including GDPR, HIPAA, PCI DSS, SOC 2, and other industry-specific requirements. Our compliance reporting features help streamline audits and certifications."
                  },
                  {
                    question: "What kind of support is included?",
                    answer: "All plans include some level of support. Standard plans come with community support and email assistance. Professional plans include priority support with faster response times. Enterprise plans feature 24/7 dedicated support with a named account representative and guaranteed response times."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Secure Your Data Center?
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join the hundreds of organizations that trust ThreatShield AI to protect their critical infrastructure from emerging threats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full">
                Deploy Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThreatShieldAI;
