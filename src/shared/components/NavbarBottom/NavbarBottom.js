/**
 *
 * NavbarBottom
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

const NavbarBottom = () => {
  return (
    <nav className="navbar-bottom">
      <ul className="navbar-bottom__list">
        {links.map((link, i) => (
          <li key={i} className="navbar-bottom__item">
            <Link
              className="navbar-bottom__link"
              activeClass="navbar-bottom__link--active"
              to={link.id}
              spy={true}
              smooth={true}
              offset={-100}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarBottom
