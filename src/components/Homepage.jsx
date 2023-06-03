import React from 'react'
import '../css/Topbar.css'
import '../css/Homepage.css'

import { Navbar } from './Navbar'
import { HomeTopbar } from './HomeTopbar'
import Card from './Card'
// import FetchData from './FetchData'
import Scheduling from './Scheduling'

const Homepage = () => {
  return (
    <>
      <HomeTopbar
        name = "Jubayer"
      />
      {/* <Card /> */}
      {/* <FetchData /> */}
      <Scheduling />
      <Navbar />
    </>
  )
}

export default Homepage