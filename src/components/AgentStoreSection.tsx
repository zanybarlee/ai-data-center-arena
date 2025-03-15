
import CategorySection from '@/components/CategorySection';
import { designBuildAgents, predictiveMaintenanceAgents, energyOptimizationAgents, securityAgents } from '@/data/agentData';

const AgentStoreSection = () => {
  return (
    <div id="agent-store" className="bg-gradient-to-b from-background to-secondary py-10">
      <CategorySection 
        title="AI Data Center Design & Build Agents"
        subtitle="Intelligent agents that assist in planning, designing, and optimizing data center layouts for maximum efficiency, scalability, and reliability."
        agents={designBuildAgents}
        className="py-24"
        showAkiraButton={true}
      />
      
      <CategorySection 
        title="Predictive Maintenance Agents"
        subtitle="AI-powered solutions that predict potential failures before they happen, ensuring uninterrupted data center operations."
        agents={predictiveMaintenanceAgents}
        className="py-24 bg-background"
      />
      
      <CategorySection 
        title="Energy Optimization Agents"
        subtitle="Smart agents that dynamically adjust power and cooling resources to minimize energy consumption while maintaining performance."
        agents={energyOptimizationAgents}
        className="py-24"
      />
      
      <CategorySection 
        title="Security & Compliance Agents"
        subtitle="Advanced security protocols and regulatory compliance monitoring to protect your data center from threats and ensure legal compliance."
        agents={securityAgents}
        className="py-24 bg-background"
      />
    </div>
  );
};

export default AgentStoreSection;
