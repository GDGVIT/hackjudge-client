import React from 'react'

import PropTypes from 'prop-types'

const LoginLoader = ({ animationState }) => {
  const circleClass = 'login-circle login-circle-phasing'
  return (
    <div className='loader-box'>
      {animationState === 1 && (
        <div className={circleClass} />
      )}
    </div>
  )
}

LoginLoader.propTypes = {
  animationState: PropTypes.number
}

export default LoginLoader
