
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/Hero';
import AgentStoreSection from '@/components/AgentStoreSection';
import InformationSections from '@/components/InformationSections';

const Index = () => {
  return (
    <PageWrapper>
      <Hero />
      <AgentStoreSection />
      <InformationSections />
    </PageWrapper>
  );
};

export default Index;
