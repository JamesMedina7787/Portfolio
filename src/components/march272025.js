import React, { Component } from 'react';
// import surf from './pictures/surf.jpg'

const blogContent = {
  flex:'3',
  border:"2px dotted black",
  padding: "10px",
  margin: '30px',
  width:'100%',
  fontSize: '1.38em',
  content: `Chapter 7 of Quinn’s text dives into the ethics of computer and network security, focusing heavily on hacking—both malicious and exploratory. ...`
};

class March272025 extends Component {
  render() {
    return (
      <div style={blogContent} className="February7">
        <p>
          {blogContent.content}
        </p>
      </div>
    );
  }
}

export default March272025;
