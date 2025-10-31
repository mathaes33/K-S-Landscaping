import React, { useState, useEffect, useRef } from 'react';

interface LazyBackgroundProps {
  as?: React.ElementType;
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Allow other props like aria-label
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({
  as: Component = 'div',
  imageUrl,
  children,
  className,
  style = {},
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fallback for older browsers that don't support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px 200px 0px', // Start loading 200px before it enters viewport
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const combinedStyle = isVisible
    ? { ...style, backgroundImage: `url(${imageUrl})` }
    : style;

  const finalClassName = `${className || ''} ${!isVisible ? 'shimmer-placeholder' : ''}`.trim();

  return (
    <Component ref={elementRef} className={finalClassName} style={combinedStyle} {...rest}>
      {children}
    </Component>
  );
};

export default LazyBackground;