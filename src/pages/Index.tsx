
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import AgentStoreSection from '@/components/AgentStoreSection';
import InformationSections from '@/components/InformationSections';
import { scrollToElement } from '@/lib/utils';

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
        <AgentStoreSection />
        <InformationSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
