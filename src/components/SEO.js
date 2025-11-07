// src/components/SEO.js
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, image, type = 'article', jsonLd }) {
  const safeTitle = title ? `${title} | James Medina` : 'James Medina — Portfolio';
  const safeDesc = description ?? 'Full-Stack Developer portfolio, projects, writing, and contact.';
  const safeUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
  const safeImage = image ?? `${process.env.PUBLIC_URL}/favicon.ico`;

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDesc} />
      <link rel="canonical" href={safeUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDesc} />
      <meta property="og:url" content={safeUrl} />
      <meta property="og:image" content={safeImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDesc} />
      <meta name="twitter:image" content={safeImage} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  jsonLd: PropTypes.object
};
