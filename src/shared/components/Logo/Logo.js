/**
 *
 * Logo
 *
 */

import React from 'react'
import { Link } from 'react-scroll'

import LogoSvg from 'assets/svg/logo.svg'

import './style.css'

export default (props) => {
  return (
    <div className="logo">
      <Link className="logo__link" to="top-section" smooth={true} offset={-65}>
        <LogoSvg fill={props.color} width={134} height={24} />
      </Link>
    </div>
  )
}
