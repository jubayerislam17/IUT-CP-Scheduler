import React from 'react'
import '../css/Topbar.css'
import '../css/Homepage.css'

import { Navbar } from './Navbar'
import { HomeTopbar } from './HomeTopbar'
import Card from './Card'
import FetchData from './FetchData'

const Homepage = () => {
  return (
    <>
      <HomeTopbar
        name = "Jubayer"
      />
      <Card />
      <FetchData />
      <Navbar />
    </>
  )
}

export default Homepage