
import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { Zap, LineChart, Gauge, BarChart, Clock, Settings, Droplets, Battery } from 'lucide-react';

const PowerFlowOptimizer = () => {
  return (
    <ProductDetail
      id="eo-001"
      name="PowerFlow Optimizer"
      description="Dynamically adjusts power distribution based on workload patterns, reducing energy consumption by up to 32%."
      category="Energy Optimization"
      rating={4.9}
      reviews={113}
      image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
      tags={["Power Management", "ML", "Cost Saving", "Energy Efficiency", "Carbon Reduction"]}
      price="$299/mo"
      features={[
        {
          icon: <Zap className="w-10 h-10 text-primary" />,
          title: "Dynamic Power Allocation",
          description: "Intelligently distributes power resources based on real-time workload demands, eliminating waste from overprovisioning."
        },
        {
          icon: <LineChart className="w-10 h-10 text-primary" />,
          title: "Workload Prediction",
          description: "Learns usage patterns to anticipate demand spikes and optimize power distribution before they occur, ensuring both efficiency and performance."
        },
        {
          icon: <Gauge className="w-10 h-10 text-primary" />,
          title: "Power Quality Monitoring",
          description: "Monitors for anomalies in power quality that could affect equipment reliability and efficiency, helping prevent hardware damage."
        },
        {
          icon: <BarChart className="w-10 h-10 text-primary" />,
          title: "Energy Usage Analytics",
          description: "Comprehensive reporting and analytics for energy usage patterns, efficiency metrics, and cost analysis to drive continuous improvement."
        },
        {
          icon: <Clock className="w-10 h-10 text-primary" />,
          title: "Time-of-Use Optimization",
          description: "Shifts non-critical workloads to times when energy costs are lower, while ensuring that critical services remain unaffected."
        },
        {
          icon: <Battery className="w-10 h-10 text-primary" />,
          title: "UPS & Battery Management",
          description: "Optimizes UPS system utilization and backup battery charge cycles to extend equipment life while ensuring backup power availability."
        }
      ]}
      pricingPlans={[
        {
          title: "Starter",
          description: "Essential power optimization",
          price: "$299",
          features: [
            "Up to 50 kW capacity",
            "Basic workload prediction",
            "Energy usage reporting",
            "10% average energy savings",
            "Email alerts and notifications",
            "Standard support"
          ],
          cta: "Start Free Trial",
          highlight: false
        },
        {
          title: "Professional",
          description: "Comprehensive energy management",
          price: "$599",
          features: [
            "Up to 250 kW capacity",
            "Advanced workload prediction",
            "Complete analytics suite",
            "20% average energy savings",
            "UPS & battery optimization",
            "Priority support"
          ],
          cta: "Start Free Trial",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "Advanced optimization for large operations",
          price: "Custom",
          features: [
            "Unlimited capacity",
            "Custom prediction models",
            "Time-of-use optimization",
            "25-35% average energy savings",
            "Legacy system integration",
            "Dedicated support team"
          ],
          cta: "Contact Sales",
          highlight: false
        }
      ]}
      testimonials={[
        {
          quote: "PowerFlow Optimizer reduced our energy costs by 29% in the first quarter after implementation. The ROI was achieved within just 5 months.",
          author: "Jennifer Mathews",
          title: "Facilities Director, DataCore",
          image: "https://randomuser.me/api/portraits/women/31.jpg"
        },
        {
          quote: "The workload prediction capability is impressive. It optimizes power distribution before our demand spikes, keeping performance consistent while reducing waste.",
          author: "Robert Chang",
          title: "Operations Manager, CloudServe",
          image: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
          quote: "As part of our sustainability initiative, PowerFlow Optimizer helped us reduce our carbon footprint by over 400 tons annually. The reporting tools made ESG compliance straightforward.",
          author: "Amanda Jefferson",
          title: "Sustainability Officer, GreenTech",
          image: "https://randomuser.me/api/portraits/women/47.jpg"
        },
        {
          quote: "The UPS optimization features extended the life of our battery systems by 40%. This was an unexpected but significant cost benefit beyond the energy savings.",
          author: "Carlos Rodriguez",
          title: "Technical Director, PowerHost",
          image: "https://randomuser.me/api/portraits/men/52.jpg"
        },
        {
          quote: "Implementation was seamless and non-disruptive. The system began delivering value immediately, with optimization improving over the first few weeks as it learned our patterns.",
          author: "Sarah Kim",
          title: "IT Infrastructure Lead, DataSphere",
          image: "https://randomuser.me/api/portraits/women/62.jpg"
        },
        {
          quote: "The time-of-use optimization has been a game-changer for our operating costs. By shifting non-critical workloads to off-peak hours, we've reduced our energy bill by 37%.",
          author: "David Wilson",
          title: "CFO, ServerStack",
          image: "https://randomuser.me/api/portraits/men/22.jpg"
        }
      ]}
      faqs={[
        {
          question: "How does PowerFlow Optimizer connect to our power infrastructure?",
          answer: "PowerFlow Optimizer integrates with your existing Building Management System (BMS), Power Distribution Units (PDUs), and energy monitoring systems through standard protocols including Modbus, BACnet, and SNMP. For environments without modern monitoring capabilities, we offer sensors that can be installed to provide the necessary data inputs."
        },
        {
          question: "Will implementing PowerFlow Optimizer require downtime?",
          answer: "No, PowerFlow Optimizer is designed for zero-downtime implementation. The system operates in monitoring-only mode initially, collecting data and learning your environment before making any adjustments. When optimization begins, changes are made gradually and conservatively to ensure no disruption to operations."
        },
        {
          question: "Can PowerFlow Optimizer work with our renewable energy sources?",
          answer: "Yes, PowerFlow Optimizer excels at incorporating renewable energy sources into your power strategy. The system can prioritize renewable sources when available, shift workloads to align with renewable generation periods, and optimize battery storage systems to maximize renewable energy utilization."
        },
        {
          question: "How does PowerFlow Optimizer ensure critical systems always have the power they need?",
          answer: "You define criticality tiers for different workloads and systems during setup. PowerFlow Optimizer always guarantees that higher-tier systems receive priority for power resources. Multiple failsafes and conservative thresholds ensure critical systems are never at risk, even during optimization."
        },
        {
          question: "Does PowerFlow Optimizer support backup generators and alternative power sources?",
          answer: "Yes, PowerFlow Optimizer includes comprehensive support for generator systems, including automated testing optimization, load balancing during generator operation, and smooth transition management. The system also supports fuel cell, flywheel, and other alternative power technologies."
        },
        {
          question: "How quickly will we see energy savings after implementation?",
          answer: "Initial optimization begins within 2-3 weeks after installation as the system learns your unique environment. Most customers see measurable savings beginning in the first month, with optimization continuing to improve over the first 3-6 months as the machine learning models refine their understanding of your specific workload patterns."
        }
      ]}
    />
  );
};

export default PowerFlowOptimizer;
