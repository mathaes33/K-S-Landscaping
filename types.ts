import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  slug: string;
  preferred?: boolean;
  details: {
    longDescription: string;
    gallery: string[];
    keyFeatures: string[];
    process?: {
      step: number;
      title: string;
      description: string;
    }[];
  };
  meta: {
    description: string;
    keywords: string;
  };
}