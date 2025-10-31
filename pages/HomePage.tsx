import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TESTIMONIALS, SERVICES_DATA, PHONE_NUMBER_HREF } from '../constants';
import TestimonialCard from '../components/TestimonialCard';
import LeadCaptureForm from '../components/LeadCaptureForm';
import useMetaTags from '../hooks/useMetaTags';
import LazyBackground from '../components/LazyBackground';
import ParticleBackground from '../components/ParticleBackground';
import Button from '../components/Button';

const CREW_IMAGES = [
  { src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjaZidpOc8IoNgHwQ46aYW_7SqvqmB0I5ZHFKzQ8P_mye_L3uEa8v2b2RxuJo3C7r-gXX-K-mfb-75LII6p51VCq4fnWsn53QHvLDJJJPJ91iELS5P1VY-oPgPL8Sx80UKuh3Z8bjJqcRJqLWVGnK_lZwQaMUw6eIwEVs8OMA4nRQ5Imq9jGsuzyFVkPK8=w480-h640-rw', alt: 'K&S Landscaping crew member in safety gear working on a construction site.' },
  { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj3Jf4tw-e6erfdDhb48IrJ48Yvak1Pcgs1Ylp3ZMrGdlODu6Bx1iOhv-J4M7uZDhzEhA46wzXhnBBJsWmmQvekDwWKvpus-ZQimt0Cr60wvrD4PVgS-l0qlBlW0MV8dA87esnWx7jSQRdOV55lXymdg2q3_asy8vVEh4yGOhxJr06RdBUjTFpjuQ5qkw/w480-h640-rw/WhatsApp%20Image%202025-10-18%20at%2017.05.22_801b0209.jpg', alt: 'Two smiling K&S Landscaping team members posing at a job site.' },
  { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXwUh_RTD1c5JkR8Y-RZtaZrd_u89-xUKUTs0S37v2fEQnUOnTv3TV5YeYtengDsPrm83_GO-rwlEeyrNa6nDD77VAgXUy0ydHTAJSye4RWxIJAlA-mU7VlBRvSosaMGimlycGM9a4F8NhbRVF4Lb_Ap5sIwBWfL-Ad0o05FRnDqXNQAjzvzCU1YPZVJk/w480-h640-rw/WhatsApp%20Image%202025-10-18%20at%2017.05.22_123b27f1.jpg', alt: 'A skilled K&S operator managing heavy equipment during a project.' },
  { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpk_-_GfXyy4XU4d2j9DYJOO3s54I_PDGxMKKkAHggn_NGPLsuYkDCt-e-UOnucLkuAEioN3lCZ2dz11mWruuj99HkFn4jEKPpLNJ9vUM1lKmwcNvZWJ7wNyUVDpPbmh-fvdV_3UpS36XX2p0QDSUgDBGEmwEuDPMG21dJB8zvZqfMe6OVey2fbdqe_zU/w480-h640-rw/WhatsApp%20Image%202025-10-18%20at%2017.05.22_8fc1877d.jpg', alt: 'A dedicated K&S crew member preparing the ground for a new hardscape installation.' },
  { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKXW41BpsQAxprKT7KchhoEcnQs9UiUa9Fu-r3bNBKrGUIo23-PAKYbpBQKu4U_nfwofY-BDO3oNNgQwMdrOFeH2gWkLjyXdrdtA5B2zohIUFkrvYg1vdLgiW0kLNCI2jwJs_EuaA7fhmlOgwCQkHNNx6UvgtAhjRSeMyUG_WensfEBOwdzu__ZfecUQ0/w480-h640-rw/WhatsApp%20Image%202025-10-18%20at%2017.05.22_8d13c8e8.jpg', alt: 'A K&S team member transporting materials in a wheelbarrow at a landscaping project.' }
];

const HomePage: React.FC = () => {
  useMetaTags(
    'Home',
    'Top-rated landscaping, hardscape construction, and basement waterproofing in Mississauga, ON. K&S Landscaping offers reliable maintenance, custom garden design, and skilled labor. Get your free quote today.'
  );

  const navigate = useNavigate();
  const [animatingSlug, setAnimatingSlug] = useState<string | null>(null);

  const handleServiceCardClick = (event: React.MouseEvent, slug: string) => {
    event.preventDefault();
    setAnimatingSlug(slug);
    setTimeout(() => {
      navigate(`/services/${slug}`);
      setAnimatingSlug(null);
    }, 400);
  };

  const focusRingClass = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary';

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <LazyBackground
        as="section"
        imageUrl="https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?auto=format&fit=crop&q=80&w=1920"
        className="relative bg-cover bg-center text-white py-40 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <ParticleBackground />
        <div className="relative container mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '200ms' }}
          >
            Kyle and Sams Landscaping
            <span className="block text-3xl md:text-4xl font-semibold mt-2 text-gray-200">
              Demolition, and Waterproofing
            </span>
          </h1>
          <div 
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" size="md" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>
              <Button 
                href={PHONE_NUMBER_HREF}
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                leftIcon={
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.273 6.273l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
              >
                Or Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </LazyBackground>

      {/* Services Section */}
      <section aria-labelledby="core-services-heading" className="container mx-auto px-6 text-center">
        <h2 id="core-services-heading" className="text-4xl font-bold text-primary mb-4">Our Core Services</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">From weekly maintenance to complete landscape transformations, we offer a full range of professional services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              onClick={(e) => handleServiceCardClick(e, service.slug)}
              className={`relative bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden group transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 flex flex-col ${focusRingClass} ${
                animatingSlug === service.slug ? 'card-is-clicking' : ''
              }`}
            >
              {service.preferred && <div className="preferred-badge" aria-hidden="true">Most Popular</div>}
              <img 
                src={service.imageUrl} 
                alt={service.altText}
                className="w-full h-56 object-cover" 
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
                <span 
                  className="font-semibold text-secondary mt-auto self-start animated-link"
                >
                  Learn More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Button to="/services" variant="primary" size="md">
          View All Services
        </Button>
      </section>

      {/* Crew Gallery Section */}
      <section aria-labelledby="crew-gallery-heading" className="container mx-auto px-6 text-center">
        <h2 id="crew-gallery-heading" className="text-4xl font-bold text-primary mb-4">Our Crew in Action</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the dedicated team that brings your landscape visions to life. We're proud of our work and the professionals who make it happen.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CREW_IMAGES.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover aspect-[3/4] transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <LazyBackground
        as="section"
        aria-labelledby="testimonials-heading"
        imageUrl="https://plus.unsplash.com/premium_photo-1661412696440-044ac49f9cf4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbmRjYXBpbmclMjBkZW1vJTIwYW5kJTIwd2F0ZXJwcm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
        className="relative bg-cover bg-center py-20"
      >
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 id="testimonials-heading" className="text-4xl font-bold text-white mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </LazyBackground>

      {/* Lead Capture Section */}
      <LazyBackground
        as="section"
        aria-label="Free Quote Form"
        imageUrl="https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1920"
        className="relative bg-cover bg-center py-20 px-6"
      >
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <ParticleBackground />
        <div className="relative container mx-auto flex justify-center">
          <LeadCaptureForm />
        </div>
      </LazyBackground>
    </div>
  );
};

export default HomePage;