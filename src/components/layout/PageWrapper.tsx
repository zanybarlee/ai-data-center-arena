
import { ReactNode, useEffect } from 'react';
import { scrollToElement } from '@/lib/utils';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
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
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
