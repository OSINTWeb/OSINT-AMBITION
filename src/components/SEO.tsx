import { useEffect } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  imageUrl?: string;
  noindex?: boolean;
};

const SITE_NAME = 'OSINT Ambition';
const SITE_URL = 'https://osintambition.org';
const DEFAULT_IMAGE = `${SITE_URL}/logo/osint_logo.png`;

function ensureTag(attributes: Record<string, string>, isMeta = true): HTMLElement {
  const selectorParts: string[] = [];
  Object.entries(attributes).forEach(([key, value]) => {
    selectorParts.push(`${key}="${CSS.escape(value)}"`);
  });
  const selector = `${isMeta ? 'meta' : 'link'}[${selectorParts.join('][')}]`;
  let element = document.head.querySelector(selector) as HTMLElement | null;
  if (!element) {
    element = document.createElement(isMeta ? 'meta' : 'link');
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
    document.head.appendChild(element);
  }
  return element;
}

export function SEO({ title, description, canonical, imageUrl, noindex }: SeoProps) {
  useEffect(() => {
    const computedTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Open Source Intelligence for Everyone`;
    const computedDescription = description ?? 'OSINT Ambition makes Open Source Intelligence accessible to everyone with tools, learning, and community.';
    const computedCanonical = canonical ?? SITE_URL;
    const computedImage = imageUrl ?? DEFAULT_IMAGE;

    document.title = computedTitle;

    // Basic meta
    ensureTag({ name: 'description' }).setAttribute('content', computedDescription);
    ensureTag({ name: 'robots' }).setAttribute('content', noindex ? 'noindex,nofollow' : 'index,follow');

    // Canonical link
    ensureTag({ rel: 'canonical' }, false).setAttribute('href', computedCanonical);

    // Open Graph
    ensureTag({ property: 'og:title' }).setAttribute('content', computedTitle);
    ensureTag({ property: 'og:description' }).setAttribute('content', computedDescription);
    ensureTag({ property: 'og:url' }).setAttribute('content', computedCanonical);
    ensureTag({ property: 'og:type' }).setAttribute('content', 'website');
    ensureTag({ property: 'og:site_name' }).setAttribute('content', SITE_NAME);
    ensureTag({ property: 'og:image' }).setAttribute('content', computedImage);

    // Twitter
    ensureTag({ name: 'twitter:card' }).setAttribute('content', 'summary_large_image');
    ensureTag({ name: 'twitter:title' }).setAttribute('content', computedTitle);
    ensureTag({ name: 'twitter:description' }).setAttribute('content', computedDescription);
    ensureTag({ name: 'twitter:image' }).setAttribute('content', computedImage);

    // JSON-LD Structured Data: Organization
    const orgLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo/osint_logo.png`,
      sameAs: [
        'https://x.com/osintambition',
        'https://www.linkedin.com/company/osintambition',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'hi@osintambition.org'
        }
      ]
    };
    let orgScript = document.getElementById('ld-org') as HTMLScriptElement | null;
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.id = 'ld-org';
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(orgLd);

    // JSON-LD Structured Data: Website + SearchAction
    const websiteLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
    let websiteScript = document.getElementById('ld-website') as HTMLScriptElement | null;
    if (!websiteScript) {
      websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.id = 'ld-website';
      document.head.appendChild(websiteScript);
    }
    websiteScript.textContent = JSON.stringify(websiteLd);
  }, [title, description, canonical, imageUrl, noindex]);

  return null;
}

export default SEO;


