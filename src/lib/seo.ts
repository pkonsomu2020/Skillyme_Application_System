// SEO utility functions for updating meta tags dynamically

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function updateSEO(config: SEOConfig) {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  updateMetaTag('name', 'description', config.description);
  updateMetaTag('name', 'title', config.title);
  
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Open Graph tags
  updateMetaTag('property', 'og:title', config.title);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'og:url', config.canonical || window.location.href);
  
  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
  }

  // Twitter tags
  updateMetaTag('name', 'twitter:title', config.title);
  updateMetaTag('name', 'twitter:description', config.description);
  
  if (config.ogImage) {
    updateMetaTag('name', 'twitter:image', config.ogImage);
  }

  // Canonical URL
  if (config.canonical) {
    updateCanonicalLink(config.canonical);
  }
}

function updateMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
}
