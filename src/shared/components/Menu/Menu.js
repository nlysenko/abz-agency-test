/**
 *
 * Menu
 *
 */

import React from 'react'

import Navbar from '@/shared/components/Navbar'
import User from '@/shared/components/User'
import LogOutForm from '@/shared/forms/LogOutForm'

import './style.css'

export default (props) => {
  const { userIsLoaded, error, user, screenWidth } = props

  return (
    <div className="menu">
      <Navbar />
      <User user={user} userIsLoaded={userIsLoaded} error={error} />
      <LogOutForm screenWidth={screenWidth} />
    </div>
  )
}
