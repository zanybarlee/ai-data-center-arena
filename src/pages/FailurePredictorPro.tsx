
import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { LineChart, AlertTriangle, BarChart4, Clock, PieChart, Database, Activity, BarChart2 } from 'lucide-react';

const FailurePredictorPro = () => {
  return (
    <ProductDetail
      id="pm-001"
      name="FailurePredictor Pro"
      description="AI-powered predictive maintenance for cooling systems. Reduces downtime by 87% through early detection of potential failures."
      category="Predictive Maintenance"
      rating={4.9}
      reviews={128}
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
      tags={["Cooling", "HVAC", "Monitoring", "Real-time", "Predictive Analysis", "Machine Learning"]}
      price="$199/mo"
      features={[
        {
          icon: <AlertTriangle className="w-10 h-10 text-primary" />,
          title: "Early Failure Detection",
          description: "Identifies potential system failures up to 3 weeks before they occur, giving your team ample time to plan and execute maintenance."
        },
        {
          icon: <LineChart className="w-10 h-10 text-primary" />,
          title: "Trend Analysis",
          description: "Advanced pattern recognition algorithms that establish normal performance parameters and detect deviations before they become critical."
        },
        {
          icon: <BarChart4 className="w-10 h-10 text-primary" />,
          title: "Performance Monitoring",
          description: "Real-time monitoring of HVAC system performance metrics with intelligent thresholds and customizable alerts."
        },
        {
          icon: <Clock className="w-10 h-10 text-primary" />,
          title: "Maintenance Scheduling",
          description: "AI-powered maintenance scheduling that optimizes service intervals based on actual system conditions, not just calendar time."
        },
        {
          icon: <PieChart className="w-10 h-10 text-primary" />,
          title: "Resource Optimization",
          description: "Ensures cooling resources are allocated efficiently, reducing energy consumption while maintaining optimal operating conditions."
        },
        {
          icon: <Database className="w-10 h-10 text-primary" />,
          title: "Historical Analysis",
          description: "Stores and analyzes historical performance data to continuously improve prediction accuracy and system efficiency."
        }
      ]}
      pricingPlans={[
        {
          title: "Standard",
          description: "For small data centers and server rooms",
          price: "$199",
          features: [
            "Up to 10 cooling units",
            "Basic anomaly detection",
            "Weekly prediction reports",
            "Email alerts",
            "24/7 monitoring",
            "Community support"
          ],
          cta: "Get Started",
          highlight: false
        },
        {
          title: "Professional",
          description: "For medium-sized data centers",
          price: "$349",
          features: [
            "Up to 50 cooling units",
            "Advanced anomaly detection",
            "Daily prediction reports",
            "SMS and email alerts",
            "Root cause analysis",
            "Priority support"
          ],
          cta: "Get Started",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "For large-scale operations",
          price: "Custom",
          features: [
            "Unlimited cooling units",
            "Custom prediction models",
            "Real-time reporting",
            "Integration with existing systems",
            "Dedicated maintenance team",
            "24/7 premium support"
          ],
          cta: "Contact Us",
          highlight: false
        }
      ]}
      testimonials={[
        {
          quote: "FailurePredictor Pro alerted us to a failing cooling unit two weeks before it would have caused a major outage. The ROI on this tool was immediate.",
          author: "Mark Johnson",
          title: "Data Center Manager, CloudTech",
          image: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
          quote: "We've reduced our emergency maintenance calls by 92% since implementing FailurePredictor Pro. Our maintenance schedule is now proactive rather than reactive.",
          author: "Lisa Chen",
          title: "Operations Director, ServerVault",
          image: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
          quote: "The energy savings alone paid for the subscription. By optimizing our cooling system performance, we've reduced power consumption by 23%.",
          author: "Robert Patel",
          title: "Sustainability Lead, EcoData",
          image: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          quote: "The implementation was surprisingly simple. Within days we were getting actionable insights about our cooling systems that we never had before.",
          author: "Sandra Miller",
          title: "IT Infrastructure Manager, TechHost",
          image: "https://randomuser.me/api/portraits/women/55.jpg"
        },
        {
          quote: "The historical analysis features have been invaluable for our long-term planning and budgeting. We can now predict maintenance costs with remarkable accuracy.",
          author: "James Wilson",
          title: "CFO, DataSphere",
          image: "https://randomuser.me/api/portraits/men/76.jpg"
        },
        {
          quote: "As someone who manages multiple data centers, the centralized dashboard gives me visibility I never had before. I can now allocate resources where they're most needed.",
          author: "Emily Zhang",
          title: "Regional Manager, GlobalServe",
          image: "https://randomuser.me/api/portraits/women/17.jpg"
        }
      ]}
      faqs={[
        {
          question: "How long does it take to set up FailurePredictor Pro?",
          answer: "Initial setup typically takes 1-3 days depending on your infrastructure complexity. Our system begins learning right away, but achieves optimal prediction accuracy after 2-3 weeks of collecting performance data."
        },
        {
          question: "Does FailurePredictor Pro work with all types of cooling systems?",
          answer: "Yes, FailurePredictor Pro is designed to work with all major HVAC and cooling systems commonly used in data centers. This includes precision cooling units, chillers, CRACs, CRAHs, and economizers. Our system can be customized for specialized cooling technologies as well."
        },
        {
          question: "How accurate are the failure predictions?",
          answer: "After the initial learning period, FailurePredictor Pro achieves 93-97% accuracy in predicting system failures 1-3 weeks before they occur. The accuracy improves over time as the system learns more about your specific equipment and operating conditions."
        },
        {
          question: "Can FailurePredictor Pro integrate with our existing maintenance systems?",
          answer: "Yes, we offer integration with most common CMMS (Computerized Maintenance Management Systems) and DCIM (Data Center Infrastructure Management) platforms. Our API also allows for custom integrations with proprietary systems."
        },
        {
          question: "What kind of data security measures are in place?",
          answer: "FailurePredictor Pro uses end-to-end encryption for all data. We are SOC 2 Type II certified and comply with GDPR, HIPAA, and other regional data protection regulations. Your operational data never leaves your control without appropriate safeguards."
        },
        {
          question: "Is there a minimum contract period?",
          answer: "Standard and Professional plans can be purchased on monthly or annual terms, with annual subscriptions receiving a 15% discount. Enterprise plans typically have a minimum 12-month commitment due to the customization involved."
        }
      ]}
    />
  );
};

export default FailurePredictorPro;
