/**
 *
 * Navbar
 *
 */

import React from 'react'
import { Link } from 'react-scroll'

import './style.css'

const links = [
  {
    name: 'About me',
    id: 'about-me',
  },
  {
    name: 'Relationships',
    id: 'relationships',
  },
  {
    name: 'Requirements',
    id: 'requirements',
  },
  {
    name: 'Users',
    id: 'users',
  },
  {
    name: 'Sign Up',
    id: 'registration',
  },
]

const Navbar = (props) => {
  const { toggleMenuPopup } = props

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {links.map((link, i) => (
          <li key={i} className="navbar__item">
            <Link
              to={link.id}
              spy={true}
              smooth={true}
              offset={-100}
              className="navbar__link"
              onClick={toggleMenuPopup}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
