import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import InputForm from '../common-components/InputForm'

const ParticipantLogin = ({
  userData,
  handleUserType,
  handleUserEmail,
  handleUserPassword
}) => {
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    history.push('/home')
  }

  return (
    <>
      <div className='login-title'>Login</div>
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
        <input className='login-button' type='submit' value='Login' />
      </form>
      <div className='user-type-login-button'>
        <button onClick={() => handleUserType(2)}>Admin?</button>
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
  handleUserType: PropTypes.bool,
  handleUserPassword: PropTypes.func
}

export default ParticipantLogin
