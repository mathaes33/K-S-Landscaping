import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <svg aria-hidden="true" className="h-10 w-10 text-secondary/50 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
      </svg>
      <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
      <div className="font-bold text-primary">{testimonial.author}</div>
      <div className="text-sm text-gray-500">{testimonial.location}</div>
    </div>
  );
};

export default TestimonialCard;