import React from 'react';

const ParticleBackground: React.FC = () => (
  <div className="particle-container" aria-hidden="true">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="particle"></div>
    ))}
  </div>
);

export default ParticleBackground;
