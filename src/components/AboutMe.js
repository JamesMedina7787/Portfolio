import React, { Component } from 'react';

const blogContent= {
  flex:'3',
  border:"2px dotted silver",
  padding: "10px",
  margin: '30px',
  fontSize: '1.38em',
  color:'lightblue'
}
class AboutMe extends Component {
    render() {
      console.log()
      return (
        <div style={blogContent} className="AboutMe">
        <p>{this.props.message}
</p>
        </div>
      );
    }
  }

export default AboutMe;
