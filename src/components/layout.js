import React from 'react'

import './index.css'
import Navbar from './Navbar'
import FooterContainer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main> {children} </main>
      <FooterContainer />
    </>
    )
}

export default Layout