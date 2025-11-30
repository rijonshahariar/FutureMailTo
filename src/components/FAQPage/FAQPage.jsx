import React from 'react';
import FAQ from '../FAQ/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="relative pt-32">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
