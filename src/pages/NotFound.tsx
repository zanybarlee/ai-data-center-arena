
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-lg w-full text-center">
          <div className="relative mx-auto mb-8 w-40 h-40">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-bold text-primary">404</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-lg text-foreground/70 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/" 
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-white font-medium text-base flex items-center justify-center transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Return to Home
            </a>
            
            <button 
              onClick={() => window.history.back()} 
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-input text-foreground font-medium text-base flex items-center justify-center transition-all hover:bg-secondary hover:shadow-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
