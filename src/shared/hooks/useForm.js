/**
 *
 * useForm
 *
 */

import { useState, useEffect, useCallback } from 'react'

function useForm(stateSchema, validationSchema = {}, callback) {
  const [state, setState] = useState(stateSchema)
  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)

  // Disable button in initial render.
  useEffect(() => {
    setDisable(true)
  }, [])

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateState())
    }
  }, [state, isDirty])

  // Used to disable submit button if there's an error in state
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive memory leaked
  // in every re-render in component
  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some((key) => {
      const isInputFieldRequired = validationSchema[key].required
      const stateValue = state[key].value // state value
      const stateError = state[key].error // state error

      return (isInputFieldRequired && !stateValue) || stateError
    })

    return hasErrorInState
  }, [state, validationSchema])

  // Used to handle every changes in every input
  const handleOnChange = useCallback(
    (event) => {
      const name = event.target.name
      let error = ''

      if (name !== 'photo') {
        setIsDirty(true)

        const value = event.target.value

        if (validationSchema[name].required) {
          if (!value) {
            error = 'This is required field.'
          }
        }

        if (
          validationSchema[name].validator !== null &&
          typeof validationSchema[name].validator === 'object'
        ) {
          if (value && !validationSchema[name].validator.regEx.test(value)) {
            error = validationSchema[name].validator.error
          }
        }

        setState((prevState) => ({
          ...prevState,
          [name]: { value, error },
        }))
      } else {
        const photo = event.target.files[0]

        if (photo) {
          if (photo.size > 5242880) {
            let error = 'Size must not exceed 5MB'

            setState((prevState) => ({
              ...prevState,
              [name]: { error },
            }))
          } else {
            const reader = new FileReader()

            reader.onload = () => {
              let img = document.createElement('img')

              img.src = reader.result

              img.onload = () => {
                let width = img.width
                let height = img.height

                if (width < 70 || height < 70) {
                  let error = 'Resolution at least 70x70px'

                  setState((prevState) => ({
                    ...prevState,
                    [name]: { error },
                  }))
                } else {
                  let value = reader.result

                  setState((prevState) => ({
                    ...prevState,
                    [name]: { name: photo.name, value },
                  }))
                }
              }
            }

            reader.onerror = () => {
              let error = `Failed to read file! ${reader.error}`

              setState((prevState) => ({
                ...prevState,
                [name]: { error },
              }))
            }

            reader.readAsDataURL(photo)
          }
        }
      }
    },
    [validationSchema]
  )

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault()

      // Make sure that validateState returns false
      // Before calling the submit callback function
      if (!validateState()) {
        callback(state)
      }
    },
    [state]
  )

  return { state, disable, handleOnChange, handleOnSubmit }
}

export default useForm
