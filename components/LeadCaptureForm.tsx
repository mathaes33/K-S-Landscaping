import React, { useState } from 'react';
import { useFormValidator } from '../hooks/useFormValidator';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const LeadCaptureForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const { formData, errors, handleChange, validate, resetForm } = useFormValidator<FormData>(
    {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    },
    {
      name: (value) => !value.trim() ? 'Full Name is required.' : undefined,
      email: (value) => {
        if (!value.trim()) return 'Email Address is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address.';
        return undefined;
      },
      address: (value) => !value.trim() ? 'Property Address is required.' : undefined,
      message: (value) => !value.trim() ? 'Please tell us how we can help.' : undefined,
      phone: (value) => {
        if (value && !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value)) {
          return 'Please enter a valid phone number.';
        }
        return undefined;
      },
    }
  );

  const encode = (data: { [key: string]: any }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
      .then(() => {
        setSubmitStatus('success');
        resetForm();
      })
      .catch(error => {
        setSubmitStatus('error');
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
      <h3 className="text-2xl font-bold text-primary mb-2 text-center">Get a Free Quote</h3>
      <p className="text-center text-gray-600 mb-6">Fill out the form below for a no-obligation project analysis and quote.</p>
      
      {submitStatus === 'success' && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6" role="alert" aria-live="polite">
          <p className="font-bold">Success!</p>
          <p>Your message has been sent. We'll be in touch with you shortly.</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6" role="alert" aria-live="polite">
          <p className="font-bold">Submission Failed</p>
          <p>Oops! Something went wrong while sending your message. Please try again later or contact us directly.</p>
        </div>
      )}

      <form 
        name="contact" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field" 
        onSubmit={handleSubmit} 
        noValidate
        aria-busy={isSubmitting}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="sr-only">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <div className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
            required
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />
          <Input
            label="Property Address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            autoComplete="street-address"
            required
          />
          <Textarea
            label="How can we help?"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            required
          />
          <div>
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Request My Quote'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeadCaptureForm;