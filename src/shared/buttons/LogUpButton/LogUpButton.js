/**
 *
 * LogUpButton
 *
 */

import React from 'react'
import { Link } from 'react-scroll'

import './style.css'

const LogUpButton = () => {
  return (
    <Link
      to={'registration'}
      spy={true}
      smooth={true}
      offset={-100}
      className="sugn-up-button"
    >
      Sign Up
    </Link>
  )
}

export default LogUpButton
