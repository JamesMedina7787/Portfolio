import React, { Component } from 'react';



class Project extends Component {
  render() {
    return (
      <div className="Project">
      <section>
       <label>{this.props.webSiteName}</label>
       <a href={this.props.url} alt="James Medina JWM Porfolio">click
        <img src={this.props.image}/></a>
       </section>
      </div>
    );
  }
}

export default Project;
