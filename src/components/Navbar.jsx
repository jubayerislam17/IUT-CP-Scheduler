import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export const Navbar = () => {
  return (
    <>
      {/* <div className='container'> */}
      {/* <Router> */}
        <div className='navbar'>
          <div>
            <Link to="/"><i class="fas fa-home" id='font'></i></Link>
          </div>
          <div>
            <Link to="/Contact"><i class="fa-regular fa-envelope" id='font'></i></Link>
          </div>
          <div>
            <Link to="/Settings"><i class="fa-solid fa-gear" id='font'></i></Link>
          </div>
        </div>
      {/* </Router> */}
      {/* </div> */}
    </>
    )
}
