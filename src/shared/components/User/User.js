/**
 *
 * User
 *
 */

import React from 'react'

import './style.css'

const User = (props) => {
  const { error, userIsLoaded, user } = props

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!userIsLoaded) {
    return <div>loading...</div>
  } else {
    return (
      <div className="user">
        <a
          href="#"
          className="user__link"
          style={{ backgroundImage: `url(${user.photo})` }}
        ></a>

        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__email">{user.email}</span>
        </div>
      </div>
    )
  }
}

export default User
