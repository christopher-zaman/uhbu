// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function JsonLd({ data }) {
  if (!data) return null;
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}

const HOST = 'https://www.ultimatehealthdpc.com';

const SEO = ({
  title = 'Ultimate Health DPC | Direct Primary Care in Leesburg, FL',
  description = 'Ultimate Health DPC provides membership-based Direct Primary Care in Leesburg, FL with personalized primary care, wellness support, and direct provider access.',
  image = `${HOST}/assets/img/membership-based-primary-health-care.webp`,
  url = `${HOST}/`,
  noindex = false,
  jsonLd
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@ultimatehealthdpc" />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <JsonLd data={jsonLd} />
    </>
  );
};

export default SEO;