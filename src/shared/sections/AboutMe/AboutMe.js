/**
 *
 * AboutMe
 *
 */

import React from 'react'
import { Link } from 'react-scroll'

import ManMobile from 'assets/img/man-mobile.webp'

import './style.css'

const AboutMe = () => {
  return (
    <section className="about-me container">
      <h2 className="about-me__title" id="about-me">
        Let&apos;s get acquainted
      </h2>

      <div className="about-me__content">
        <img src={ManMobile} className="about-me__man-mobile-img" />

        <div className="about-me__info">
          <h3 className="about-me__caption">I am cool frontend developer</h3>

          <p className="about-me__experience">
            When real users have a slow experience on mobile, they&apos;re much
            less likely to find what they are looking for or purchase from you
            in the future. For many sites this equates to a huge missed
            opportunity, especially when more than half of visits are abandoned
            if a mobile page takes over 3 seconds to load.
          </p>

          <p className="about-me__initiatives">
            Last week, Google Search and Ads teams announced two new speed
            initiatives to help improve user-experience on the web.
          </p>

          <Link
            to={'registration'}
            spy={true}
            smooth={true}
            offset={-100}
            className="about-me__sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
