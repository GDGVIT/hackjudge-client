import React from 'react'
import PropTypes from 'prop-types'

import AdminLogin from '../components/admin-components/AdminLogin'
import ParticipantLogin from '../components/participant-components/ParticipantLogin'
import ParticipantRegister from '../components/participant-components/ParticipantRegister'

import '../styles/login.css'

import HackJudgeLogo from '../assets/HackJudgeLogo.svg'
import DSCLogo from '../assets/DSCLogo.svg'

const Login = ({ userData, handleUserData }) => {
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

  const handleToken = (newToken) => {
    console.log('updating', newToken)
    handleUserData({ ...userData, token: newToken })
  }

  const handleAuthId = (newAuthId) => {
    handleUserData({ ...userData, auth_id: newAuthId })
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
            handleAuthId={handleAuthId}
            handleToken={handleToken}
            handleUserName={handleUserName}
          />
        )}
        {userData.userType === 1 && (
          <ParticipantRegister
            userData={userData}
            handleUserType={handleUserType}
            handleUserEmail={handleUserEmail}
            handleUserPassword={handleUserPassword}
            handleUserName={handleUserName}
            handleAuthId={handleAuthId}
            handleToken={handleToken}
          />
        )}
        {userData.userType === 2 && (
          <AdminLogin
            userData={userData}
            handleUserType={handleUserType}
            handleUserEmail={handleUserEmail}
            handleUserPassword={handleUserPassword}
            handleAuthId={handleAuthId}
            handleToken={handleToken}
            handleUserName={handleUserName}
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
