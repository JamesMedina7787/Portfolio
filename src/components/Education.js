import React, { Component } from 'react';

const certificate={
  flex:'1',
  flexBasis:'30%',
  width:'30%',
  height:'auto'
}
const school={
  flex:'3',
  flexBasis:'70%',
}
const blogContent= {
  display: 'flex',
  border:"2px dotted silver",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  color:'lightblue',
  maxHeight: '400px'
}

class Education extends Component {
    render() {
      console.log()
      return (
        <div style={blogContent} className="Education">
        <p style={school}>
                  I graduated from Finger Lakes Community College with an Associate Degree in Computer Science, 
          where I studied networking fundamentals, data structures, systems administration, and TCP/IP. 
          I continued my professional development by earning the IPv6 Forum Network Engineer (Silver) 
          certification and expanding into Linux systems, routing, cybersecurity fundamentals, and 
          modern internet infrastructure. I also previously attended the New York Code and Design Academy, 
          where I learned full‑stack development and built production‑ready web applications.
        </p>
             <img style={certificate} src={this.props.image} alt="certification from NYCDA"/>
        </div>
      );
    }
  }

export default Education;
