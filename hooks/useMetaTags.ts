import { useEffect } from 'react';

const useMetaTags = (title: string, description: string, keywords?: string) => {
  useEffect(() => {
    // Fallback title and description if none provided
    const effectiveTitle = title ? `${title} | K&S Landscaping` : "K&S Landscaping | Landscape, Hardscape & Construction Labor";
    const effectiveDescription = description || "Expert landscaping, hardscaping, and construction services in Mississauga, ON. Get your free, no-obligation quote today.";

    document.title = effectiveTitle;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', effectiveDescription);
    }

    if (keywords) {
      const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
      if (metaKeywordsTag) {
        metaKeywordsTag.setAttribute('content', keywords);
      }
    }

    // Also update Open Graph tags for better social sharing
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
        ogTitleTag.setAttribute('content', effectiveTitle);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute('content', effectiveDescription);
    }
    
    const twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitleTag) {
        twitterTitleTag.setAttribute('content', effectiveTitle);
    }

    const twitterDescriptionTag = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescriptionTag) {
        twitterDescriptionTag.setAttribute('content', effectiveDescription);
    }

  }, [title, description, keywords]);
};

export default useMetaTags;
