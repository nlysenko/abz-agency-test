/**
 *
 * LogOutButton
 *
 */

import React from 'react'

import LogOutBtn from 'assets/svg/sign-out.svg'

import './style.css'

const LogOutButton = (props) => {
  return props.screenWidth >= 1024 ? (
    <LogOutBtn className="log-out-btn" />
  ) : (
    <button className="log-out-btn">Sign Out</button>
  )
}

export default LogOutButton
