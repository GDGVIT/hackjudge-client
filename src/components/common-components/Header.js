import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import HackJudgeLogo from '../../assets/HackJudgeLogo.svg'

const Header = ({ currentPage, createRef, currentRef, pastRef, upcomingRef }) => {
  const headerClass = `header header-${currentPage}`

  const logout = () => {
    localStorage.clear()
  }

  let userType = localStorage.getItem('userType')
  if (userType == null) {
    userType = '1'
  }

  return (
    <nav className={headerClass}>
      <ul className='header-brr'>
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
                className='hackJudge-logo'
                src={HackJudgeLogo}
                alt='HackJudgeLogo'
              />
            </Link>
          )}
        </li>

        <li className='links'>
          {userType === '2' && (
            <>
              <button ref={currentRef}>Current Events</button>
              <button ref={upcomingRef}>Upcoming Events</button>
              <button ref={pastRef}>Past Events</button>
              <button ref={createRef}>Create Event</button>
              <Link to='/' onClick={logout}>Logout</Link>
            </>
          )}
          {userType !== '2' && (
            <div className='logout-button'>
              <Link to='/' onClick={logout}>Logout</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

Header.propTypes = {
  currentPage: PropTypes.string,
  createRef: PropTypes.any,
  currentRef: PropTypes.any,
  pastRef: PropTypes.any,
  upcomingRef: PropTypes.any
}

export default Header
