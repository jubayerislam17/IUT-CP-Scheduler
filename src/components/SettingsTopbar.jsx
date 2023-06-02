import React from 'react'
import '../css/Topbar.css';
import logo from '../Image/logo.jpg';
// import "./Card/Card.css"
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>


export const SettingsTopbar = () => {
    return (
        <div>
            <div>
                <nav className="navigation">
                    <h1>Tweak the app,</h1>
                    <h2>Settings</h2>
                </nav>
            </div>
            <div>
                <nav className="logo">
                    <img src={logo} alt="Logo" />
                </nav>
            </div>
        </div>
    );
}