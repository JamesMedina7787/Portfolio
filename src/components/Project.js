import React from 'react';
import PropTypes from 'prop-types';

const sectionStyle = { backgroundColor: 'oldlace' };
const labelStyle = { fontSize: '2em', fontWeight: 'bold' };
const imgStyle = { 
  backgroundColor: 'oldlace', 
  width: '80%',
  maxWidth: "300px",
  margin: "0 auto",
  display: "block"
};
const linkStyle = { backgroundColor: 'oldlace' };
const noteStyle = { color: '#331e05', fontFamily: 'technical', fontStretch: 'expanded', fontSize: '1.1em' };
const projectWrapper = {
  maxWidth: "900px",
  margin: "20px auto"
};

function Project({ webSiteName, url, image }) {
  return (
    <div style={projectWrapper} className="Project">
      <section style={sectionStyle}>
        <label style={labelStyle}>{webSiteName}</label><br />
        <a style={linkStyle} href={url} target="_blank" rel="noreferrer">
          <img style={imgStyle} src={image} alt={webSiteName} /><br />
          {url}<br />
          <p style={noteStyle}>Click the picture or address to visit the site</p>
        </a>
      </section>
    </div>
  );
}

Project.propTypes = {
  webSiteName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default React.memo(Project);
