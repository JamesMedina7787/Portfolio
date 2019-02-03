import React, { Component } from 'react';

const sectionStyle= {
  flex:"1",
  backgroundColor:"oldlace"
}
const labelStyle= {
  flex:"1",
  fontSize:"2em",
  fontWeight:"bold"
}
const imgStyle= {
  flex:"1",
  backgroundColor:"oldlace",
  width:"80%"
}
const divStyle= {
  flex:"1",
  border:"2px dotted black"
}
const linkStyle= {
  flex:"1",
  backgroundColor:"oldlace"
}


class Project extends Component {

  render() {
    return (
      <div style={divStyle} className="Project">
      <section style={sectionStyle}>
       <label style={labelStyle}>{this.props.webSiteName}</label><br/>
       <a style={linkStyle} href={this.props.url} alt="James Medina JWM Porfolio">
        <img style={imgStyle} src={this.props.image}/></a>
       </section>
      </div>
    );
  }
}

export default Project;
