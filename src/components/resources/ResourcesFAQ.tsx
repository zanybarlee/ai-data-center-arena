
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ResourcesFAQProps {
  faqs: FAQItem[];
}

const ResourcesFAQ: React.FC<ResourcesFAQProps> = ({ faqs }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2>Frequently Asked Questions</h2>
      
      <div className="space-y-8 mt-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesFAQ;
