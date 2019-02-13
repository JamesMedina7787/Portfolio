import React, { Component } from 'react';
const divStyle= {
  flex:"3",
  fontSize:"4em",
  fontWeight:"bold",
  textAlign: "center",
  color:"beige",
  backgroundColor:"skyblue",
  textShadow: '3px 3px #d2d7dd'
}
class James extends Component {
  render() {
    console.log()
    return (
      <div style={divStyle} className="James">
           James Wilfred Medina
      </div>

    );
  }
}

export default James;
