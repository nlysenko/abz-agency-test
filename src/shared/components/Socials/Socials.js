/**
 *
 * Socials
 *
 */

import React from 'react'

import FacebookIcon from 'assets/svg/facebook.svg'
import LinkedinIcon from 'assets/svg/linkedin.svg'
import InstagramIcon from 'assets/svg/instagram.svg'
import TwitterIcon from 'assets/svg/twitter.svg'
import PinterestIcon from 'assets/svg/pinterest.svg'

import './style.css'

const Socials = () => {
  return (
    <div className="socials">
      <div className="container">
        <div className="socials__inner">
          <ul className="socials__list">
            <li className="socials__item">
              <FacebookIcon className="socials__icon" />
            </li>

            <li className="socials__item">
              <LinkedinIcon className="socials__icon" />
            </li>

            <li className="socials__item">
              <InstagramIcon className="socials__icon" />
            </li>

            <li className="socials__item">
              <TwitterIcon className="socials__icon" />
            </li>

            <li className="socials__item">
              <PinterestIcon className="socials__icon" />
            </li>
          </ul>

          <p className="socials__text">
            © abz.agency specially for the test task
          </p>
        </div>
      </div>
    </div>
  )
}

export default Socials
