import React from 'react';
import { useFormValidator } from '../hooks/useFormValidator';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

interface AppFormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    resume?: File;
}

const ApplicationForm: React.FC = () => {
    const { formData, errors, handleChange, validate, setErrors } = useFormValidator<AppFormData>(
        {
            name: '',
            email: '',
            phone: '',
            position: 'Landscaper',
            experience: '',
            resume: undefined,
        },
        {
            name: (value) => !value.trim() ? 'Full Name is required.' : undefined,
            email: (value) => {
                if (!value.trim()) return 'Email Address is required.';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address.';
                return undefined;
            },
            phone: (value) => {
                if (!value.trim()) return 'Phone Number is required.';
                if (!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value)) {
                    return 'Please enter a valid phone number.';
                }
                return undefined;
            },
            position: (value) => !value.trim() ? 'Please select a position.' : undefined,
            experience: (value) => !value.trim() ? 'Please describe your experience.' : undefined,
            resume: (value) => !value ? 'Please upload your resume.' : undefined,
        }
    );
    
    const handleSubmit = (e: React.FormEvent) => {
        if (!validate()) {
            e.preventDefault();
        }
    };
    
    return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
      <h3 className="text-2xl font-bold text-primary mb-2 text-center">Apply Now</h3>
      <p className="text-center text-gray-600 mb-6">Join our team! Fill out the application below.</p>
      
      <form name="application" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" encType="multipart/form-data" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="form-name" value="application" />
        <p className="sr-only">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>

        <div className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            id="name-app"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <Input
            label="Email Address"
            name="email"
            id="email-app"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
           <Input
            label="Phone Number"
            name="phone"
            id="phone-app"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          <Select
            label="Position of Interest"
            name="position"
            id="position"
            value={formData.position}
            onChange={handleChange}
            error={errors.position}
            required
          >
            <option>Landscaper</option>
            <option>Hardscape Specialist</option>
            <option>Construction Laborer</option>
            <option>General Labor</option>
          </Select>
          <Textarea
            label="Briefly describe your relevant experience"
            name="experience"
            id="experience"
            rows={4}
            value={formData.experience}
            onChange={handleChange}
            error={errors.experience}
            required
          />
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume (PDF, DOC, DOCX) <span className="text-red-500">*</span></label>
            <input 
              type="file" 
              name="resume" 
              id="resume" 
              accept=".pdf,.doc,.docx" 
              required 
              aria-required="true" 
              onChange={handleChange} 
              aria-invalid={!!errors.resume} 
              aria-describedby={errors.resume ? 'resume-error' : undefined} 
              className={`mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-secondary hover:file:bg-secondary/20 ${errors.resume ? 'outline-red-500 outline-2 outline rounded-lg' : ''}`} 
            />
            {errors.resume && <p id="resume-error" className="mt-1 text-sm text-red-600" role="alert">{errors.resume}</p>}
          </div>
          <div>
            <Button type="submit" size="lg" className="w-full">
              Submit Application
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;