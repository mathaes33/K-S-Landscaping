import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import useMetaTags from '../hooks/useMetaTags';
import LazyBackground from '../components/LazyBackground';

const ServicesPage: React.FC = () => {
  useMetaTags(
    'Our Services',
    'Explore our full range of professional services, including landscape maintenance, garden design, hardscape construction, basement waterproofing, and skilled demolition labor in Mississauga.',
    'landscaping services, hardscaping services, construction labor, basement waterproofing services, garden design, lawn care, Mississauga'
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

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Professional Services</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          From landscape design to construction labour, we provide a comprehensive range of services to meet all your property needs. Our team is dedicated to delivering quality and reliability in every project.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            onClick={(e) => handleServiceCardClick(e, service.slug)}
            className={`relative rounded-lg shadow-lg hover:shadow-xl overflow-hidden group transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 bg-white flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary animate-staggered-fade-in-up ${
              animatingSlug === service.slug ? 'card-is-clicking' : ''
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {service.preferred && <div className="preferred-badge" aria-hidden="true">Most Popular</div>}
            <LazyBackground
              imageUrl={service.imageUrl}
              className="h-56 bg-cover bg-center"
              role="img"
              aria-label={service.altText}
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <service.icon />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2 flex-grow">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <span
                className="font-semibold text-secondary self-start mt-auto animated-link"
              >
                Learn More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;