import React from 'react'
import '../css//settings.css'
import './HomeTopbar'
import { HomeTopbar } from './HomeTopbar'
import { Navbar } from './Navbar'
import { SettingsTopbar } from './SettingsTopbar'

const Settings = () => {
    return (
        <>
            <SettingsTopbar />
            <div className="container">
                <button className="childbox" id='brown'>
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

            <div className="container">
                <button className="childbox">
                    <div>Sign</div>
                    <div>Out</div>
                </button>
                <button className="childbox" id='red'>
                    <div>Request</div>
                    <div>Account deletion</div>
                </button>
            </div>
            <Navbar />
            {/* </div> */}
        </>
    )
}

export default Settings