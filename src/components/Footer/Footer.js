/**
 *
 * Footer
 *
 */

import React from 'react'

import MenuBottom from '@/shared/components/MenuBottom'
import AboutUs from '@/shared/components/AboutUs'
import Socials from '@/shared/components/Socials'

import './style.css'

const Footer = () => {
  return (
    <footer className="page-footer">
      <MenuBottom />
      <AboutUs />
      <Socials />
    </footer>
  )
}

export default Footer
