import React, { Component } from 'react';

const sectionStyle= {
  backgroundColor:"oldlace"
}
const labelStyle= {
  fontSize:"2em",
  fontWeight:"bold"
}
const imgStyle= {
  backgroundColor:"oldlace",
  width:'100%'
}

const linkStyle= {
  backgroundColor:"oldlace"
}

const added= {
  color:'#331e05',
  fontFamily: 'technical',
  fontStretch: 'expanded',
  fontSize: '1.1em'
}


class Project extends Component {

  render() {
    return (
      <div className="Project">
      <section style={sectionStyle}>
       <label style={labelStyle}>{this.props.webSiteName}</label><br/>
       <a style={linkStyle} href={this.props.url} alt="James Medina JWM Porfolio">
        <img style={imgStyle} src={this.props.image}/><br/>
         {this.props.url}<br />
<p style={added}>Click the above Picture, or web address, to visit the corresponding JWM website</p>
           <br/>
        </a>

       </section>
      </div>
    );
  }
}

export default Project;
