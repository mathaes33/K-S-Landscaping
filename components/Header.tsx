import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-secondary-light';
  const inactiveLinkClass = 'hover:text-secondary-light transition-colors';
  const focusRingClass = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:ring-secondary';


  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjiguhZj-Kg0FhUY3AjmQ8HCCk5cwNzyXqTQr_huPx0VKmjcT-bdcyU7dkmbC1uCNDqk9dq-7gesd4h4rQt_YSTruIrbYoTteNQ1pPt-AhuEsYCcVrQhljHCOHw_35oxtuwWwY4WCFJ3BAUK9V11kSfYRmgQs9G_KzBmefxA7qUjKd1nY-92WMoteihTAw=w640-h640-rw" alt="K&S Landscaping Logo" className="h-14 w-auto" />
          <span className="text-white text-xl sm:text-2xl font-bold ml-3">Kyle & Sam's</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-white font-medium rounded-md py-1 px-2 ${focusRingClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              {link.name}
            </NavLink>
          ))}
           <Button to="/contact" size="sm">
            Get a Free Quote
          </Button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-white rounded-md p-1 ${focusRingClass}`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark">
          <nav className="px-6 pt-2 pb-4 flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `text-white font-medium block py-1 rounded-md px-2 ${focusRingClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button 
                to="/contact" 
                size="sm"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;