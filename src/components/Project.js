import React, { Component } from 'react';



class Project extends Component {
  render() {
    return (
      <div className="Project">
      <section>
       <label>{this.props.webSiteName}</label>
       </section>
      </div>
    );
  }
}

export default Project;
