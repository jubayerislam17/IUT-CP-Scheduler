import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar.css'

export const Navbar = () => {
  return (
    <>
      {/* <div className='container'> */}
        <div className='navbar'>
        <div>
          <NavLink to="/"><i class="fas fa-home" id='font'></i></NavLink>
        </div>
        <div>
          <NavLink to="/Contact"><i class="fa-regular fa-envelope" id='font'></i></NavLink>
        </div>
        <div>
          <NavLink to="/Settings"><i class="fa-solid fa-gear" id='font'></i></NavLink>
        </div>
        </div>
      {/* </div> */}
    </>
    )
}
