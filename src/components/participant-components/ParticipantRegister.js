import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import InputForm from '../common-components/InputForm'
import LoginError from '../common-components/LoginError'

import participantRegister from '../../utilities/participantRegister'
import validator from '../../utilities/validator'

const ParticipantRegister = ({ userData, handleUserName, handleUserEmail, handleUserPassword, handleUserType, handleLogin }) => {
  const history = useHistory()
  const [invalid, setInvalid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validator(userData.email)) {
      setErrorMessage('That doesn\'t look like an email to me')
      setInvalid(true)
      return
    } else {
      setInvalid(false)
    }
    let response = await participantRegister(userData.email, userData.password, userData.name)
    if (response.status === 200) {
      response = response.data
      console.log(response)
      handleLogin(response.token, response.user.authId, 1)
      history.push('/home')
    } else if (response.status === 422) {
      console.log(response)
      setInvalid(true)
      setErrorMessage('Can\'t make an account with those filthy details')
    }
  }

  return (
    <>
      <div className='login-title'>Create Account</div>
      <form onSubmit={handleSubmit} className='login-form'>
        <InputForm
          labelText='Name'
          inputType='text'
          inputValue={userData.name}
          onChangeHandler={handleUserName}
        />
        <InputForm
          labelText='Email'
          inputType='text'
          inputValue={userData.email}
          onChangeHandler={handleUserEmail}
        />
        <InputForm
          labelText='Password'
          inputType='password'
          inputValue={userData.password}
          onChangeHandler={handleUserPassword}
        />
        <input className='login-button' type='submit' value='Register' />
      </form>
      <div className='user-type-login-button'>
        <button onClick={() => handleUserType(2)}>Admin?</button>
        {' // '}
        <button onClick={() => handleUserType(0)}>ExistingUser?</button>
      </div>
      {invalid && (
        <LoginError message={errorMessage} />
      )}
    </>
  )
}

ParticipantRegister.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    userType: PropTypes.number
  }),
  handleUserEmail: PropTypes.func,
  handleUserType: PropTypes.func,
  handleUserPassword: PropTypes.func,
  handleUserName: PropTypes.func,
  handleToken: PropTypes.func,
  handleAuthId: PropTypes.func,
  handleLogin: PropTypes.func
}

export default ParticipantRegister
