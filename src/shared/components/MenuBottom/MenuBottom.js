/**
 *
 * MenuBottom
 *
 */

import React from 'react'

import NavbarBottom from '@/shared/components/NavbarBottom'
import Logo from '@/shared/components/Logo'

import './style.css'

const MenuBottom = () => {
  return (
    <div className="menu-bottom">
      <div className="container">
        <div className="menu-bottom__inner">
          <Logo color="#fff" />

          <NavbarBottom />
        </div>
      </div>
    </div>
  )
}

export default MenuBottom
