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
    position: { value: '', options: [], error: '' },
    photo: { value: '', error: '' },
  }

  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]{2,60}$/,
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
        regEx: /^\+?3?8?(0[5-9][0-9]\d{7})$/,
        error: 'Invalid phone format. Should start with code of Ukraine +380',
      },
    },
    position: {
      required: true,
      validator: {
        regEx: /^[0-9]/,
        error: 'Invalid phone format',
      },
    },

    photo: {
      required: true,
      validator: {
        width: 70,
        height: 70,
        size: 5000000,
        error: {
          size: 'Size must not exceed 5MB',
          resolution: 'Resolution at least 70x70px',
        },
      },
    },
  }

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2))
  }

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  )

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  }

  return (
    <form className="registration-form" onSubmit={handleOnSubmit}>
      <div className="registration-form__inner">
        <div className="registration-form__form-group">
          <label className="registration-form__label" htmlFor="name">
            Name
          </label>

          <input
            className="registration-form__item"
            id="name"
            type="text"
            name="name"
            value={state.name.value}
            placeholder="Your name"
            onChange={handleOnChange}
          />

          {state.name.error && <p style={errorStyle}>{state.name.error}</p>}

          <p className="registration-form__assistive-text">Assistive text</p>
        </div>

        <div className="registration-form__form-group">
          <label className="registration-form__label" htmlFor="email">
            Email
          </label>

          <input
            className="registration-form__item"
            id="email"
            name="email"
            type="email"
            value={state.email.value}
            placeholder="Your email"
            onChange={handleOnChange}
          />

          {state.email.error && <p style={errorStyle}>{state.email.error}</p>}

          <p className="registration-form__assistive-text">Assistive text</p>
        </div>

        <div className="registration-form__form-group">
          <label className="registration-form__label" htmlFor="phone">
            Phone
          </label>

          <input
            className="registration-form__item"
            id="phone"
            name="phone"
            type="tel"
            value={state.phone.value}
            placeholder="Your phone"
            onChange={handleOnChange}
          />

          {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}

          <p className="registration-form__assistive-text">Assistive text</p>
        </div>

        <div className="registration-form__form-group">
          <div className="registration-form__position-wrapper">
            <select
              className="registration-form__positions"
              id="position"
              name="position"
              value={state.position.value}
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

          <p className="registration-form__assistive-text">Assistive text</p>
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

            <span className="registration-form__file-name">
              Upload your photo
            </span>

            <i className="registration-form__upload-icon-wrapper">
              <UploadIcon className="registration-form__upload-icon" />
            </i>
          </label>

          {state.photo.error && <p style={errorStyle}>{state.photo.error}</p>}

          <p className="registration-form__assistive-text">
            File format jpg up to 5 MB, the minimum size of 70x70px
          </p>
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
