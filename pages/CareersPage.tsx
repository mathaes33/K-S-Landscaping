

import React from 'react';
import useMetaTags from '../hooks/useMetaTags';
import LazyBackground from '../components/LazyBackground';
import ApplicationForm from '../components/ApplicationForm';

const CareersPage: React.FC = () => {
  useMetaTags(
    'Careers',
    'Join the K&S Landscaping team! Explore career opportunities for landscapers, hardscape specialists, and construction laborers in Mississauga. Apply online today.'
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <LazyBackground
        as="section"
        imageUrl="https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc4fHxsYW5kY2FwaW5nJTIwZGVtbyUyMGFuZCUyMHdhdGVycHJvb2Zpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        className="relative bg-cover bg-center text-white py-32 px-6"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            We're looking for passionate, hardworking individuals to grow with us.
          </p>
        </div>
      </LazyBackground>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-12">
            <section aria-labelledby="why-work-heading">
              <h2 id="why-work-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Why Work at K&S Landscaping?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At K&S Landscaping, you're not just an employee; you're part of a family. We value teamwork, dedication, and a passion for creating beautiful environments. We offer competitive pay, opportunities for growth, and a positive work atmosphere where your skills are valued and developed.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Competitive Wages:</strong> We offer attractive pay rates based on experience and performance.</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Career Growth:</strong> We believe in promoting from within and provide training for advancement.</span>
                </li>
                 <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Supportive Team Environment:</strong> Work with a crew that respects and supports one another.</span>
                </li>
              </ul>
            </section>
            
            <section aria-labelledby="qualifications-heading">
              <h2 id="qualifications-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Ideal Candidate Qualifications</h2>
               <ul className="space-y-3 text-gray-700">
                 <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>A strong work ethic and positive attitude.</span>
                </li>
                 <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Experience in landscaping, construction, or a related field is a plus, but not required for all positions.</span>
                </li>
                 <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Ability to perform physically demanding work in various weather conditions.</span>
                </li>
                 <li className="flex items-start">
                  <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Reliable transportation and a valid driver's license are preferred.</span>
                </li>
               </ul>
            </section>
          </div>
          
          <div>
            <ApplicationForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CareersPage;