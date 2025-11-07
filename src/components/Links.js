import React from 'react';
import PropTypes from 'prop-types';

const container = {
  flex: '1',
  fontSize: '.6em',
  fontWeight: 'bold',
  textAlign: 'center',
  textShadow: '3px 3px grey',
  color: 'white',
};
const label = { flex: '1', fontSize: '2em', fontWeight: 'bold', maxWidth: 200 };
const imgStyle = { width: '100%', maxWidth: 100 };
const anchor = { flex: '1', maxWidth: 200, color: 'white', textDecoration: 'none' };

export default function Links({ webSiteName, url, image, alt }) {
  return (
    <div style={container} className="Links">
      <label style={label}>{webSiteName}</label><br />
      <a style={anchor} href={url} target="_blank" rel="noreferrer">
        {/* alt added; no duplicate props */}
        <img style={imgStyle} src={image} alt={alt || webSiteName} /><br />
        {url}<br />
      </a>
    </div>
  );
}

Links.propTypes = {
  webSiteName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string
};
