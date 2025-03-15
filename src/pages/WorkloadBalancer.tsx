
import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { BarChart3, CpuIcon, Activity, Clock, Gauge, Network, LineChart, BarChart } from 'lucide-react';

const WorkloadBalancer = () => {
  return (
    <ProductDetail
      id="eo-003"
      name="WorkloadBalancer"
      description="Distributes computing tasks for optimal energy efficiency without compromising performance. Ideal for variable workloads."
      category="Energy Optimization"
      rating={4.8}
      reviews={97}
      image="https://images.unsplash.com/photo-1529310399831-ed472b81d589?q=80&w=2069&auto=format&fit=crop"
      tags={["Load Balancing", "Efficiency", "Resource Management", "Task Scheduling", "Power Optimization"]}
      price="Free"
      features={[
        {
          icon: <BarChart3 className="w-10 h-10 text-primary" />,
          title: "Intelligent Workload Distribution",
          description: "Automatically distributes computing tasks across your infrastructure based on energy efficiency and performance requirements."
        },
        {
          icon: <CpuIcon className="w-10 h-10 text-primary" />,
          title: "Server Consolidation",
          description: "Identifies opportunities to consolidate workloads onto fewer physical servers during periods of low demand, allowing others to enter power-saving modes."
        },
        {
          icon: <Activity className="w-10 h-10 text-primary" />,
          title: "Performance Preservation",
          description: "Ensures critical applications maintain required performance levels while optimizing non-critical workloads for energy efficiency."
        },
        {
          icon: <Clock className="w-10 h-10 text-primary" />,
          title: "Scheduled Optimization",
          description: "Creates time-based optimization strategies for predictable workload patterns, automatically adjusting resource allocation based on business schedules."
        },
        {
          icon: <Gauge className="w-10 h-10 text-primary" />,
          title: "Real-time Adaptation",
          description: "Continuously monitors system performance and adjusts workload distribution in response to changing demands and conditions."
        },
        {
          icon: <Network className="w-10 h-10 text-primary" />,
          title: "Multi-site Load Balancing",
          description: "Extends optimization across multiple data centers or cloud environments, routing workloads to the most efficient location based on various factors."
        }
      ]}
      pricingPlans={[
        {
          title: "Free",
          description: "Basic optimization for small deployments",
          price: "$0",
          features: [
            "Up to 10 physical servers",
            "Basic workload distribution",
            "Standard scheduling",
            "Performance monitoring",
            "Email notifications",
            "Community support"
          ],
          cta: "Get Started",
          highlight: false
        },
        {
          title: "Professional",
          description: "Advanced optimization for medium operations",
          price: "$249",
          features: [
            "Up to 50 physical servers",
            "Advanced workload distribution",
            "Detailed scheduling options",
            "Multi-site capabilities",
            "Advanced reporting",
            "Priority support"
          ],
          cta: "Start Free Trial",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "Complete solution for large deployments",
          price: "$699",
          features: [
            "Unlimited servers",
            "Custom optimization strategies",
            "Cross-cloud capabilities",
            "API access",
            "Integration with other systems",
            "Dedicated support team"
          ],
          cta: "Contact Sales",
          highlight: false
        }
      ]}
      testimonials={[
        {
          quote: "WorkloadBalancer reduced our server power consumption by 34% while maintaining all our performance requirements. We've now deployed it across all our data centers.",
          author: "Daniel Morgan",
          title: "CIO, FinTech Solutions",
          image: "https://randomuser.me/api/portraits/men/27.jpg"
        },
        {
          quote: "We started with the free version and were amazed by the results. The professional tier's multi-site capabilities have allowed us to optimize across our entire global infrastructure.",
          author: "Elena Rodriguez",
          title: "Global IT Director, RetailCorp",
          image: "https://randomuser.me/api/portraits/women/39.jpg"
        },
        {
          quote: "The scheduled optimization feature aligns perfectly with our business hours. Systems scale up during the day and consolidate at night, all automatically managed for maximum efficiency.",
          author: "Jason Kim",
          title: "Systems Architect, BusinessSoft",
          image: "https://randomuser.me/api/portraits/men/43.jpg"
        },
        {
          quote: "As a cloud service provider, we've implemented WorkloadBalancer to optimize resource utilization across our infrastructure. It's significantly improved our margins without impacting customer SLAs.",
          author: "Samantha Chen",
          title: "Operations Director, CloudExcel",
          image: "https://randomuser.me/api/portraits/women/52.jpg"
        },
        {
          quote: "The real-time adaptation to changing workloads is impressive. Even with our highly variable processing needs, WorkloadBalancer keeps everything running efficiently.",
          author: "Robert Wallace",
          title: "DevOps Lead, AnalyticsPro",
          image: "https://randomuser.me/api/portraits/men/35.jpg"
        },
        {
          quote: "Implementation was straightforward and non-disruptive. Within a week, we were seeing significant energy savings with no negative impact on application performance.",
          author: "Michelle Garcia",
          title: "Sustainability Manager, EcoTech",
          image: "https://randomuser.me/api/portraits/women/63.jpg"
        }
      ]}
      faqs={[
        {
          question: "How does WorkloadBalancer decide where to place workloads?",
          answer: "WorkloadBalancer uses a sophisticated decision engine that considers multiple factors including server efficiency (performance per watt), current utilization levels, thermal conditions, workload priority, performance requirements, and even electricity costs. The algorithm continuously evaluates these factors to make optimal placement decisions that balance energy efficiency with performance needs."
        },
        {
          question: "Will implementing WorkloadBalancer affect our application performance?",
          answer: "WorkloadBalancer is designed to maintain or improve application performance while reducing energy consumption. You define performance requirements for each application or workload, and the system ensures these are met. Critical applications always receive priority, with energy optimization applied only where it won't impact required performance levels."
        },
        {
          question: "Does WorkloadBalancer work with containerized environments?",
          answer: "Yes, WorkloadBalancer supports container orchestration platforms including Kubernetes, Docker Swarm, and OpenShift. The system can influence container placement decisions to optimize for energy efficiency while respecting existing constraints and affinities defined in your container configuration."
        },
        {
          question: "What virtualization platforms are supported?",
          answer: "WorkloadBalancer supports all major virtualization platforms including VMware vSphere, Microsoft Hyper-V, Citrix Hypervisor, KVM, and Proxmox. It integrates with their respective APIs to influence VM placement and consolidation while respecting any defined rules and requirements."
        },
        {
          question: "Can WorkloadBalancer integrate with our existing automation and orchestration tools?",
          answer: "Yes, WorkloadBalancer provides APIs and webhooks that allow integration with most common automation and orchestration platforms. We also offer pre-built integrations for popular tools like Ansible, Terraform, Chef, and Puppet. This allows WorkloadBalancer to become part of your existing automation workflows."
        },
        {
          question: "Is the free version limited in features or just scale?",
          answer: "The free version includes all core workload balancing and optimization features without artificial limitations. The primary constraint is the number of physical servers it can manage (10). This makes it ideal for small businesses or for larger organizations to evaluate the solution before scaling up to the paid tiers."
        }
      ]}
    />
  );
};

export default WorkloadBalancer;
