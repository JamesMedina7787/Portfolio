import React, { Component } from 'react';


class AboutMe extends Component {
    render() {
      console.log()
      return (
        <div  className="AboutMe">
        <p>{this.props.message}
</p>
        </div>
      );
    }
  }

export default AboutMe;
