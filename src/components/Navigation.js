import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
  render() {
    console.log()
    return (
      <div className="Navigation">
    <NavLink to="/February2">February2nd 2019 - My Start</NavLink><br/>
    <NavLink to="/February3">February3rd 2019 - Coding Boot Camp</NavLink>
      <br/>  <NavLink to="/February7">February7th 2019 - Graduation</NavLink>
      </div>
    );
  }
}

export default Navigation;
