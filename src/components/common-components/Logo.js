import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/sharedStyles.css'

const Logo = ({ text }) => {
  return (
    <div className='logo-container'>
      {text}
    </div>
  )
}

Logo.propTypes = {
  text: PropTypes.string
}

export default Logo
