import React from 'react';
import LeadCaptureForm from '../components/LeadCaptureForm';
import useMetaTags from '../hooks/useMetaTags';
import { PHONE_NUMBER, PHONE_NUMBER_HREF, EMAIL_ADDRESS, EMAIL_HREF, COMPANY_ADDRESS_LINE_1, COMPANY_ADDRESS_LINE_2 } from '../constants';
import ParticleBackground from '../components/ParticleBackground';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  useMetaTags(
    'Contact Us',
    'Contact K&S Landscaping for a free, no-obligation quote. Reach out via phone, email, or our online form to discuss your project today.'
    );

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('lead-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden pb-24 md:pb-0">
      <ParticleBackground />
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and start planning your next project. Reach out to us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Our Office</h3>
              <p className="text-gray-700">{COMPANY_ADDRESS_LINE_1}<br/>{COMPANY_ADDRESS_LINE_2}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Email Us</h3>
              <a href={EMAIL_HREF} className="text-secondary hover:underline">{EMAIL_ADDRESS}</a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Call Us</h3>
              <a href={PHONE_NUMBER_HREF} className="text-secondary hover:underline">{PHONE_NUMBER}</a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Business Hours</h3>
              <p className="text-gray-700">Monday - Friday: 8am - 5pm<br/>Saturday: 9am - 1pm<br/>Sunday: Closed</p>
            </div>
          </div>
          
          <div id="lead-form-section">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
      
      {/* Sticky CTA Footer for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary-dark p-4 shadow-lg z-20 md:hidden border-t border-secondary">
        <div className="container mx-auto flex justify-around items-center gap-4">
          <Button 
            href="#lead-form-section"
            onClick={handleScrollToForm}
            size="sm"
            className="flex-1"
          >
            Get a Quote
          </Button>
          <Button
            href={PHONE_NUMBER_HREF}
            variant="outline-secondary"
            size="sm"
            className="flex-1"
          >
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;