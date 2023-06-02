import React from 'react'
import '../css/Topbar.css';
import logo from '../Image/logo.jpg';
import { Link } from 'react-router-dom';
import PersonalProfile from './PersonalProfile';
// import "./Card/Card.css"
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>


export const HomeTopbar = (props) => {
  return (
    <div>
      <div>
        <nav className="navigation">
          <h1>Hello,</h1>
          <h2>users</h2>
        </nav>
      </div>
      <div>
        <nav className="logo">
        <Link to = "/PersonalProfile">
          <img src={logo} alt="Logo" />
          </Link>
        </nav>
      </div>
    </div>
  );
}