import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import InputForm from '../common-components/InputForm'

const AdminLogin = ({ userData, handleUserEmail, handleUserPassword, handleUserType }) => {
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    history.push('/admin')
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
    </>
  )
}

AdminLogin.propTypes = {
  userData: PropTypes.object,
  handleUserEmail: PropTypes.func,
  handleUserPassword: PropTypes.func,
  handleUserType: PropTypes.func
}

export default AdminLogin
