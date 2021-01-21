/**
 *
 * Header
 *
 */

import React from 'react'

import Logo from '@/shared/components/Logo'
import Menu from '@/shared/components/Menu'

import MenuPopupButton from 'assets/svg/line-menu.svg'

import './style.css'

const Header = (props) => {
  const { toggleMenuPopup, userIsLoaded, user, error, screenWidth } = props

  return (
    <header className="header">
      <div className="container">
        {screenWidth >= 1024 ? (
          <div className="header__inner">
            <Logo />

            <Menu
              userIsLoaded={userIsLoaded}
              user={user}
              error={error}
              screenWidth={screenWidth}
            />
          </div>
        ) : (
          <div className="header__inner">
            <Logo />

            <MenuPopupButton
              className="menu-popup-btn"
              onClick={toggleMenuPopup}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
