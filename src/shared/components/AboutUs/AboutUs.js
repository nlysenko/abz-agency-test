/**
 *
 * AboutUs
 *
 */

import React from 'react'

import Contacts from '@/shared/components/Contacts'
import Resources from '@/shared/components/Resources'

import useWindowWidth from '@/shared/hooks/useWindowWidth'

import './style.css'

const AboutUs = () => {
  const screenWidth = useWindowWidth()

  return (
    <div className="about-us">
      <div className="container">
        <div className="about-us__ineer">
          <Contacts />

          {screenWidth >= 768 ? <Resources /> : false}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
