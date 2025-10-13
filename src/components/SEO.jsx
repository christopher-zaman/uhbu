// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function JsonLd({ data }) {
  if (!data) return null;
  const items = Array.isArray(data) ? data : [data];
  return items.map((obj, i) => (
    <script
      // eslint-disable-next-line react/no-danger
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  ));
}

const HOST = 'https://www.ultimatehealthdpc.com';
const ORG_ID = `${HOST}/#org`;
const LOCAL_ID = `${HOST}/#local`;

const defaultOrg = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': ORG_ID,
  name: 'Ultimate Health DPC',
  url: `${HOST}/`,
  telephone: '+1-352-901-6582',
  logo: `${HOST}/assets/img/logo.webp`,
  sameAs: [
    'https://www.instagram.com/ultimatehealthdpc',
    'https://www.linkedin.com/in/amanda-neil-msn-aprn-2b2238202',
    'https://www.tiktok.com/@ultimatehealthdpc'
  ]
};

const defaultLocal = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': LOCAL_ID,
  name: 'Ultimate Health DPC',
  url: `${HOST}/`,
  image: `${HOST}/assets/img/membership-based-primary-health-care.webp`,
  telephone: '+1-352-901-6582',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '711 North 3rd Street',
    addressLocality: 'Leesburg',
    addressRegion: 'FL',
    postalCode: '34748',
    addressCountry: 'US'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '00:00',
      closes: '23:59'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00'
    }
  ],
  parentOrganization: { '@id': ORG_ID }
};

const SEO = ({
  title = 'Ultimate Health Direct Primary Care',
  description = 'Affordable Direct Primary Care in Leesburg, FL. Membership-based healthcare for individuals and families.',
  image = `${HOST}/assets/img/membership-based-primary-health-care.webp`,
  url = `${HOST}/`,
  noindex = false,
  jsonLd // optional: object or array of schema.org objects
}) => {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@ultimatehealthdpc" />
      <meta name="twitter:image" content={image} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Global JSON-LD + page-specific JSON-LD */}
      <JsonLd data={[defaultOrg, defaultLocal]} />
      <JsonLd data={jsonLd} />
    </Helmet>
  );
};

export default SEO;
