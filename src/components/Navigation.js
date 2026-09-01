import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const blogs = {
  display: 'flex',
  fontFamily: 'cornerstone',
  fontWeight: 'bold',
  fontSize: '1.47em',
  flexWrap: 'wrap',
  justifyContent: 'center',        // FIXED
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '19px',
  width: '100%'                    // ADDED
};

const menuItem = {
  backgroundColor: 'yellow',
  border: 'thick groove',
  borderColor: 'purple maroon',
  borderBottom: 'double purple thick',
  borderRadius: '7ch/3ch',
  padding: '9px',
  margin: '6px auto',              // FIXED
  textDecoration: 'none',
  maxWidth: '350px',               // FIXED — prevents stretching
  width: '50%',                   // FIXED — responsive
  display: 'block'                 // FIXED — centers properly
};

class Navigation extends Component {
  render() {
    return (
      <div style={blogs}>
        <NavLink style={menuItem} to="/August32026">August 3rd 2026 - IPv6 Evangelist</NavLink>
        <NavLink style={menuItem} to="/june52025">June 5th 2025 - Final Paper for Technical Ethics at FLCC</NavLink>
        <NavLink style={menuItem} to="/june42025">June 4th 2025 - Reflection for Technical Ethics at FLCC</NavLink>
        <NavLink style={menuItem} to="/march272025">March 27th 2025 - Hacking and the point of it</NavLink>
        <NavLink style={menuItem} to="/march25025">March 25th 2025 - AI infiltrates the Education System</NavLink>
        <NavLink style={menuItem} to="/march72025">March 7th 2025 - Rousseau and individualized morality</NavLink>
        <NavLink style={menuItem} to="/february22025">February 22nd 2025 - McDonalds App The Location Problem</NavLink>
        <NavLink style={menuItem} to="/February7">February 7th 2019 - Graduation</NavLink>
        <NavLink style={menuItem} to="/February3">February 3rd 2019 - Coding Boot Camp</NavLink>
        <NavLink style={menuItem} to="/February2">February 2nd 2019 - My Start</NavLink>
      </div>
    );
  }
}

export default React.memo(Navigation);
