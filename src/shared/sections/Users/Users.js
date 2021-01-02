/**
 *
 * Users
 *
 */

import React, { useState, useEffect } from 'react'

import './style.css'

const Users = () => {
  const ScreenWidth = window.innerWidth

  const [users, setUsers] = useState([])
  const [page, setPage] = useState(null)
  const [totalPages, setTotalPages] = useState(1)
  const [usersIsLoaded, setUsersIsLoaded] = useState(false)
  const [nextUrl, setNextUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  function sortUsers(a, b) {
    return b.registration_timestamp - a.registration_timestamp
  }

  function getUsers() {
    const Url =
      ScreenWidth >= 768
        ? 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
        : 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3'

    if (page != totalPages) {
      fetch(nextUrl || Url)
        .then((res) => res.json())
        .then(
          (result) => {
            setUsersIsLoaded(true)
            setUsers(users.concat(result.users).sort(sortUsers))
            setPage(result.page)
            setTotalPages(result.total_pages)
            setNextUrl(result.links.next_url)
          },

          (error) => {
            setError(error)
          }
        )
    }
  }

  return (
    <section className="users">
      <div className="container">
        <h2 className="users__title" id="users">
          Our cheerful users
        </h2>

        <p className="users__attention">
          Attention! Sorting users by registration date
        </p>

        {error ? (
          <div>Error: {error.message}</div>
        ) : !usersIsLoaded ? (
          <div>loading...</div>
        ) : (
          <ul className="users__list">
            {users.map((user) => (
              <li className="users__list-item" key={user.id}>
                <img className="users__photo" src={user.photo} />

                <ul className="users__list-item-inner">
                  <li className="users__name">{user.name}</li>
                  <li className="users__position">{user.position}</li>
                  <li className="users__email">{user.email}</li>
                  <li className="users__phone">{user.phone}</li>
                </ul>
              </li>
            ))}
          </ul>
        )}

        <button
          className="users__show-more-btn"
          onClick={getUsers}
          disabled={page === totalPages}
        >
          Show more
        </button>
      </div>
    </section>
  )
}

export default Users
