import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import HackJudgeLogo from '../../assets/HackJudgeLogo.svg'

const Header = ({ currentPage }) => {
  const headerClass = `header header-${currentPage}`

  const logout = () => {
    sessionStorage.clear()
  }

  return (
    <header className={headerClass}>
      <ul>
        <li>
          <Link to='/admin'>
            <img
              className='hackJudge-logo '
              src={HackJudgeLogo}
              alt='HackJudgeLogo'
            />
          </Link>
        </li>

        <li className='links'>
          <Link to='/admin'>Current Events</Link>
          <Link to='/admin'>Upcoming Events</Link>
          <Link to='/admin'>Past Events</Link>
          <Link to='/admin'>Create Event</Link>
          <Link to='/' onClick={logout}>Logout</Link>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  currentPage: PropTypes.string
}

export default Header
