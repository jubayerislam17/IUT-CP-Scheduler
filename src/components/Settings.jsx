import React from 'react';
import '../css/settings.css';
import '../css/Homepage.css';
import { HomeTopbar } from './HomeTopbar';
import { Navbar } from './Navbar';
import { SettingsTopbar } from './SettingsTopbar';
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from 'react-router-dom';

const Settings = () => {
    const {logout} = useLogout()
    const {user }= useAuthContext()

    const handleClick = ()=>{
        logout()

    }

  return (
    <>
      <SettingsTopbar />
      <div className="mainContainer">
        <div className="container2">
          <button className="childbox" id="brown">
            <div>Change</div>
            <div>Usernames</div>
          </button>
          <button className="childbox">
            <div>Filter</div>
            <div>Websites</div>
          </button>
        </div>

        <div className="name">
          <button className="alone">
            <span>Change</span>
            <br />
            <span>Display name</span>
          </button>
        </div>

        <div className="container2">
          <button className="childbox">
            <Link to="/" onClick={handleClick}  >
            <div>Sign</div>
            <div>Out</div>
            </Link>
            {/* <Link to="/"><div onClick={handleClick}>Sign Out</div></Link> */}
          </button>
          <button className="childbox" id="red">
            <div>Request</div>
            <div>Account deletion</div>
          </button>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Settings;
