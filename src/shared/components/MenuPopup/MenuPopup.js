/**
 *
 * MenuPopup
 *
 */

import React from 'react'
import { slideInLeft } from 'react-animations'
import styled, { keyframes } from 'styled-components'

import User from '@/shared/components/User'
import Navbar from '@/shared/components/Navbar'
import LogOutForm from '@/shared/forms/LogOutForm'

import './style.css'

const slideInLeftAnimation = keyframes`${slideInLeft}`
const SlideInLefDiv = styled.div`
  animation: 1s ${slideInLeftAnimation};
`

const MenuPopup = (props) => {
  const { user, userIsLoaded, toggleMenuPopup, error } = props

  return (
    <div className="menu-popup">
      <SlideInLefDiv className="menu-popup__container">
        <User user={user} userIsLoaded={userIsLoaded} error={error} />

        <Navbar toggleMenuPopup={toggleMenuPopup} />

        <LogOutForm />
      </SlideInLefDiv>

      <div className="menu-popup__overlay" onClick={toggleMenuPopup}></div>
    </div>
  )
}

export default MenuPopup
