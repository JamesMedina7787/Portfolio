import React, { Component } from 'react';
const divStyle= {
  flex:'1',
  fontSize:".6em",
  fontWeight:"bold",
  textAlign: "center",
  textShadow: '3px 3px grey',
color:'white'
}
const sectionStyle= {
  backgroundColor:"oldlace"
}
const labelStyle= {
  flex:'1',
  fontSize:"2em",
  fontWeight:"bold",
  maxWidth: '200px'
}
const imgStyle= {
  width:'100%',
    maxWidth:'100px',
    color: 'white',

}

const linkStyle= {
  flex:'1',
  maxWidth: '200px',
  color:'white'
}

const added= {
  color:'#331e05',
  fontFamily: 'technical',
  fontStretch: 'expanded',
  fontSize: '1.1em'
}

class Links extends Component {
  render() {
    console.log()
    return (
      <div style={divStyle} className="Links">

      <label style={labelStyle}>{this.props.webSiteName}</label><br/>
      <a style={linkStyle} href={this.props.url} alt="James Medina Links">
       <img style={imgStyle} src={this.props.image}/><br/>
        {this.props.url}<br />
</a>
      </div>

    );
  }
}

export default Links;





//
