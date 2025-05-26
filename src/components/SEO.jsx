import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = 'Ultimate Health Direct Primary Care',
  description = 'Affordable Direct Primary Care in Leesburg, FL. Membership-based healthcare for individuals and families.',
  image = 'https://ultimatehealthdpc.com/assets/img/membership-based-primary-health-care.png',
  url = 'https://www.ultimatehealthdpc.com/',
}) => {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />

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

      {/* JSON-LD Business Schema (static/global) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          name: "Ultimate Health Direct Primary Care LLC",
          image: "https://www.ultimatehealthdpc.com/images/uhdpc-logo.svg",
          telephone: "352-901-6582",
          url: "https://www.ultimatehealthdpc.com/",
          logo: "https://ultimatehealthdpc.com/images/logo.png",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            ratingCount: "25 reviews"
          },
          review: {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Erin McCann"
            },
            datePublished: "2022-07-27",
            reviewBody:
              "I can't say enough! Amanda found the problem with my weight immediately! Started the program and down 9 lbs in 2 weeks."
          },
          sameAs: [
            "https://www.linkedin.com/in/amanda-neil-msn-aprn-2b2238202",
            "https://www.facebook.com/ultimatehealthdpc",
            "http://www.yelp.com/biz/ultimatehealthdpc",
            "https://www.instagram.com/ultimatehealthdpc",
            "https://www.twitter.com/ultimatehealthdpc"
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "733 North 3rd Street",
            addressLocality: "Leesburg",
            addressRegion: "FL",
            postalCode: "34748"
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            opens: "00:00",
            closes: "23:59"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
