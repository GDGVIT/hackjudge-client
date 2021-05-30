import React, { useEffect, Suspense } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import ParticipantLogin from '../components/participant-components/ParticipantLogin'

import '../styles/login.css'

import HackJudgeLogo from '../assets/HackJudgeLogo.svg'
import DSCLogo from '../assets/DSCLogo.svg'

const AdminLogin = React.lazy(() => import('../components/admin-components/AdminLogin.js'))
const ParticipantRegister = React.lazy(() => import('../components/participant-components/ParticipantRegister'))

const Login = ({ userData, handleUserData }) => {
  const history = useHistory()
  const hook = () => {
    const token = localStorage.getItem('token')
    const authId = localStorage.getItem('auth_id')
    const userType = localStorage.getItem('user_type')
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
    localStorage.setItem('token', newToken)
    localStorage.setItem('auth_id', newAuthId)
    localStorage.setItem('userType', userType)
    localStorage.setItem('logged_id', 'true')
    localStorage.setItem('userName', userName)
  }

  return (
    <div className='login-page'>
      <header className='loginHeader'>
        <ul className='loginHeader-ul'>
          <li className='login-hackJudge-logo'>
            <img
              className='hackJudge-logo '
              src={HackJudgeLogo}
              alt='HackJudge'
            />
          </li>
          <li className='login-dsc-logo'>
            <img
              className='dsc-logo '
              src={DSCLogo}
              alt='DSC'
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
          <Suspense fallback={<div>Loading...</div>}>
            <ParticipantRegister
              userData={userData}
              handleUserType={handleUserType}
              handleUserEmail={handleUserEmail}
              handleUserPassword={handleUserPassword}
              handleUserName={handleUserName}
              handleLogin={handleLogin}
            />
          </Suspense>
        )}
        {userData.userType === 2 && (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminLogin
              userData={userData}
              handleUserType={handleUserType}
              handleUserEmail={handleUserEmail}
              handleUserPassword={handleUserPassword}
              handleUserName={handleUserName}
              handleLogin={handleLogin}
            />
          </Suspense>
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
