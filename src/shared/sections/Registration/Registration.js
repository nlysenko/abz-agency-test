/**
 *
 * Registration
 *
 */

import React from 'react'

import RegistrationForm from '@/shared/forms/RegistrationForm'

import './style.css'

const Registration = () => {
  return (
    <section className="registration" id="registration">
      <div className="container">
        <h2 className="registration__title">Register to get a work</h2>

        <p className="registration__text">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>

        <RegistrationForm />
      </div>
    </section>
  )
}

export default Registration
