import React, { Component } from 'react';
const divStyle= {
  display:'flex',
  fontSize:"2.33em",
  textAlign: "center",
  alignItems:'center',
  color:"beige",
  backgroundColor:"skyblue",
  textShadow: '3px 3px #d2d7dd',
  border: '3px solid black',
  width:'100%',
}
const h2Style={
  flex:'3',
  textAlign:'center'
}
class PortSection extends Component {
  render() {
    console.log()
    return (
      <div style={divStyle} className="PortSection">
           <h2 style={h2Style}>{this.props.sectionName}</h2>
      </div>
    );
  }
}

export default PortSection;
