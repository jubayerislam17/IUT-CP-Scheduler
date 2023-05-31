import React from 'react'
import '../settings.css'
import './Topbar'
import { Topbar } from './Topbar'
import { Navbar } from './Navbar'

const Settings = () => {
  return (
    <>
    <Topbar/>
    {/* <div className='mainContainer'> */}
        <div className="container">
            {/* <div className="box"> */}
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