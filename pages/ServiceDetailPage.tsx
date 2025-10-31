import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import useMetaTags from '../hooks/useMetaTags';
import LazyBackground from '../components/LazyBackground';
import Button from '../components/Button';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find(s => s.slug === slug);
  
  useMetaTags(
    service ? service.title : 'Service Not Found',
    service ? service.meta.description : 'Sorry, we couldn\'t find the service you\'re looking for.',
    service ? service.meta.keywords : undefined
  );
  
  const [featuredImage, setFeaturedImage] = useState(service?.details.gallery?.[0]);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setFeaturedImage(service?.details.gallery?.[0]);
  }, [slug, service]);

  const relatedServices = useMemo(() => {
    if (!service) return [];
    return SERVICES_DATA.filter(s => s.slug !== service.slug).slice(0, 3);
  }, [service]);

  const handleThumbnailClick = (image: string) => {
    if (image === featuredImage) return;
    setIsFading(true);
    setTimeout(() => {
      setFeaturedImage(image);
      setIsFading(false);
    }, 300); // Duration should match the transition duration
  };

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">404 - Service Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the service you're looking for.</p>
        <Button to="/services" variant="secondary">
          View All Services
        </Button>
      </div>
    );
  }

  const hasGallery = service.details.gallery && service.details.gallery.length > 0;
  const focusRingClass = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary';


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <LazyBackground
        as="section"
        imageUrl={service.imageUrl}
        className="relative bg-cover bg-center text-white py-32 px-6"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="text-white hover:text-secondary-light">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg aria-hidden="true" className="w-3 h-3 text-gray-400 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/></svg>
                  <Link to="/services" className="text-white hover:text-secondary-light">Services</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                   <svg aria-hidden="true" className="w-3 h-3 text-gray-400 mx-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/></svg>
                  <span className="text-gray-200">{service.title}</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        </div>
      </LazyBackground>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Service Overview & Key Features */}
          <section aria-labelledby="overview-heading" className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
            <div className="md:col-span-3">
              <h2 id="overview-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Service Overview</h2>
              <p className="text-gray-700 leading-relaxed">{service.details.longDescription}</p>
            </div>
            <div className="md:col-span-2 bg-accent p-6 rounded-lg shadow-inner">
              <h3 id="key-features-heading" className="text-2xl font-bold text-primary mb-4">Key Features</h3>
              <ul className="space-y-3" aria-labelledby="key-features-heading">
                {service.details.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process Section */}
          {service.details.process && (
            <section aria-labelledby="process-heading" className="mb-20">
              <h2 id="process-heading" className="text-3xl font-bold text-primary mb-10 text-center">Our Process</h2>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div aria-hidden="true" className="absolute hidden lg:block top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                {service.details.process.map((item) => (
                  <div key={item.step} className="text-center relative bg-white px-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">{item.step}</div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Image Gallery */}
          {hasGallery && (
            <section aria-labelledby="gallery-heading" className="mb-20">
              <h2 id="gallery-heading" className="text-3xl font-bold text-primary mb-8 text-center">Project Gallery</h2>
              <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  key={featuredImage} 
                  src={featuredImage} 
                  alt={`Featured project image for ${service.title}.`}
                  className={`w-full h-auto object-cover transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {service.details.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(image)}
                    className={`overflow-hidden rounded-lg shadow-md group focus:outline-none transition-all duration-200 transform hover:scale-105 active:scale-95 ${focusRingClass} ${featuredImage === image ? 'ring-4 ring-secondary ring-offset-2' : ''}`}
                    aria-label={`View image ${index + 1} of ${service.title}`}
                  >
                    <img 
                      src={image} 
                      alt={`Project gallery image ${index + 1} for ${service.title}.`}
                      className="w-full h-24 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section aria-labelledby="related-services-heading" className="mb-20">
              <h2 id="related-services-heading" className="text-3xl font-bold text-primary mb-8 text-center">Other Services You Might Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedServices.map((relatedService) => (
                  <div key={relatedService.slug} className="rounded-lg shadow-lg hover:shadow-xl group transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 bg-white">
                    <Link to={`/services/${relatedService.slug}`} className={`block p-6 rounded-lg ${focusRingClass}`}>
                      <div className="mb-3"><relatedService.icon className="!h-10 !w-10"/></div>
                      <h4 className="text-xl font-bold text-primary mb-2">{relatedService.title}</h4>
                      <p className="text-secondary font-semibold">Learn More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span></p>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section aria-labelledby="cta-heading" className="text-center bg-accent p-10 rounded-lg shadow-inner">
            <h2 id="cta-heading" className="text-3xl font-bold text-primary mb-4">Interested in this Service?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring our expertise to your property. Contact us today for a free, no-obligation quote.
            </p>
            <Button to="/contact" size="lg">
              Get Your Free Quote
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;