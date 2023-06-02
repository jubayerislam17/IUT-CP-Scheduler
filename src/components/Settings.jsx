import React from 'react'
import { Link } from 'react-router-dom'
import '../css/settings.css'
import './HomeTopbar'
import { HomeTopbar } from './HomeTopbar'
import { Navbar } from './Navbar'
import { SettingsTopbar } from './SettingsTopbar'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Settings = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

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

            <div className='name'>
                <button className='alone'>
                    <span>Change</span><br></br>
                    <span>Display name</span>
                </button>

            </div>


            <div className="container">
                <button className="childbox">
                    {/* <div>Sign</div>
                    <div>Out</div> */}
                    <Link to="/"><div onClick={handleClick}>Sign Out</div></Link>
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
