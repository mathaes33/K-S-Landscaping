import React, { useState, useEffect } from 'react';
import { FAQ_DATA } from '../constants';
import FAQAccordion from '../components/FAQAccordion';
import type { FAQItem } from '../types';
import useMetaTags from '../hooks/useMetaTags';

const FAQPage: React.FC = () => {
  useMetaTags(
    'Frequently Asked Questions',
    'Find answers to frequently asked questions about our landscaping, hardscaping, and property maintenance services. Get information on pricing, process, and more.'
    );
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(FAQ_DATA);

  useEffect(() => {
    const results = FAQ_DATA.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFAQs(results);
  }, [searchTerm]);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our services.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <input
              type="text"
              id="faq-search"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search through frequently asked questions"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <FAQAccordion key={index} item={item} />
              ))
            ) : (
              <p className="text-center p-8 text-gray-500">No questions found matching your search.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;