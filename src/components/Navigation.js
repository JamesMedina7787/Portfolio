import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

const blogs={
  display: 'flex',
  fontFamily:'cornerstone',
  fontWeight:'bold',
  fontSize:'1.47em',
  flexWrap:"wrap",
  justifyContent:'spaceBetween',
  alignItems: 'center',
  flexDirection:"column",
  textAlign:'center',
  margin: '19px'
}

const menuItem={
  backgroundColor:'yellow',
  border: 'thick groove',
  borderColor:'purple maroon',
  borderBottom:'double purple thick',
  borderRadius : '7ch/3ch',
  padding: '9px',
  margin: '1.67px',
  textDecoration: 'none',
  flex:1
}
class Navigation extends Component {
  render() {
    console.log()
    return (
      <div className="Navigation" style={blogs}>
    <NavLink style={menuItem}  to="/February2">February2nd 2019 - My Start</NavLink><br/>
    <NavLink style={menuItem} to="/February3">February3rd 2019 - Coding Boot Camp</NavLink> <br/>
    <NavLink style={menuItem} to="/February7">February7th 2019 - Graduation</NavLink><br/>
    <NavLink style={menuItem} to="/february22025">February 22nd 2025 McDonalds App The Location Problem</NavLink><br/>
    <NavLink style={menuItem} to="/march72025">March 2nd 2025 - Rousseau and individualized morality</NavLink><br/>
    <NavLink style={menuItem} to="/march25025">March 25th 2025 - AI infiltrates the Education System</NavLink><br/>
    <NavLink style={menuItem} to="/march272025">March 27th 2025 - Hacking and the point of it</NavLink><br/>


   
      </div>
    );
  }
}

export default Navigation;
