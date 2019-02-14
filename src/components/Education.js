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
        `I have attended New York Code and Design Academy. I use Node.JS, Github, and heroku to develop from the ground up. These are Web sites I have developed using my newly mastered skills.`
</p>
             <img style={certificate} src={this.props.image} alt="nyscda"/>
        </div>
      );
    }
  }

export default Education;
