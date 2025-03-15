
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, Zap, Lock, Server, LineChart, Users, CreditCard, Star } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export interface ProductDetailProps {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  tags: string[];
  price: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  pricingPlans: {
    title: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
    highlight: boolean;
  }[];
  testimonials: {
    quote: string;
    author: string;
    title: string;
    image: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  id,
  name,
  description,
  category,
  image,
  rating,
  reviews,
  tags,
  price,
  features,
  pricingPlans,
  testimonials,
  faqs,
}) => {
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
                  {category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {name}
                </h1>
                <p className="text-xl text-foreground/80 max-w-lg">
                  {description}
                </p>
                <div className="flex items-center gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  <span className="text-lg font-medium ml-2">{rating}</span>
                  <span className="text-foreground/60">({reviews} reviews)</span>
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
                    src={image} 
                    alt={name} 
                    className="w-full h-auto aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex">
                    <div className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      Enterprise-Grade Solution
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
              {tags.map((tag, index) => (
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
                Advanced Features
              </h2>
              <p className="text-lg text-foreground/80">
                {name} employs cutting-edge technology to enhance your data center operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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
                Choose the plan that best fits your data center needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
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
                      <span className="text-4xl font-bold">{plan.price.includes("$") ? plan.price : "Custom"}</span>
                      {plan.price.includes("$") && <span className="text-foreground/60">/month</span>}
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
                Join hundreds of satisfied data center operators who trust {name}.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
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
                Everything you need to know about {name}.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
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
              Ready to Optimize Your Data Center?
            </h2>
            <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Join the hundreds of organizations that trust {name} to enhance their critical infrastructure operations.
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

export default ProductDetail;
