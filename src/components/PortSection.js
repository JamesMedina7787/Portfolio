import React, { Component } from 'react';

const divStyle = {
  fontSize: "2.33em",
  textAlign: "center",
  color: "beige",
  backgroundColor: "skyblue",
  textShadow: "3px 3px #d2d7dd",
  border: "3px solid black",
  padding: "10px 40px",
  maxWidth: "900px",
  margin: "20px auto",
  boxSizing: "border-box"   // ⭐ prevents overflow
};

const h2Style = {
  margin: 0,                // ⭐ prevents text bleed
  textAlign: "center"
};

class PortSection extends Component {
  render() {
    return (
      <div style={divStyle} className="PortSection">
        <h2 style={h2Style}>{this.props.sectionName}</h2>
      </div>
    );
  }
}

export default React.memo(PortSection);
