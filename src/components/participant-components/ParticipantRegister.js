import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import InputForm from '../common-components/InputForm'

import participantRegister from '../../utilities/participantRegister'

import validator from '../../utilities/validator'

const ParticipantRegister = ({ userData, handleUserName, handleUserEmail, handleUserPassword, handleUserType, handleAuthId, handleToken, handleLogin }) => {
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validator(userData.email)) {
      let response = await participantRegister(userData.email, userData.password, userData.name)
      if (response.status === 200) {
        response = response.data
        console.log(response)
        history.push('/home')
      } else {
        history.push('/')
      }
    } else {
      console.log('Invalid email')
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
    </>
  )
}

ParticipantRegister.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string
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
