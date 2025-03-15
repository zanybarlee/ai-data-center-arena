
import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { Thermometer, Cloud, Droplets, Gauge, BarChart, LineChart, Clock, Wind } from 'lucide-react';

const CoolingSmart = () => {
  return (
    <ProductDetail
      id="eo-002"
      name="CoolingSmart AI"
      description="Intelligent cooling system management that uses weather forecasts and workload predictions to optimize energy use."
      category="Energy Optimization"
      rating={4.6}
      reviews={75}
      image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
      tags={["HVAC", "Energy Efficiency", "Smart Cooling", "Temperature Control", "Climate Optimization"]}
      price="$179/mo"
      features={[
        {
          icon: <Thermometer className="w-10 h-10 text-primary" />,
          title: "Precision Temperature Control",
          description: "Maintains optimal temperature throughout your data center with intelligent zoning and airflow management."
        },
        {
          icon: <Cloud className="w-10 h-10 text-primary" />,
          title: "Weather-Adaptive Cooling",
          description: "Integrates real-time weather data and forecasts to optimize cooling strategies based on external conditions."
        },
        {
          icon: <Droplets className="w-10 h-10 text-primary" />,
          title: "Humidity Optimization",
          description: "Precisely controls humidity levels to prevent both condensation and static electricity issues while minimizing energy use."
        },
        {
          icon: <Gauge className="w-10 h-10 text-primary" />,
          title: "Equipment Health Monitoring",
          description: "Continuously monitors cooling equipment performance to detect degradation and prevent failures."
        },
        {
          icon: <BarChart className="w-10 h-10 text-primary" />,
          title: "Energy Efficiency Analytics",
          description: "Comprehensive reporting on cooling efficiency metrics including PUE, WUE, and energy costs with actionable insights."
        },
        {
          icon: <Wind className="w-10 h-10 text-primary" />,
          title: "Airflow Optimization",
          description: "Advanced airflow modeling and management to eliminate hotspots and cold spots while reducing fan energy consumption."
        }
      ]}
      pricingPlans={[
        {
          title: "Basic",
          description: "Smart cooling for small data centers",
          price: "$179",
          features: [
            "Up to 5,000 sq ft coverage",
            "Basic temperature zoning",
            "Standard weather integration",
            "Equipment monitoring",
            "Monthly efficiency reports",
            "Email support"
          ],
          cta: "Start Free Trial",
          highlight: false
        },
        {
          title: "Advanced",
          description: "Comprehensive cooling optimization",
          price: "$349",
          features: [
            "Up to 20,000 sq ft coverage",
            "Advanced multi-zone control",
            "Predictive weather adaptation",
            "Humidity optimization",
            "Real-time efficiency analytics",
            "Priority support"
          ],
          cta: "Start Free Trial",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "Custom solution for large facilities",
          price: "Custom",
          features: [
            "Unlimited coverage",
            "Custom cooling strategies",
            "Complete HVAC integration",
            "CFD modeling and simulation",
            "AI-driven optimization",
            "Dedicated support team"
          ],
          cta: "Contact Sales",
          highlight: false
        }
      ]}
      testimonials={[
        {
          quote: "CoolingSmart AI reduced our cooling energy costs by 41% while improving temperature consistency throughout our facility. The ROI was just over 4 months.",
          author: "Michael Reynolds",
          title: "Facilities Manager, CloudCore",
          image: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
          quote: "The weather-adaptive cooling feature has been invaluable in our variable climate. The system anticipates weather changes and adjusts proactively instead of just reacting.",
          author: "Rebecca Zhang",
          title: "Data Center Director, TechFlow",
          image: "https://randomuser.me/api/portraits/women/54.jpg"
        },
        {
          quote: "We eliminated hotspots that had been persistent problems for years within the first month of implementing CoolingSmart AI. Our equipment now runs cooler with less energy use.",
          author: "Thomas Jackson",
          title: "IT Operations, ServerVault",
          image: "https://randomuser.me/api/portraits/men/61.jpg"
        },
        {
          quote: "The humidity optimization alone was worth the investment. We've eliminated the static electricity issues that were causing intermittent hardware problems in our dry climate.",
          author: "Maria Rodriguez",
          title: "Infrastructure Lead, DesertData",
          image: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
          quote: "CoolingSmart AI identified an inefficiency in our chiller operation that none of our staff had noticed. Fixing this one issue saved us over $40,000 annually in energy costs.",
          author: "James Wilson",
          title: "Chief Engineer, ColdStack",
          image: "https://randomuser.me/api/portraits/men/42.jpg"
        },
        {
          quote: "As a colocation provider, we've used CoolingSmart AI to optimize cooling for clients with widely varying rack densities. It's dramatically improved our ability to support high-density deployments.",
          author: "Sophia Lee",
          title: "VP of Operations, ColoEdge",
          image: "https://randomuser.me/api/portraits/women/39.jpg"
        }
      ]}
      faqs={[
        {
          question: "How does CoolingSmart AI integrate with our existing cooling systems?",
          answer: "CoolingSmart AI works with all major HVAC and cooling systems used in data centers. Integration is typically achieved through your existing Building Management System (BMS) using standard protocols like BACnet, Modbus, or SNMP. For systems without modern control interfaces, we provide controller hardware that can be installed by your HVAC contractor."
        },
        {
          question: "Does implementing CoolingSmart AI require changes to our physical infrastructure?",
          answer: "In most cases, no physical changes are required beyond the possible addition of temperature and humidity sensors to enhance monitoring precision. The system works with your existing cooling equipment and infrastructure. During the optimization process, we may recommend certain adjustments to airflow patterns, but these are typically simple changes like perforated tile placement or blanking panel installation."
        },
        {
          question: "How does the weather forecasting feature work?",
          answer: "CoolingSmart AI connects to multiple weather data services to obtain hyperlocal weather forecasts for your facility's location. It considers factors including temperature, humidity, barometric pressure, and precipitation forecasts. This data is integrated with your cooling strategy to proactively adjust settings before weather changes occur, rather than reacting after conditions have already changed."
        },
        {
          question: "Can CoolingSmart AI work with free cooling and economizer systems?",
          answer: "Absolutely! CoolingSmart AI excels at optimizing free cooling utilization. The system maximizes the use of outside air when conditions are favorable, manages smooth transitions between mechanical and free cooling modes, and can even consider weather forecasts to pre-cool spaces when free cooling will be available."
        },
        {
          question: "How does the system handle variable IT loads?",
          answer: "CoolingSmart AI continuously monitors IT load patterns across your facility and adjusts cooling resources dynamically in response. The machine learning algorithms can also predict typical load patterns based on historical data (such as business hours, batch processing schedules, etc.) and proactively adjust cooling capacity to match anticipated needs."
        },
        {
          question: "What kind of energy savings can we realistically expect?",
          answer: "While results vary based on your current efficiency, climate, and facility design, our customers typically see cooling energy reductions of 20-45%. Facilities with legacy cooling systems or in variable climates generally achieve the highest savings. The system provides projected ROI calculations during implementation and continuously tracks actual savings against these projections."
        }
      ]}
    />
  );
};

export default CoolingSmart;
