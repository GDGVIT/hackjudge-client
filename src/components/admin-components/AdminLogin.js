import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import InvalidCredentials from '../common-components/InvalidCredentials'
import InputForm from '../common-components/InputForm'

import login from '../../utilities/login'

const AdminLogin = ({ userData, handleUserEmail, handleUserPassword, handleUserType, handleUserName, handleLogin }) => {
  const history = useHistory()
  const [invalid, setInvalid] = useState(false)

  const handleInvalid = () => {
    setInvalid(!invalid)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await login(userData.email, userData.password, true)
    if (response.status === 200) {
      response = response.data
      handleUserName(response.user.name)
      handleLogin(response.token, response.user.authId, userData.userType)
      history.push('/admin')
    } else if (response.status === 401) {
      handleInvalid()
    }
  }

  return (
    <>
      <div className='login-title'>Admin Login</div>
      <form onSubmit={handleSubmit} className='login-form'>
        <InputForm
          inputType='text'
          inputValue={userData.email}
          labelText='Email: '
          onChangeHandler={handleUserEmail}
        />
        <InputForm
          inputType='password'
          inputValue={userData.password}
          labelText='Password: '
          onChangeHandler={handleUserPassword}
        />
        <input type='submit' className='login-button' value='Login' />
      </form>
      <div className='user-type-login-button'>
        <button onClick={() => handleUserType(0)}>Not Admin?</button>
      </div>
      {invalid && (
        <InvalidCredentials />
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
