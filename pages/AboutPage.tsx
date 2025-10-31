import React from 'react';
import useMetaTags from '../hooks/useMetaTags';

const AboutPage: React.FC = () => {
  useMetaTags(
    'About Us',
    'Learn about the history, mission, and values of K&S Landscaping. Meet the team dedicated to providing quality craftsmanship and reliable service in Mississauga.'
    );

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">About K&S Landscaping</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in creating and maintaining beautiful, functional outdoor and indoor spaces.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Company History Section */}
          <section aria-labelledby="history-heading">
            <h2 id="history-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Our History</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2024 by childhood friends Kyle and Sam, K&S Landscaping started with a single lawnmower and a shared passion for transforming outdoor spaces. What began as a neighborhood lawn care service quickly grew through word-of-mouth, thanks to our commitment to quality work and reliable service. Over the years, we have expanded our expertise beyond landscaping to include complex hardscape construction, skilled labor for construction projects, and essential home services like basement waterproofing. Today, we are proud to be a full-service property maintenance company serving the greater Maplewood community.
            </p>
          </section>

          {/* Our Mission Section */}
          <section aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver exceptional craftsmanship and unparalleled customer service in every project we undertake. We strive to build lasting relationships with our clients by understanding their needs, exceeding their expectations, and transforming their properties with care and professionalism. We are dedicated to enhancing the beauty, value, and safety of your home and business.
            </p>
          </section>

          {/* Our Values Section */}
          <section aria-labelledby="values-heading">
            <h2 id="values-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Our Values</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Quality & Craftsmanship:</strong> We take pride in our work and are committed to the highest standards of quality in every detail, from a perfectly manicured lawn to a flawlessly sealed foundation.</span>
              </li>
              <li className="flex items-start">
                <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Reliability & Integrity:</strong> We show up on time, do what we say we're going to do, and communicate openly and honestly with our clients. Your trust is our most valued asset.</span>
              </li>
              <li className="flex items-start">
                <svg aria-hidden="true" className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Customer Focus:</strong> We listen to our clients and work collaboratively to bring their vision to life. Your complete satisfaction is the ultimate measure of our success.</span>
              </li>
            </ul>
          </section>

          {/* Our Commitment Section */}
          <section aria-labelledby="commitment-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-accent p-8 rounded-lg">
            <div className="order-2 md:order-1">
              <h2 id="commitment-heading" className="text-3xl font-bold text-primary mb-4 border-b-2 border-secondary pb-2">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed">
                We're not just a business; we're your neighbours. We are deeply committed to serving the Mississauga community with integrity and dedication. Whether it's a small yard clean-up or a major construction project, we bring the same level of professionalism and care. Call us today and experience the K&S difference.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEiMyLK1_tjo6uixUOAVkSY69MjZxkTaFm2kSY9CkErmKOg_B_r9VK1Na_hO8e0cBJXH-0npoMUc7qiY7U9HHjpJEeZoMhPpnugmlCIZvKrWv5UNXIRsn1yY3NqLs1KgBtyroUnV1vAh7GWsIcW0HBdtRqOnfgDiJXD-yXLXnpOopsQQ1eqlyoTn2PPOu10=w640-h640-rw" 
                alt="Promotional flyer for K&S Landscaping featuring their logo, contact information, and services."
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* Mascot Section */}
          <section aria-labelledby="mascot-heading" className="text-center">
            <h2 id="mascot-heading" className="text-3xl font-bold text-primary mb-4">Meet the Team Mascot</h2>
            <div className="flex flex-col items-center">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgCqK9n00IjmNH6r4roATYCDfiMgBIk22vAA-dTHgHNzhbCBZP6gMFYfwaDkNde2Al2rd7fzqQPRBK7PprR08NAwtfqdPdyIBf9Js5O2geMua6imaZdZrosC5bGeJzz1kToG-ZQVS-cGGcEb8X0LU3IN8FQrwVBqFO2muR5dkODmX80m0dwOLt4jamRTPc=w480-h640-rw" 
                alt="McKyle the cat, K&S Landscaping mascot, a fluffy grey and white cat looking at the camera."
                className="rounded-full shadow-xl w-48 h-48 object-cover mb-4 border-4 border-secondary"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-primary">McKyle</h3>
              <p className="text-gray-700 leading-relaxed max-w-md mx-auto mt-2">
                Every great team needs a great supervisor. McKyle keeps a close eye on all our projects, ensuring quality control and providing moral support. He's a vital part of the K&S family!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;