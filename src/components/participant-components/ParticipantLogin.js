import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import InputForm from '../common-components/InputForm'

import login from '../../utilities/login'

const ParticipantLogin = ({
  userData,
  handleUserType,
  handleUserEmail,
  handleUserPassword,
  handleUserName,
  handleLogin
}) => {
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await login(userData.email, userData.password, false)
    if (response.status === 200) {
      response = response.data
      handleUserName(response.user.name)
      handleLogin(response.token, response.user.authId)
      console.log('userdata:', userData)
      history.push('/home')
    } else {
      history.push('/')
    }
  }
  return (
    <>
      <div className='login-title'>Start Hacking</div>
      <form onSubmit={handleSubmit} className='login-form'>
        <InputForm
          inputType='text'
          inputValue={userData.email}
          onChangeHandler={handleUserEmail}
          labelText='Email: '
        />
        <InputForm
          inputType='password'
          inputValue={userData.password}
          onChangeHandler={handleUserPassword}
          labelText='Password: '
        />
        <input className='login-button' type='submit' value='Sign In' />
      </form>
      <div className='user-type-login-button'>
        <button onClick={() => handleUserType(2)}>Admin?</button>
        {' // '}
        <button onClick={() => handleUserType(1)}>NewUser?</button>
      </div>
    </>
  )
}

ParticipantLogin.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
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
