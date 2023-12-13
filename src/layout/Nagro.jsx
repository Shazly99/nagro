import Footer from 'components/Footer/Footer'
import NavBar from 'components/Navbar/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Nagro = () => {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default Nagro
