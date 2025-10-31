import React, { useState, useId } from 'react';
import type { FAQItem } from '../types';

interface FAQAccordionProps {
  item: FAQItem;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 transition-colors focus:outline-none focus-visible:bg-gray-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-semibold text-lg text-primary">{item.question}</span>
        <svg
          aria-hidden="true"
          className={`w-6 h-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={panelId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 bg-gray-50 text-gray-700">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;