import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import HackJudgeLogo from '../../assets/HackJudgeLogo.svg'

const Header = ({ currentPage }) => {
  const headerClass = `header header-${currentPage}`

  return (
    <header className={headerClass}>
      <ul>
        <li>
          <img
            className='hackJudge-logo '
            src={HackJudgeLogo}
            alt='HackJudgeLogo'
          />
        </li>
        <li className='logout-button'>
          <Link to='/'>Logout</Link>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  currentPage: PropTypes.string
}

export default Header
