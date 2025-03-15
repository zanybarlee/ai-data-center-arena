
import React from 'react';

const processSteps = [
  {
    step: 1,
    title: "Define Requirements",
    description: "Clearly articulate the problems your agent needs to solve and the specific metrics for success."
  },
  {
    step: 2,
    title: "Design Architecture",
    description: "Design your agent's logic flow, decision points, and integration requirements using our visual editor."
  },
  {
    step: 3,
    title: "Build & Configure",
    description: "Assemble your agent using pre-built components and custom code, configuring it for your environment."
  },
  {
    step: 4,
    title: "Test & Validate",
    description: "Test your agent in our sandbox environment with simulated scenarios and real data."
  },
  {
    step: 5,
    title: "Deploy & Monitor",
    description: "Deploy your certified agent to production and monitor its performance through our dashboard."
  }
];

const DevelopmentProcess = () => {
  return (
    <div className="prose prose-lg max-w-none mb-16">
      <h2>Development Process</h2>
      <p>
        Our structured development process guides you from concept to deployment, ensuring your custom agents
        meet the highest standards for performance, security, and reliability.
      </p>
      
      <div className="my-12 not-prose">
        <div className="relative">
          <div className="absolute h-full w-0.5 bg-primary/30 left-6 md:left-9 ml-[0.3rem] top-0"></div>
          
          {processSteps.map((item, index) => (
            <div key={index} className="relative z-10 mb-8 flex items-start gap-5 md:gap-8">
              <div className="flex-shrink-0 h-7 w-7 md:h-10 md:w-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
