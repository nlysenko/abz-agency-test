/**
 *
 * TopSection
 *
 */

import React from 'react'

import LogUpButton from '@/shared/buttons/LogUpButton'

import './style.css'

const TopSection = () => {
  return (
    <section className="top-section" id="top-section">
      <div className="container">
        <h1 className="top-section__header">
          Test assignment for Frontend Developer position
        </h1>

        <div className="top-section__specification">
          <span>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.{' '}
          </span>

          <span>
            Please be patient, we consider and respond to every application that
            meets minimum requirements. We look forward to your submission. Good
            luck!
          </span>
        </div>

        <LogUpButton />
      </div>
    </section>
  )
}

export default TopSection
