import React from 'react'
import PropTypes from 'prop-types'

const LoginError = ({ message }) => {
  return (
    <div className='login-error'>
      {message}
    </div>
  )
}

LoginError.propTypes = {
  message: PropTypes.string
}

export default LoginError
