import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import HackJudgeLogo from '../../assets/HackJudgeLogo.svg'

const Header = ({ currentPage }) => {
  const headerClass = `header header-${currentPage}`

  const logout = () => {
    sessionStorage.clear()
  }
  let userType = sessionStorage.getItem('userType')
  if (userType == null) {
    userType = '1'
  }
  return (
    <header className={headerClass}>
      <ul>
        <li>
          {userType === '2' && (
            <Link to='/admin'>
              <img
                className='hackJudge-logo '
                src={HackJudgeLogo}
                alt='HackJudgeLogo'
              />
            </Link>
          )}
          {userType !== '2' && (
            <Link to='/home'>
              <img
                className='hackJudge-logo '
                src={HackJudgeLogo}
                alt='HackJudgeLogo'
              />
            </Link>
          )}
        </li>

        <li className='links'>
          {userType === '2' && (
            <>
              <button>Current Events</button>
              <button>Upcoming Events</button>
              <button>Past Events</button>
              <button>Create Event</button>
              <Link to='/' onClick={logout}>Logout</Link>
            </>
          )}
          {userType !== '2' && (
            <>
              <button>Current Events</button>
              <button>Upcoming Events</button>
              <button>Past Events</button>
              <Link to='/' onClick={logout}>Logout</Link>
            </>
          )}
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  currentPage: PropTypes.string
}

export default Header
