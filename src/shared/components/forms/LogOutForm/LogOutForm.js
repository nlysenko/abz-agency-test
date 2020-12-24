/**
 *
 * LogOutForm
 *
 */

import React from 'react'
import LogOutButton from '@/shared/components/buttons/LogOutButton'

import './style.css'

const LogOutForm = (props) => {
  return (
    <form className="log-out-form">
      <LogOutButton screenWidth={props.screenWidth} />
    </form>
  )
}

export default LogOutForm
