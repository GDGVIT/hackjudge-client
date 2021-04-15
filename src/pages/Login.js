import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import AdminLogin from '../components/admin-components/AdminLogin'
import ParticipantLogin from '../components/participant-components/ParticipantLogin'
import ParticipantRegister from '../components/participant-components/ParticipantRegister'

import '../styles/login.css'

import HackJudgeLogo from '../assets/HackJudgeLogo.svg'
import DSCLogo from '../assets/DSCLogo.svg'

const Login = ({ userData, handleUserData }) => {
  const history = useHistory()
  const hook = () => {
    const token = sessionStorage.getItem('token')
    const authId = sessionStorage.getItem('auth_id')
    const userType = sessionStorage.getItem('user_type')
    if (token !== null && authId !== null) {
      handleUserData({ ...userData, userType: userType, logged_in: true })
      if (userData.userType === 2) {
        history.push('/admin')
      } else {
        history.push('/home')
      }
    }
  }

  useEffect(hook, [])

  const handleUserType = (newUserType) => {
    handleUserData({ ...userData, userType: newUserType })
  }

  const handleUserName = (newName) => {
    handleUserData({ ...userData, name: newName })
  }

  const handleUserEmail = (newEmail) => {
    handleUserData({ ...userData, email: newEmail })
  }

  const handleUserPassword = (newPassword) => {
    handleUserData({ ...userData, password: newPassword })
  }

  const handleLogin = (newToken, newAuthId, userType, userName) => {
    handleUserData({ ...userData, email: '', password: '', name: '', logged_in: true })
    sessionStorage.setItem('token', newToken)
    sessionStorage.setItem('auth_id', newAuthId)
    sessionStorage.setItem('userType', userType)
    sessionStorage.setItem('logged_id', 'true')
    sessionStorage.setItem('userName', userName)
  }

  return (
    <div className='login-page'>
      <header className='loginHeader'>
        <ul className='loginHeader-ul'>
          <li className='login-hackJudge-logo'>
            <img
              className='hackJudge-logo '
              src={HackJudgeLogo}
              alt='HackJudgeLogo'
            />
          </li>
          <li className='login-dsc-logo'>
            <img
              className='dsc-logo '
              src={DSCLogo}
              alt='HackJudgeLogo'
            />
          </li>
        </ul>
      </header>
      <div className='login-form-container'>
        {userData.userType === 0 && (
          <ParticipantLogin
            userData={userData}
            handleUserType={handleUserType}
            handleUserEmail={handleUserEmail}
            handleUserPassword={handleUserPassword}
            handleUserName={handleUserName}
            handleLogin={handleLogin}
          />
        )}
        {userData.userType === 1 && (
          <ParticipantRegister
            userData={userData}
            handleUserType={handleUserType}
            handleUserEmail={handleUserEmail}
            handleUserPassword={handleUserPassword}
            handleUserName={handleUserName}
            handleLogin={handleLogin}
          />
        )}
        {userData.userType === 2 && (
          <AdminLogin
            userData={userData}
            handleUserType={handleUserType}
            handleUserEmail={handleUserEmail}
            handleUserPassword={handleUserPassword}
            handleUserName={handleUserName}
            handleLogin={handleLogin}
          />
        )}
      </div>
    </div>
  )
}

Login.propTypes = {
  userData: PropTypes.object,
  handleUserData: PropTypes.func
}

export default Login
