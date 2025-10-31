import type { FAQItem, Testimonial, Service } from './types';
import React from 'react';

// SERVICE ICONS
const LawnIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" {...props}>
        <rect width="64" height="64" rx="8" className="fill-primary opacity-10"/>
        <path d="M32 12C20 12 20 28 32 40C44 28 44 12 32 12Z" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 40V52" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 46H40" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const GardenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" {...props}>
        <rect width="64" height="64" rx="8" className="fill-primary opacity-10"/>
        <path d="M24 40C24 33.3726 29.3726 28 36 28C42.6274 28 48 33.3726 48 40V52H24V40Z" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 28V20C36 17.7909 37.7909 16 40 16C42.2091 16 44 17.7909 44 20" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const HardscapeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" {...props}>
        <rect width="64" height="64" rx="8" className="fill-primary opacity-10"/>
        <rect x="16" y="38" width="32" height="12" rx="2" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="22" y="24" width="20" height="12" rx="2" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 24V16" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 24V16" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ConstructionIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" {...props}>
        <rect width="64" height="64" rx="8" className="fill-primary opacity-10"/>
        <path d="M48 44C48 37.3726 42.6274 32 36 32H28C21.3726 32 16 37.3726 16 44V48H48V44Z" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 32V24C28 21.7909 29.7909 20 32 20C34.2091 20 36 21.7909 36 24V32" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 48H52" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const MovingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" {...props}>
        <rect width="64" height="64" rx="8" className="fill-primary opacity-10"/>
        <path d="M14 44L24 28H44L50 44H14Z" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="48" r="4" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 28L48 20H52" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const WaterproofingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" {...props}>
        <rect width="64" height="64" rx="8" className="fill-primary opacity-10"/>
        <path d="M32 12L48 20V34C48 44 32 52 32 52C32 52 16 44 16 34V20L32 12Z" className="stroke-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 20C24 24.4183 27.5817 28 32 28C36.4183 28 40 24.4183 40 20" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How often should I have my lawn mowed?',
    answer: 'For most lawns, we recommend weekly mowing during the peak growing season (spring and summer) and bi-weekly during slower growth periods in the fall. This helps maintain a healthy and lush appearance.'
  },
  {
    question: 'Do you offer organic landscaping solutions?',
    answer: 'Yes, we are committed to environmentally friendly practices. We offer a range of organic lawn care and gardening solutions, including natural fertilizers and pest control methods. Just ask for our eco-friendly options!'
  },
  {
    question: 'What is hardscaping?',
    answer: 'Hardscaping refers to the non-living elements of your landscape design, such as patios, walkways, retaining walls, and fire pits. We specialize in creating beautiful and functional hardscapes that complement your home and garden.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Kyle and Sam\'s Landscaping is fully licensed and insured for your peace of mind. We adhere to the highest industry standards for safety and professionalism.'
  },
  {
    question: 'How does your design process work?',
    answer: 'Our process begins with a free consultation to discuss your vision and assess your property. We then create a custom design plan, provide a detailed quote, and work with you to bring your dream landscape to life.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Our backyard has been completely transformed! The team was professional, creative, and finished the project on time and on budget. We couldn't be happier.",
    author: 'Jessica M.',
    location: 'Mississauga, ON'
  },
  {
    quote: "Kyle and Sam's crew is reliable and does fantastic weekly maintenance. Our lawn has never looked better. Highly recommended for their attention to detail.",
    author: 'David R.',
    location: 'Etobicoke, ON'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    icon: LawnIcon,
    title: 'Landscape Maintenance & Seasonal Clean-Up',
    description: 'Comprehensive care to keep your property pristine year-round, from weekly mowing to full spring/fall clean-ups.',
    imageUrl: 'https://images.unsplash.com/photo-1680699231780-ed1966cb70bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    altText: "Pristine lawn with sharp edges, representing landscape maintenance services.",
    slug: 'landscape-maintenance-seasonal-cleanup',
    details: {
      longDescription: 'Our full-service landscape maintenance program is designed to keep your property healthy and immaculate throughout the year. We create a customized care plan tailored to the specific needs of your lawn and garden. This includes professional mowing, precise edging, and blowing to keep surfaces clean. We also offer advanced services like soil aeration to improve root health, targeted fertilization for lush growth, and proactive weed and pest control. Our seasonal clean-up services in spring and fall are crucial for preparing your landscape for the changing weather, ensuring it remains vibrant and resilient.',
      gallery: [
        'https://images.unsplash.com/photo-1680699231780-ed1966cb70bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
        'https://media.istockphoto.com/id/2165450733/photo/rolls-of-sod-and-instant-green-lawn.jpg?s=612x612&w=0&k=20&c=qYVCpLCYGA9qp-hyu4-pvCR2hTcPzXDWo0uqUQu_jNw=',
        'https://media.istockphoto.com/id/1493389214/photo/a-truck-loaded-with-cut-grass-ramps-for-large-mowers-made-of-aluminum-profiles-a-lawnmower-is.jpg?s=612x612&w=0&k=20&c=brnZsqHK-z6gl0Mfo_7GzlYi1kJkuVK5G6gGmax7Zrs='
      ],
      keyFeatures: ['Weekly Lawn Mowing & Edging', 'Seasonal Fertilization Programs', 'Targeted Weed & Pest Control', 'Comprehensive Spring & Fall Clean-ups', 'Aeration & Overseeding'],
      process: [
        { step: 1, title: 'Property Assessment', description: 'We begin with a thorough evaluation of your property to understand its unique needs.' },
        { step: 2, title: 'Customized Care Plan', description: 'Based on the assessment, we develop a tailored maintenance schedule and treatment plan.' },
        { step: 3, title: 'Regular, Reliable Service', description: 'Our professional crew performs scheduled services with precision and attention to detail.' },
        { step: 4, title: 'Ongoing Monitoring & Adjustments', description: 'We continually monitor your landscape’s health and adjust the care plan as needed for optimal results.' }
      ]
    },
    meta: {
      description: 'Keep your Mississauga property immaculate year-round with K&S Landscaping. Our expert maintenance includes mowing, fertilization, aeration, and full spring/fall clean-ups for a healthy, vibrant lawn.',
      keywords: 'landscape maintenance Mississauga, lawn care services, seasonal yard clean-up, lawn mowing, fertilization, aeration, weed control'
    }
  },
  {
    icon: GardenIcon,
    title: 'Garden Design & Planting',
    description: 'Bring your garden to life with custom layouts, seasonal plant selection, mulching, and ongoing care for beds, trees, and shrubs.',
    imageUrl: 'https://media.istockphoto.com/id/177391388/photo/mulching-around-the-bushes.jpg?s=612x612&w=0&k=20&c=iKfOvYRBosmiElzbM6rljqv8VJSEM1fVGbftpveIG8A=',
    altText: "Colorful flower bed with fresh mulch, showcasing garden design and planting.",
    slug: 'garden-design-planting',
    details: {
      longDescription: "Our garden design service transforms your vision into a vibrant reality. We work with you to create a custom garden plan that suits your style, space, and local climate. Our experts select a beautiful variety of annuals, perennials, shrubs, and trees to provide year-round color and interest. We handle everything from soil preparation and planting to mulching and installing garden borders, ensuring your new garden thrives from day one.",
      gallery: [
        'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
        'https://images.unsplash.com/photo-1734303023518-71e656574f50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhbmRzY2FwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
        'https://media.istockphoto.com/id/2222940236/photo/concrete-pattern-fence-with-a-freshly-planted-green-thujas-and-after-3-years-of-growing.jpg?s=612x612&w=0&k=20&c=9JCRLP7XsLdEhhMjVIuu15OVYmYsdo3hr0H_g7wROGs='
      ],
      keyFeatures: ['Custom Garden Layouts', 'Expert Plant & Tree Selection', 'Professional Planting & Transplanting', 'Mulching & Edging for Beds', 'Seasonal Color Programs (Annuals)'],
      process: [
        { step: 1, title: 'Consultation & Vision', description: 'We meet with you to discuss your ideas, preferences, and the unique characteristics of your space.' },
        { step: 2, title: 'Custom Design & Plant Selection', description: 'Our experts create a detailed design plan and select the perfect plants for your environment.' },
        { step: 3, title: 'Professional Installation', description: 'We handle all aspects of installation, from soil preparation to precise planting and mulching.' },
        { step: 4, title: 'Care Guide & Follow-Up', description: 'We provide you with a guide for care and offer follow-up services to ensure your garden flourishes.' }
      ]
    },
    meta: {
      description: 'Transform your Mississauga property with a custom garden from K&S Landscaping. We specialize in expert plant selection, professional installation, and creating stunning flower beds for year-round color.',
      keywords: 'garden design Mississauga, planting services, flower bed installation, custom landscape design, tree and shrub planting, mulching services'
    }
  },
  {
    icon: HardscapeIcon,
    title: 'Landscape & Hardscape Construction',
    description: 'Transform your outdoor living space with durable, beautiful features like patios, walkways, retaining walls, and custom stone work.',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhvQ0vlsvu_-ykJMq3XRtvDKdl5teThR638DmbKgxMHeuBscxuNXLA5XM57ea-XHGVHpRr-PUgeAQY4Ecr6-1ds2BU7D6k-1Sc4HdH8GRCarkZbqMo6_J-O1kNywdd38VoCanuAFUxXlCAeyBa5Fso9uHmY0GfJJQ4TDm-TTIKl3eRh5Z1aDhRj-a2JOVo=rw',
    altText: "Newly installed interlocking stone patio, an example of hardscape construction.",
    slug: 'landscape-hardscape-construction',
    preferred: true,
    details: {
      longDescription: "Elevate your outdoor living with our expert hardscape construction services. We design and build stunning, functional features that enhance your property's value and usability. Our team specializes in creating custom patios for entertaining, elegant walkways to guide your guests, and sturdy retaining walls to manage slopes and create terraced gardens. We work with a wide range of high-quality materials, including natural stone, pavers, and brick, to create a lasting and beautiful addition to your home.",
      gallery: [
          'https://blogger.googleusercontent.com/img/a/AVvXsEhvQ0vlsvu_-ykJMq3XRtvDKdl5teThR638DmbKgxMHeuBscxuNXLA5XM57ea-XHGVHpRr-PUgeAQY4Ecr6-1ds2BU7D6k-1Sc4HdH8GRCarkZbqMo6_J-O1kNywdd38VoCanuAFUxXlCAeyBa5Fso9uHmY0GfJJQ4TDm-TTIKl3eRh5Z1aDhRj-a2JOVo=rw',
          'https://blogger.googleusercontent.com/img/a/AVvXsEgaSYjds-6JXNbmfUqkTDYOg25aVdeFDqC-NEVBPGr0u-Oc2H6RoxM25TYWlb0rBi7iLN5w1hlwiBmReMsReL6yQjqTnCdWMDdg2-JT1mMfSyjtE_PaQaqG5OAhVhE_16V4EgKc77eyxqcH9QzBWuW6qXoInABr2YJ4eryOzMIz2ubvua-D-tsV_Pfqt7c=w483-h640-rw',
          'https://blogger.googleusercontent.com/img/a/AVvXsEihNMQKWiv3gWvEV-lwMPZ86Bs9tek74nXezSHqXMEQ7mI_J0b_fsn7Sqot3KaHcfoO6vQrEFelI-ooj8PgRo1Q1KH5kHBJTK4l2CplesyHSe6BUGBzGCNay2BXtNqcU5MZ4HBGHYBZc7NIuJ6HFpfHlPa17FMqm_c3XQJK2aesKyDbg70hg0FofWYntJM=w360-h640-rw',
          'https://blogger.googleusercontent.com/img/a/AVvXsEjjADocmvS2XUdfLfmcOGQoHYePjgbY8NoCd_iiRVcGNBcoesIha2mySyYELEyKE9gaPMNBsu958fsw2rC8mDh9umnPvXGjounmPP4_boUVUa_mbS5sNgLHY_ro3TD91WCedCZ1gONo7ARJDxMr8QRDYZnoykh0DOwFoxEES1kta0sVOEG0SvK3xUwzxh4=w480-h640-rw',
          'https://blogger.googleusercontent.com/img/a/AVvXsEjlkkYGFMeNDAGJ0rKm_K1mZGBDJtab_RqZRH8qzZ9kByf8F1t_-5ezIEQcjApTOUZVYdmi54QtJwUs4qNBHIyvClbskOdntrlmJGFBydscsf6VV-nYM537L1uaDi5m_BHt-2iRS80bqcfG2VGM1tVmxgIpygeGU2J-SBIRA1wxa5rDPXEZykm-udmF0oQ=w480-h640-rw',
          'https://blogger.googleusercontent.com/img/a/AVvXsEgwRpZ6QmNR5_sqHWWeEoIzvvfHwsdp2hul22JX0qDauuxZCYSWjXLGUmInE9U48ovlrOHvxnxKqzLwtmFy6mNVdNQu9oYG2sfUueGw3BPnrczhnvJa5xX3lwK7R4RZQUdoMmLG6B2KSuNS-q2sHaJaq68U35tcHN28lFHAUDnl260uFGAglEXyJ1oJxvU=w480-h640-rw'
      ],
      keyFeatures: ['Custom Patios & Walkways', 'Durable Retaining Walls', 'Outdoor Fire Pits & Kitchens', 'High-Quality Pavers & Natural Stone', 'Expert Drainage Solutions'],
      process: [
        { step: 1, title: 'Design & Consultation', description: 'We collaborate with you to design a hardscape that meets your functional needs and aesthetic vision.' },
        { step: 2, title: 'Site Preparation & Grading', description: 'Proper preparation is key. We ensure the site is correctly graded and compacted for longevity.' },
        { step: 3, title: 'Expert Installation', description: 'Our skilled masons and installers meticulously build your project to the highest standards.' },
        { step: 4, title: 'Final Walk-through & Approval', description: 'We walk through the finished project with you to ensure every detail meets your expectations.' }
      ]
    },
    meta: {
      description: 'Build your dream outdoor living space in Mississauga with K&S Landscaping. We are experts in hardscape construction, specializing in custom patios, walkways, retaining walls, and fire pits using premium pavers and natural stone.',
      keywords: 'hardscape Mississauga, custom patios, paver walkways, retaining wall construction, outdoor fire pits, natural stone masonry'
    }
  },
  {
    icon: ConstructionIcon,
    title: 'Skilled Construction & Demolition Labour',
    description: 'We provide skilled, reliable workers for construction and demolition projects, ensuring safety and efficiency on the job site.',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhrrFl7K073mQxysrWacII-5WFkZiyRkK44oA6Q3fLVvIlO1WOE2CoUq6uVHmL10yOIIuVcX05i0m0HLgBcGb8LhNXdebZSmWKi9-3G2gXPjH6pb4DBDEJRAqtSrEi2s6gd-hTeTXjmNXfVCxo5CAuD7frBd9K1mE2ZA1JeIAetMJCjrPt7YtxazU89mcM=w480-h640-rw',
    altText: "A construction worker safely operating on a job site, representing skilled labour.",
    slug: 'skilled-construction-demolition-labour',
    details: {
      longDescription: "When your project demands skilled and reliable labor, our team is ready to assist. We provide experienced workers for a wide range of construction and demolition tasks. Our crews are trained in job site safety and are proficient in operating various types of equipment. Whether you need help with framing, drywall, site prep, or careful demolition and debris removal, we supply the professional manpower to get the job done efficiently and safely, keeping your project on schedule.",
      gallery: [
        'https://blogger.googleusercontent.com/img/a/AVvXsEhrrFl7K073mQxysrWacII-5WFkZiyRkK44oA6Q3fLVvIlO1WOE2CoUq6uVHmL10yOIIuVcX05i0m0HLgBcGb8LhNXdebZSmWKi9-3G2gXPjH6pb4DBDEJRAqtSrEi2s6gd-hTeTXjmNXfVCxo5CAuD7frBd9K1mE2ZA1JeIAetMJCjrPt7YtxazU89mcM=w480-h640-rw',
        'https://media.istockphoto.com/id/1058741276/photo/enjoying-a-break-together.jpg?s=612x612&w=0&k=20&c=PcISJJ2rKQ7VR5JPapMGNpl_XTkGMOjizwd9Qsp0_xY=',
        'https://media.istockphoto.com/id/1332588708/photo/construction-workers-pouring-concrete-into-a-pile-on-the-foundation.jpg?s=612x612&w=0&k=20&c=eZE7TpgrRj2hqBPGFEOjBMgImNLTzayawWAS_ptl9Hc='
      ],
      keyFeatures: ['Experienced & Vetted Crews', 'Job Site Safety Protocols', 'Support for All Project Phases', 'Efficient & Reliable Manpower', 'Demolition & Debris Removal'],
      process: [
        { step: 1, title: 'Consultation & Scoping', description: 'We discuss your project needs to determine the required skills and number of personnel.' },
        { step: 2, title: 'Crew Assignment', description: 'We assign the best-suited, safety-trained crew members for your specific tasks.' },
        { step: 3, title: 'On-Site Execution', description: 'Our team integrates with your project, working efficiently and professionally to meet your goals.' },
        { step: 4, title: 'Project Completion', description: 'We ensure all assigned tasks are completed to your satisfaction and the site is left in good order.' }
      ]
    },
    meta: {
      description: 'Need skilled labor for your Mississauga construction or demolition project? K&S provides reliable, safety-trained crews for framing, site prep, demolition, and debris removal. Get the job done right.',
      keywords: 'skilled labor Mississauga, construction labor hire, demolition services, job site safety, debris removal, professional manpower'
    }
  },
  {
    icon: MovingIcon,
    title: 'General Labour & Site Clean-up',
    description: 'Need an extra set of hands? Our teams assist with moving, heavy lifting, debris removal, and general site clean-up.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677941733615-68892850b9ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGxhbmRjYXBpbmclMjBkZW1vJTIwYW5kJTIwd2F0ZXJwcm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
    altText: "A clean and tidy work site after a general clean-up.",
    slug: 'general-labour-site-cleanup',
    details: {
      longDescription: "No job is too small for our dedicated general labor teams. We provide the physical strength and diligence needed for tasks like moving heavy items, clearing out garages or basements, removing yard waste, and performing comprehensive site clean-ups after a project. Our crews arrive ready to work, equipped with the necessary tools to leave your property spotless and organized. We are your reliable resource for any task requiring an extra set of strong hands.",
      gallery: [
        'https://plus.unsplash.com/premium_photo-1677941733615-68892850b9ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGxhbmRjYXBpbmclMjBkZW1vJTIwYW5kJTIwd2F0ZXJwcm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
        'https://plus.unsplash.com/premium_photo-1750890675827-d4e6ab2f8c20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnN0cnVjdGlvbiUyMGNvbnRyYWN0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
        'https://plus.unsplash.com/premium_photo-1750887241541-86a1290e5c8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxjb25zdHJ1Y3Rpb24lMjBjb250cmFjdGluZyUyMGNsZWFudXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600'
      ],
      keyFeatures: ['Heavy Lifting & Moving', 'Yard Waste & Debris Removal', 'Post-Construction Cleaning', 'Garage & Basement Clean-outs', 'Flexible On-Demand Scheduling'],
      process: [
        { step: 1, title: 'Site Assessment', description: 'We evaluate the scope of the clean-up or labor required to provide an accurate estimate.' },
        { step: 2, title: 'Debris Removal & Sorting', description: 'Our team efficiently removes all unwanted materials, sorting for disposal and recycling.' },
        { step: 3, title: 'Thorough Cleaning', description: 'We perform a detailed clean of the area, including sweeping, tidying, and organizing.' },
        { step: 4, title: 'Final Inspection', description: 'We do a final walk-through to ensure the site is spotless and meets your expectations.' }
      ]
    },
    meta: {
      description: 'For on-demand general labor in Mississauga, trust K&S. We provide strong, reliable teams for heavy lifting, moving, yard waste removal, post-construction cleaning, and complete site clean-ups.',
      keywords: 'general labor Mississauga, site clean-up services, debris removal, moving help, junk removal, post-construction cleaning'
    }
  },
  {
    icon: WaterproofingIcon,
    title: 'Basement Waterproofing & Foundation Sealing',
    description: 'Protect your home from water damage with interior and exterior foundation sealing to prevent leaks, moisture, and mold growth.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1678677946836-4bd6147344c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGxhbmRjYXBpbmclMjBkZW1vJTIwYW5kJTIwd2F0ZXJwcm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
    altText: "A sealed and protected foundation wall, representing our waterproofing service.",
    slug: 'basement-waterproofing-foundation-sealing',
    preferred: true,
    details: {
      longDescription: "Protect your home’s structural integrity and create a dry, healthy living space with our professional waterproofing services. We address water intrusion issues at their source by meticulously sealing foundation cracks and applying high-quality waterproof membranes to both interior and exterior walls. Our solutions prevent leaks, reduce humidity, and stop mold growth, safeguarding your investment and giving you peace of mind.",
      gallery: [
        'https://plus.unsplash.com/premium_photo-1678677946836-4bd6147344c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGxhbmRjYXBpbmclMjBkZW1vJTIwYW5kJTIwd2F0ZXJwcm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
        'https://media.istockphoto.com/id/2227648281/photo/manual-laborer-applying-wet-cement-with-a-trowel-on-a-foundation.jpg?s=612x612&w=0&k=20&c=fLzC_qiV75jz70zk3S19SQj39Ev785m9-4Zkxxgt0Tk=',
        'https://media.istockphoto.com/id/1227106898/photo/worker-applies-bitumen-mastic-on-the-foundation.jpg?s=612x612&w=0&k=20&c=zOpesqu6D5c7y456_aYm5gJd1NvCvO7xP-k2-jWuxmA='
      ],
      keyFeatures: ['Interior & Exterior Waterproofing', 'Foundation Crack Sealing', 'Sump Pump Installation', 'French Drain Systems', 'Mold & Mildew Prevention'],
      process: [
        { step: 1, title: 'Thorough Inspection & Diagnosis', description: 'We identify the source of water intrusion through a comprehensive inspection of your foundation.' },
        { step: 2, title: 'Customized Waterproofing Solution', description: 'We design a solution tailored to your home, which may include sealants, membranes, or drainage systems.' },
        { step: 3, title: 'Professional Application', description: 'Our experienced team applies the chosen solution meticulously to ensure a complete, lasting seal.' },
        { step: 4, title: 'Final Testing & Guarantee', description: 'We provide a guarantee, giving you long-term peace of mind.' }
      ]
    },
    meta: {
      description: 'Protect your Mississauga home from water damage with K&S. Our expert basement waterproofing and foundation sealing services fix leaks, seal cracks, and prevent mold for a dry, healthy home.',
      keywords: 'basement waterproofing Mississauga, foundation sealing, foundation crack repair, wet basement solutions, sump pump installation, french drain'
    }
  }
];


export const PHONE_NUMBER = '(437) 215-1031';
export const EMAIL_ADDRESS = 'Kyleandsam00@gmail.com';
export const COMPANY_ADDRESS_LINE_1 = '75 Watline Avenue';
export const COMPANY_ADDRESS_LINE_2 = 'Mississauga, ON L4Z 3E5';
export const COMPANY_ADDRESS_SHORT = '75 Watline Avenue, Mississauga, ON';
export const PHONE_NUMBER_HREF = 'tel:+14372151031';
export const EMAIL_HREF = 'mailto:Kyleandsam00@gmail.com';