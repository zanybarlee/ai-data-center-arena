
import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { Server, Shield, CircleAlert, Activity, BarChart, Cpu, Clock, Eye } from 'lucide-react';

const ServerGuardAI = () => {
  return (
    <ProductDetail
      id="pm-002"
      name="ServerGuard AI"
      description="Continuous hardware monitoring with ML-based diagnostics to predict component failures before they impact operations."
      category="Predictive Maintenance"
      rating={4.7}
      reviews={86}
      image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop"
      tags={["Hardware", "Diagnostics", "24/7 Monitoring", "Server Health", "Component Analysis"]}
      price="$249/mo"
      features={[
        {
          icon: <Server className="w-10 h-10 text-primary" />,
          title: "Component-Level Monitoring",
          description: "Tracks the health of individual server components including CPUs, memory modules, storage devices, and power supplies."
        },
        {
          icon: <Shield className="w-10 h-10 text-primary" />,
          title: "Pre-Failure Detection",
          description: "Identifies subtle signs of component degradation well before traditional monitoring solutions, preventing unexpected failures."
        },
        {
          icon: <CircleAlert className="w-10 h-10 text-primary" />,
          title: "Smart Alerting",
          description: "Intelligent alert system that prioritizes notifications based on severity, impact, and urgency to reduce alert fatigue."
        },
        {
          icon: <Activity className="w-10 h-10 text-primary" />,
          title: "Performance Impact Analysis",
          description: "Correlates component health with performance metrics to quantify the operational impact of potential hardware issues."
        },
        {
          icon: <BarChart className="w-10 h-10 text-primary" />,
          title: "Inventory Lifecycle Management",
          description: "Tracks component age, warranty status, and reliability metrics to optimize hardware refresh cycles and budget planning."
        },
        {
          icon: <Cpu className="w-10 h-10 text-primary" />,
          title: "Cross-Server Pattern Recognition",
          description: "Identifies patterns across multiple servers to detect systemic issues or batch-related component failures."
        }
      ]}
      pricingPlans={[
        {
          title: "Essentials",
          description: "Basic server health monitoring",
          price: "$249",
          features: [
            "Up to 25 servers",
            "Component health monitoring",
            "Basic failure prediction",
            "Email alerts",
            "Weekly health reports",
            "Standard support"
          ],
          cta: "Start Free Trial",
          highlight: false
        },
        {
          title: "Advanced",
          description: "Comprehensive server protection",
          price: "$499",
          features: [
            "Up to 100 servers",
            "Advanced prediction algorithms",
            "Customizable alert thresholds",
            "Multi-channel notifications",
            "Daily detailed reports",
            "Priority support"
          ],
          cta: "Start Free Trial",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "Complete data center coverage",
          price: "Custom",
          features: [
            "Unlimited servers",
            "Custom prediction models",
            "Integration with ITSM tools",
            "API access",
            "Custom reporting",
            "Dedicated support team"
          ],
          cta: "Contact Sales",
          highlight: false
        }
      ]}
      testimonials={[
        {
          quote: "ServerGuard AI has transformed our hardware maintenance approach. We've reduced unplanned downtime by 89% in the first six months.",
          author: "Richard Thomas",
          title: "Infrastructure Director, TechNexus",
          image: "https://randomuser.me/api/portraits/men/57.jpg"
        },
        {
          quote: "The component-level insights are incredibly valuable. We can now see exactly which parts of our servers are at risk and plan accordingly.",
          author: "Michelle Wong",
          title: "IT Operations Manager, CloudSphere",
          image: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
          quote: "I was skeptical about another monitoring tool, but ServerGuard AI's ML approach is different. It finds issues our traditional monitoring completely misses.",
          author: "David Clarke",
          title: "Systems Administrator, DataPeak",
          image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          quote: "The inventory lifecycle management feature alone has saved us thousands in procurement costs by optimizing our hardware refresh cycles.",
          author: "Jessica Martinez",
          title: "Procurement Manager, ServerCentral",
          image: "https://randomuser.me/api/portraits/women/42.jpg"
        },
        {
          quote: "ServerGuard AI detected a pattern of failing SSDs across multiple servers that shared the same manufacturing batch. This prevented a potential mass failure event.",
          author: "Aiden Johnson",
          title: "Technical Lead, InfraTech",
          image: "https://randomuser.me/api/portraits/men/19.jpg"
        },
        {
          quote: "As a colocation provider, we've rolled out ServerGuard AI as a premium service to our customers. The response has been overwhelmingly positive.",
          author: "Sophia Kim",
          title: "Product Manager, ColoEdge",
          image: "https://randomuser.me/api/portraits/women/63.jpg"
        }
      ]}
      faqs={[
        {
          question: "How does ServerGuard AI collect hardware data?",
          answer: "ServerGuard AI uses lightweight agents that collect hardware telemetry data using industry-standard methods such as IPMI, SNMP, and vendor-specific APIs. The agents consume minimal resources and have been optimized to have negligible performance impact."
        },
        {
          question: "Does ServerGuard AI support virtual environments?",
          answer: "Yes, ServerGuard AI supports both physical and virtual environments. For virtual machines, we monitor both the virtual hardware as seen by the guest OS as well as the underlying physical hardware of the host when possible."
        },
        {
          question: "What hardware vendors and models are supported?",
          answer: "ServerGuard AI supports all major server vendors including Dell, HP, Lenovo, Cisco, Supermicro, and IBM/Lenovo. Our solution is designed to work with any x86/x64 server hardware regardless of vendor, with enhanced capabilities for major brands."
        },
        {
          question: "How far in advance can ServerGuard AI predict failures?",
          answer: "The prediction window varies by component type and failure mode. Disk drives can typically be predicted 2-4 weeks in advance, while memory and power supply issues can be detected 1-3 weeks before failure. Some CPU issues can be identified months before they cause operational problems."
        },
        {
          question: "Can ServerGuard AI be deployed in air-gapped environments?",
          answer: "Yes, we offer an on-premises deployment option for high-security or air-gapped environments. This requires additional infrastructure but provides all the core capabilities without external connectivity requirements."
        },
        {
          question: "How is ServerGuard AI different from the monitoring built into our servers?",
          answer: "While built-in monitoring systems can detect failures once they occur or are imminent, ServerGuard AI uses machine learning to identify subtle patterns of component degradation weeks or months earlier. We also provide cross-system analysis that individual server monitoring cannot offer."
        }
      ]}
    />
  );
};

export default ServerGuardAI;
