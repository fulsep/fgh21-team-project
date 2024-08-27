import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Input from './Input'

function Layout(props) {
  return (
    <>
        <Navbar />
        {props.children}
        <Footer />
    </>
  )
}

export default Layout