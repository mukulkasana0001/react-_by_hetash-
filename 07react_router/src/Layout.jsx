import React from 'react'

// outlet use this layout as a base 
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
// import Home from './components/home/Home'

function Layout() {


  return (
    < >
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
