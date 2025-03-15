
import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { Network, Activity, LineChart, Fingerprint, Clock, Bell, BarChart, Wifi } from 'lucide-react';

const NetworkHealthMonitor = () => {
  return (
    <ProductDetail
      id="pm-003"
      name="NetworkHealth Monitor"
      description="Network infrastructure monitoring with anomaly detection to prevent outages and ensure optimal performance."
      category="Predictive Maintenance"
      rating={4.8}
      reviews={92}
      image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
      tags={["Network", "Anomaly Detection", "Uptime", "Packet Analysis", "Latency Monitoring"]}
      price="Free"
      features={[
        {
          icon: <Network className="w-10 h-10 text-primary" />,
          title: "Network Topology Mapping",
          description: "Automatically discovers and maps your entire network infrastructure, keeping your visibility up-to-date as your network evolves."
        },
        {
          icon: <Activity className="w-10 h-10 text-primary" />,
          title: "Real-time Performance Monitoring",
          description: "Continuously monitors network metrics including latency, packet loss, throughput, and error rates across all connected devices."
        },
        {
          icon: <LineChart className="w-10 h-10 text-primary" />,
          title: "Predictive Analytics",
          description: "Uses advanced algorithms to predict potential network issues before they affect your operations, allowing for proactive maintenance."
        },
        {
          icon: <Fingerprint className="w-10 h-10 text-primary" />,
          title: "Traffic Pattern Analysis",
          description: "Identifies unusual traffic patterns that could indicate security issues, misconfiguration, or developing hardware problems."
        },
        {
          icon: <Clock className="w-10 h-10 text-primary" />,
          title: "Historical Performance Tracking",
          description: "Maintains detailed historical data for trend analysis, capacity planning, and demonstrating compliance with SLAs."
        },
        {
          icon: <Wifi className="w-10 h-10 text-primary" />,
          title: "Wireless Network Optimization",
          description: "Monitors and optimizes WiFi performance across your facility, ensuring reliable connectivity for mobile devices and IoT sensors."
        }
      ]}
      pricingPlans={[
        {
          title: "Free",
          description: "Basic monitoring for small networks",
          price: "$0",
          features: [
            "Up to 25 devices",
            "Basic anomaly detection",
            "Email alerts",
            "24-hour data retention",
            "Network topology mapping",
            "Community support"
          ],
          cta: "Get Started",
          highlight: false
        },
        {
          title: "Professional",
          description: "Advanced monitoring for growing networks",
          price: "$199",
          features: [
            "Up to 100 devices",
            "Advanced predictive analytics",
            "Multi-channel alerts",
            "30-day data retention",
            "Custom reporting",
            "Priority support"
          ],
          cta: "Start Free Trial",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "Complete solution for complex networks",
          price: "$499",
          features: [
            "Unlimited devices",
            "Custom prediction models",
            "API access",
            "1-year data retention",
            "Integration with ITSM tools",
            "Dedicated support manager"
          ],
          cta: "Contact Sales",
          highlight: false
        }
      ]}
      testimonials={[
        {
          quote: "NetworkHealth Monitor alerted us to a degrading core switch before it affected operations. The early warning saved us from a potential 4-hour outage.",
          author: "Thomas Reynolds",
          title: "Network Administrator, TechFlow",
          image: "https://randomuser.me/api/portraits/men/37.jpg"
        },
        {
          quote: "The network topology mapping feature has been invaluable as our infrastructure grows. It's like having an always up-to-date diagram of our entire network.",
          author: "Sarah Jenkins",
          title: "IT Director, DataStream",
          image: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
          quote: "We started with the free tier and were so impressed that we upgraded to Professional within a month. The predictive capabilities have transformed our approach to network management.",
          author: "Michael Chen",
          title: "CTO, CloudBurst",
          image: "https://randomuser.me/api/portraits/men/52.jpg"
        },
        {
          quote: "The traffic pattern analysis identified an unusual data transfer that turned out to be an unauthorized backup system. It potentially saved us from a significant security breach.",
          author: "Alicia Rodriguez",
          title: "Security Specialist, SecureNet",
          image: "https://randomuser.me/api/portraits/women/29.jpg"
        },
        {
          quote: "As a managed service provider, we've deployed NetworkHealth Monitor across dozens of client networks. It's become an essential part of our service offering.",
          author: "James Wilson",
          title: "Operations Manager, ManagedTech",
          image: "https://randomuser.me/api/portraits/men/68.jpg"
        },
        {
          quote: "The wireless optimization features helped us identify and resolve coverage issues in our warehouse. Throughput for our inventory scanners improved by 78%.",
          author: "Emily Davis",
          title: "Infrastructure Lead, LogiTech",
          image: "https://randomuser.me/api/portraits/women/82.jpg"
        }
      ]}
      faqs={[
        {
          question: "How does NetworkHealth Monitor detect potential issues?",
          answer: "NetworkHealth Monitor combines signature-based detection for known issues with machine learning algorithms that establish baseline performance patterns for your specific network. When metrics start to deviate from these learned patterns, even subtly, our system can identify potential issues before traditional threshold-based monitoring would trigger alerts."
        },
        {
          question: "Does NetworkHealth Monitor require special hardware or agents?",
          answer: "No specialized hardware is required. NetworkHealth Monitor works through standard protocols like SNMP, NetFlow, sFlow, IPFIX, and WMI. For more detailed analysis, lightweight software agents can be optionally deployed on critical systems, but they're not required for core functionality."
        },
        {
          question: "How quickly can NetworkHealth Monitor be implemented?",
          answer: "Basic implementation can be completed in as little as an hour for small networks. For larger, more complex environments, expect 1-2 days for full implementation and initial learning. The system will begin providing value immediately, with prediction accuracy improving over the first 1-2 weeks as it learns your network's normal patterns."
        },
        {
          question: "Can NetworkHealth Monitor integrate with our existing tools?",
          answer: "Yes, NetworkHealth Monitor offers integrations with popular ITSM platforms like ServiceNow, Jira, and PagerDuty, as well as communication tools like Slack and Microsoft Teams. We also provide a comprehensive API for custom integrations with your existing systems."
        },
        {
          question: "Is the free version actually useful or just a demo?",
          answer: "Our free version offers complete core functionality without artificial limitations. It's designed to provide genuine value for small networks while giving larger organizations an opportunity to evaluate the platform. The primary limitations are the number of devices monitored and data retention period."
        },
        {
          question: "How does NetworkHealth Monitor handle encrypted traffic?",
          answer: "NetworkHealth Monitor primarily works at the network flow level and doesn't require deep packet inspection of encrypted traffic. For environments where deeper analysis is needed, we support integration with TLS inspection proxies, though this is optional and not required for our core predictive capabilities."
        }
      ]}
    />
  );
};

export default NetworkHealthMonitor;
