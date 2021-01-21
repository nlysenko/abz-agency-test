/**
 *
 * Header
 *
 */

import React, { useState, useEffect } from 'react'

import Logo from '@/shared/components/Logo'
import Menu from '@/shared/components/Menu'
import MenuPopup from '@/shared/components/MenuPopup'

import useWindowWidth from '@/shared/hooks/useWindowWidth'

import MenuPopupButton from 'assets/svg/line-menu.svg'

import './style.css'

const Header = () => {
  const [menuPopupIsVisible, setMenuPopupIsVisible] = useState(false)
  const [userIsLoaded, setUserIsLoaded] = useState(false)
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  const screenWidth = useWindowWidth()

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
      .then((res) => res.json())
      .then(
        (result) => {
          setUserIsLoaded(true)
          setUser(result.user)
        },

        (error) => {
          setError(error)
        }
      )
  }, [])

  useEffect(() => {
    document.body.classList.toggle('overflow-is-hidden', menuPopupIsVisible)
  }, [menuPopupIsVisible])

  return (
    <header className="header">
      {menuPopupIsVisible && screenWidth < 1024 ? (
        <MenuPopup
          toggleMenuPopup={() => setMenuPopupIsVisible(!menuPopupIsVisible)}
          user={user}
          userIsLoaded={userIsLoaded}
          error={error}
        />
      ) : (
        false
      )}

      <div className="container">
        {screenWidth >= 1024 ? (
          <div className="header__inner">
            <Logo />

            <Menu
              userIsLoaded={userIsLoaded}
              error={error}
              user={user}
              screenWidth={screenWidth}
            />
          </div>
        ) : (
          <div className="header__inner">
            <Logo />

            <MenuPopupButton
              className="menu-popup-btn"
              onClick={() => setMenuPopupIsVisible(!menuPopupIsVisible)}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
