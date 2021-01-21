/**
 *
 * App
 *
 */

import React, { useState, useEffect } from 'react'

import MenuPopup from '@/shared/components/MenuPopup'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

import useWindowWidth from '@/shared/hooks/useWindowWidth'

const App = () => {
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

  const toggleMenuPopup = () => {
    setMenuPopupIsVisible(!menuPopupIsVisible)
  }

  return (
    <div className="App">
      {menuPopupIsVisible && screenWidth < 1024 ? (
        <MenuPopup
          toggleMenuPopup={toggleMenuPopup}
          user={user}
          userIsLoaded={userIsLoaded}
          error={error}
        />
      ) : (
        false
      )}

      <Header
        toggleMenuPopup={toggleMenuPopup}
        userIsLoaded={userIsLoaded}
        user={user}
        error={error}
        screenWidth={screenWidth}
      />

      <Main />

      <Footer />
    </div>
  )
}

export default App
