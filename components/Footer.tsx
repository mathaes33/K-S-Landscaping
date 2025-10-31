import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, PHONE_NUMBER, EMAIL_ADDRESS, COMPANY_ADDRESS_SHORT } from '../constants';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjiguhZj-Kg0FhUY3AjmQ8HCCk5cwNzyXqTQr_huPx0VKmjcT-bdcyU7dkmbC1uCNDqk9dq-7gesd4h4rQt_YSTruIrbYoTteNQ1pPt-AhuEsYCcVrQhljHCOHw_35oxtuwWwY4WCFJ3BAUK9V11kSfYRmgQs9G_KzBmefxA7qUjKd1nY-92WMoteihTAw=w640-h640-rw" alt="K&S Landscaping Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-300">Creating beautiful outdoor spaces since 2024.</p>
            <div className="mt-6">
              <Button to="/contact" size="md">
                Get a Free Quote
              </Button>
            </div>
            <div className="mt-6 flex space-x-4">
               {/* Replace with your actual social links */}
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-secondary-light transition-all duration-200 transform hover:scale-110 active:scale-95 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:ring-secondary"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg></a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-secondary-light transition-all duration-200 transform hover:scale-110 active:scale-95 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:ring-secondary"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-300 hover:text-secondary-light transition-colors rounded-md py-1 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:ring-secondary">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{PHONE_NUMBER}</li>
              <li>{EMAIL_ADDRESS}</li>
              <li>{COMPANY_ADDRESS_SHORT}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 sm:mt-12">
          <p>&copy; {new Date().getFullYear()} Kyle and Sam's Landscaping. All Rights Reserved.</p>
          <p className="mt-2 text-sm text-gray-500">
            Built By <a href="https://solidwebcreations.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">Solid Web Creations.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;