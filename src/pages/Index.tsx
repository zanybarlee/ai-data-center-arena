
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import TestingSandbox from '@/components/TestingSandbox';
import DeploymentSection from '@/components/DeploymentSection';
import DocumentationSection from '@/components/DocumentationSection';
import CallToAction from '@/components/CallToAction';
import { scrollToElement } from '@/lib/utils';

// Mock data for agent cards
const predictiveMaintenanceAgents = [
  {
    id: "pm-001",
    name: "FailurePredictor Pro",
    description: "AI-powered predictive maintenance for cooling systems. Reduces downtime by 87% through early detection of potential failures.",
    category: "Predictive Maintenance",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    tags: ["Cooling", "HVAC", "Monitoring", "Real-time"],
    price: "$199/mo"
  },
  {
    id: "pm-002",
    name: "ServerGuard AI",
    description: "Continuous hardware monitoring with ML-based diagnostics to predict component failures before they impact operations.",
    category: "Predictive Maintenance",
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop",
    tags: ["Hardware", "Diagnostics", "24/7 Monitoring"],
    price: "$249/mo"
  },
  {
    id: "pm-003",
    name: "NetworkHealth Monitor",
    description: "Network infrastructure monitoring with anomaly detection to prevent outages and ensure optimal performance.",
    category: "Predictive Maintenance",
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    tags: ["Network", "Anomaly Detection", "Uptime"],
    price: "Free"
  }
];

const energyOptimizationAgents = [
  {
    id: "eo-001",
    name: "PowerFlow Optimizer",
    description: "Dynamically adjusts power distribution based on workload patterns, reducing energy consumption by up to 32%.",
    category: "Energy Optimization",
    rating: 4.9,
    reviews: 113,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
    tags: ["Power Management", "ML", "Cost Saving"],
    price: "$299/mo"
  },
  {
    id: "eo-002",
    name: "CoolingSmart AI",
    description: "Intelligent cooling system management that uses weather forecasts and workload predictions to optimize energy use.",
    category: "Energy Optimization",
    rating: 4.6,
    reviews: 75,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    tags: ["HVAC", "Energy Efficiency", "Smart Cooling"],
    price: "$179/mo"
  },
  {
    id: "eo-003",
    name: "WorkloadBalancer",
    description: "Distributes computing tasks for optimal energy efficiency without compromising performance. Ideal for variable workloads.",
    category: "Energy Optimization",
    rating: 4.8,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?q=80&w=2069&auto=format&fit=crop",
    tags: ["Load Balancing", "Efficiency", "Resource Management"],
    price: "Free"
  }
];

const securityAgents = [
  {
    id: "sec-001",
    name: "ThreatShield AI",
    description: "Real-time threat detection and response using advanced behavioral analysis to identify potential security breaches.",
    category: "Security",
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2068&auto=format&fit=crop",
    tags: ["Threat Detection", "Real-time", "Zero-day"],
    price: "$349/mo"
  },
  {
    id: "sec-002",
    name: "AccessGuardian",
    description: "AI-powered access control system with anomaly detection for identifying suspicious login patterns and potential breaches.",
    category: "Security",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    tags: ["Access Control", "Identity", "Authentication"],
    price: "$199/mo"
  },
  {
    id: "sec-003",
    name: "SecureConfig AI",
    description: "Continuously audits system configurations against security best practices, identifying and fixing vulnerabilities automatically.",
    category: "Security",
    rating: 4.8,
    reviews: 103,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    tags: ["Configuration", "Compliance", "Auto-remediation"],
    price: "Free"
  }
];

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check for hash in URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        
        <div id="agent-store" className="bg-gradient-to-b from-background to-secondary py-10">
          <CategorySection 
            title="Predictive Maintenance Agents"
            subtitle="AI-powered solutions that predict potential failures before they happen, ensuring uninterrupted data center operations."
            agents={predictiveMaintenanceAgents}
            className="py-24"
          />
          
          <CategorySection 
            title="Energy Optimization Agents"
            subtitle="Smart agents that dynamically adjust power and cooling resources to minimize energy consumption while maintaining performance."
            agents={energyOptimizationAgents}
            className="py-24 bg-background"
          />
          
          <CategorySection 
            title="Security & Compliance Agents"
            subtitle="Advanced security protocols and regulatory compliance monitoring to protect your data center from threats and ensure legal compliance."
            agents={securityAgents}
            className="py-24"
          />
        </div>
        
        <div id="testing-sandbox">
          <TestingSandbox />
        </div>
        
        <div id="deployment">
          <DeploymentSection />
        </div>
        
        <div id="documentation">
          <DocumentationSection />
        </div>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
