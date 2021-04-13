import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import InputForm from '../common-components/InputForm'
import LoginLoader from '../common-components/LoginLoader'
import LoginError from '../common-components/LoginError'

import login from '../../utilities/login'
import validator from '../../utilities/validator'

const AdminLogin = ({ userData, handleUserEmail, handleUserPassword, handleUserType, handleUserName, handleLogin }) => {
  const history = useHistory()
  const [invalid, setInvalid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [animationState, setAnimationState] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setAnimationState(1)
    if (!validator(userData.email)) {
      setErrorMessage('That doesn\'t look like an email to me')
      setInvalid(true)
      setAnimationState(0)
      return
    } else {
      setInvalid(false)
      setAnimationState(1)
    }
    setAnimationState(1)
    let response = await login(userData.email, userData.password, true)
    if (response.status === 200) {
      setInvalid(false)
      response = response.data
      handleUserName(response.user.name)
      handleLogin(response.token, response.user.authId, 2)
      history.push('/admin')
    } else if (response.status === 401) {
      setAnimationState(0)
      setErrorMessage('Invalid Credentials! Unauthorized')
      setInvalid(true)
    }
  }

  return (
    <>
      <h1 className='login-title'>Admin Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <InputForm
          inputType='text'
          inputValue={userData.email}
          labelText='Email'
          onChangeHandler={handleUserEmail}
        />
        <InputForm
          inputType='password'
          inputValue={userData.password}
          labelText='Password'
          onChangeHandler={handleUserPassword}
        />
        <input type='submit' className='login-button' value='Login' />
      </form>
      <div className='user-type-login-button'>
        <button onClick={() => handleUserType(0)}>Not Admin?</button>
      </div>
      <LoginLoader animationState={animationState} />
      {invalid && (
        <LoginError message={errorMessage} />
      )}
    </>
  )
}

AdminLogin.propTypes = {
  userData: PropTypes.object,
  handleUserEmail: PropTypes.func,
  handleUserPassword: PropTypes.func,
  handleUserType: PropTypes.func,
  handleToken: PropTypes.func,
  handleAuthId: PropTypes.func,
  handleUserName: PropTypes.func,
  handleLogin: PropTypes.func
}

export default AdminLogin
