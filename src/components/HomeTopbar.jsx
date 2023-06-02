import React from 'react'
import '../css/Topbar.css';
import logo from '../Image/logo.jpg';
import { Link } from 'react-router-dom';
import PersonalProfile from './PersonalProfile';
import { useAuthContext } from '../hooks/useAuthContext';
// import "./Card/Card.css"
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>


export const HomeTopbar = (props) => {
  const {user} =  useAuthContext()
  return (
    <div>
      <div>
        <nav className="navigation">
          <h1>Hello,</h1>
          <h2>{user.id}</h2>
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