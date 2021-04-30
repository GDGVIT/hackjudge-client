import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import InputForm from '../common-components/InputForm'
import LoginLoader from '../common-components/LoginLoader'
import LoginError from '../common-components/LoginError'

import { emailValidator } from '../../utilities/validator'
import api from '../../utilities/api'

const ParticipantLogin = ({
  userData,
  handleUserType,
  handleUserEmail,
  handleUserPassword,
  handleUserName,
  handleLogin
}) => {
  const history = useHistory()
  const [invalid, setInvalid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [animationState, setAnimationState] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setAnimationState(1)
    if (!emailValidator(userData.email)) {
      setErrorMessage('That doesn\'t look like an email to me')
      setInvalid(true)
      setAnimationState(0)
      return
    } else {
      setInvalid(false)
      setAnimationState(1)
    }

    setAnimationState(1)

    let response = await api('login', 'post', { email: userData.email, password: userData.password, isAdmin: false })
    console.log(response)
    if (response.status === 200) {
      setInvalid(false)
      response = response.data
      handleLogin(response.token, response.user.authId, 0, response.user.name)
      history.push('/home')
    } else if (response.status === 401 || response.status === 400) {
      setAnimationState(0)
      setErrorMessage('Invalid Credentials! Unauthorized')
      setInvalid(true)
    }
  }
  return (
    <>
      <h1 className='login-title'>Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <InputForm
          inputType='text'
          inputValue={userData.email}
          onChangeHandler={handleUserEmail}
          labelText='Email'
          placeholderText='user@domain.com'
        />
        <InputForm
          inputType='password'
          inputValue={userData.password}
          onChangeHandler={handleUserPassword}
          labelText='Password'
          placeholderText='Password'
        />
        <input className='login-button' type='submit' value='Sign In' />
      </form>
      <div className='user-type-login-button'>
        <button onClick={() => handleUserType(2)}>Admin?</button>
        {' // '}
        <button onClick={() => handleUserType(1)}>NewUser?</button>
      </div>
      <LoginLoader animationState={animationState} />
      {invalid && (
        <LoginError message={errorMessage} />
      )}
    </>
  )
}

ParticipantLogin.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    userType: PropTypes.number
  }),
  handleUserEmail: PropTypes.func,
  handleUserType: PropTypes.func,
  handleUserPassword: PropTypes.func,
  handleToken: PropTypes.func,
  handleAuthId: PropTypes.func,
  handleUserName: PropTypes.func,
  handleLogin: PropTypes.func
}

export default ParticipantLogin
