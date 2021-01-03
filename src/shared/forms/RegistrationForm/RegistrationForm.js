/**
 *
 * RegistrationForm
 *
 */

import React, { useState } from 'react'

import UploadIcon from 'assets/svg/upload.svg'

import useForm from '@/shared/hooks/useForm'

import './style.css'

const RegistrationForm = () => {
  const [positions, setPositions] = useState([
    { name: 'Select your position', id: 1 },
  ])
  const [loadingPositions, setLoadingPositions] = useState(false)
  const [positionsIsLoaded, setPositionsIsLoaded] = useState(false)
  const [errorLoadPositions, setErrorLoadPositions] = useState(false)

  function getPositions() {
    if (!positionsIsLoaded) {
      setLoadingPositions(true)

      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then((res) => res.json())
        .then(
          (result) => {
            setPositionsIsLoaded(true)
            setLoadingPositions(false)
            setPositions(result.positions)
          },

          (error) => {
            setLoadingPositions(false)
            setPositionsIsLoaded(true)
            setErrorLoadPositions(error)
          }
        )
    }
  }

  const stateSchema = {
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    phone: { value: '', error: '' },
    position_id: { value: '', options: [], error: '' },
    photo: { name: '', value: '', error: '' },
  }

  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]?([a-zA-Z0-9]|\s(?!\s)){2,60}[^\s]$/,
        error: 'Should be 2-60 characters',
      },
    },
    email: {
      required: true,
      validator: {
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        error: 'Invalid email format',
      },
    },
    phone: {
      required: true,
      validator: {
        regEx: /^[+]{0,1}380([0-9]{9})$/,
        error: 'Invalid phone format. Should start with code of Ukraine +380',
      },
    },
    position_id: {
      required: true,
      validator: {
        regEx: /^[1-9][0-9]*$/,
        error: 'Invalid positions format',
      },
    },

    photo: {
      required: true,
      error: '',
    },
  }

  async function onSubmitForm() {
    let token = ''

    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.success) {
            token = result.token
          }
        },

        (error) => {
          console.log('error: ', error)
        }
      )

    if (token) {
      const registrationForm = document.getElementById('registration-form')
      const formData = new FormData(registrationForm)

      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: {
          Token: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert(data.message)

            document.location.reload()
          }
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  )

  return (
    <form
      className="registration-form"
      id="registration-form"
      onSubmit={handleOnSubmit}
    >
      <div className="registration-form__inner">
        <div className="registration-form__form-group">
          <label
            className={`registration-form__label ${
              state.name.error ? 'registration-form__label--error' : ''
            }`}
            htmlFor="name"
          >
            Name
          </label>

          <input
            className={`registration-form__item ${
              state.name.error ? 'registration-form__item--error' : ''
            }`}
            type="text"
            name="name"
            value={state.name.value}
            placeholder="Your name"
            onChange={handleOnChange}
          />

          {state.name.error ? (
            <p className="registration-form__assistive-text registration-form__assistive-text--error">
              {state.name.error}
            </p>
          ) : !state.name.value ? (
            <p className="registration-form__assistive-text">Enter your name</p>
          ) : (
            false
          )}
        </div>

        <div className="registration-form__form-group">
          <label
            className={`registration-form__label ${
              state.email.error ? 'registration-form__label--error' : ''
            }`}
            htmlFor="email"
          >
            Email
          </label>

          <input
            className={`registration-form__item ${
              state.email.error ? 'registration-form__item--error' : ''
            }`}
            name="email"
            type="email"
            value={state.email.value}
            placeholder="Your email"
            onChange={handleOnChange}
          />

          {state.email.error ? (
            <p className="registration-form__assistive-text registration-form__assistive-text--error">
              {state.email.error}
            </p>
          ) : !state.email.value ? (
            <p className="registration-form__assistive-text">
              Enter your email
            </p>
          ) : (
            false
          )}
        </div>

        <div className="registration-form__form-group">
          <label
            className={`registration-form__label ${
              state.phone.error ? 'registration-form__label--error' : ''
            }`}
            htmlFor="phone"
          >
            Phone
          </label>

          <input
            className={`registration-form__item ${
              state.phone.error ? 'registration-form__item--error' : ''
            }`}
            name="phone"
            type="tel"
            value={state.phone.value}
            placeholder="Your phone"
            onChange={handleOnChange}
          />

          {state.phone.error ? (
            <p className="registration-form__assistive-text registration-form__assistive-text--error">
              {state.phone.error}
            </p>
          ) : !state.phone.value ? (
            <p className="registration-form__assistive-text">
              Enter your phone
            </p>
          ) : (
            false
          )}
        </div>

        <div className="registration-form__form-group">
          <div className="registration-form__position-wrapper">
            <select
              className="registration-form__positions"
              name="position_id"
              value={state.position_id.value}
              onChange={handleOnChange}
              onClick={getPositions}
            >
              {positions.map((position) => {
                return (
                  <option
                    className="registration-form__position-item"
                    key={position.id}
                    value={position.id}
                  >
                    {position.name}
                  </option>
                )
              })}

              {loadingPositions ? (
                <option className="registration-form__position-item">
                  ... loading
                </option>
              ) : (
                false
              )}
            </select>
          </div>

          {errorLoadPositions ? (
            <p className="registration-form__position-item">
              {errorLoadPositions.message}
            </p>
          ) : (
            false
          )}

          {state.position_id.error ? (
            <p className="registration-form__assistive-text registration-form__assistive-text--error">
              {state.position.error}
            </p>
          ) : !state.position_id.value ? (
            <p className="registration-form__assistive-text">
              Select your position
            </p>
          ) : (
            false
          )}
        </div>

        <div className="registration-form__form-group">
          <label className="registration-form__file-wrapper" htmlFor="photo">
            <input
              className="registration-form__file"
              id="photo"
              name="photo"
              type="file"
              accept="image/jpeg,image/jpg"
              onChange={handleOnChange}
            />

            <span
              className={`registration-form__file-placeholder ${
                state.photo.error
                  ? 'registration-form__file-placeholder--error'
                  : ''
              }`}
            >
              {!state.photo.name ? `Upload your photo` : state.photo.name}
            </span>

            <i className="registration-form__upload-icon-wrapper">
              <UploadIcon className="registration-form__upload-icon" />
            </i>
          </label>

          {state.photo.error ? (
            <p className="registration-form__assistive-text registration-form__assistive-text--error">
              {state.photo.error}
            </p>
          ) : !state.photo.value ? (
            <p className="registration-form__assistive-text">
              File format jpg up to 5 MB, the minimum size of 70x70px
            </p>
          ) : (
            false
          )}
        </div>
      </div>

      <button
        className="registration-form__sign-up-btn"
        type="submit"
        disabled={disable}
      >
        Sign Up
      </button>
    </form>
  )
}

export default RegistrationForm
