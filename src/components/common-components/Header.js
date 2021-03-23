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
          <Link to='/admin'>
            <img
              className='hackJudge-logo '
              src={HackJudgeLogo}
              alt='HackJudgeLogo'
            />
          </Link>
        </li>

        <li className='links'>
          <Link to='/admin-home'>Current Events</Link>
          <Link to='/upcoming-events'>Upcoming Events</Link>
          <Link to='/past-events'>Past Events</Link>
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
