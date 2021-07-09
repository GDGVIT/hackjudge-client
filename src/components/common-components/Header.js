import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'

import HackJudgeLogo from '../../assets/HackJudgeLogo.svg'

const Header = ({ currentPage, createRef, currentRef, pastRef, upcomingRef }) => {
  const headerClass = `header header-${currentPage}`

  const [expand, setExpand] = useState(false)

  const logout = () => {
    sessionStorage.clear()
  }

  let userType = sessionStorage.getItem('userType')
  if (userType == null) {
    userType = '1'
  }

  const isSmallScreen = useMediaQuery({ query: '(max-width: 956px)' })

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
        {userType === '2' && (
          <li className={isSmallScreen ? 'small-screen-links' : 'links'}>
            {isSmallScreen && (
              <IconContext.Provider value={{ color: 'white', size: '2.5rem' }}>
                <GiHamburgerMenu className='hamburger' onClick={() => setExpand((curr) => !curr)} />
              </IconContext.Provider>
            )}
            <button show={isSmallScreen && expand ? 'show' : 'hide'} className={isSmallScreen ? 'small-screen-button' : ''} ref={currentRef}>Current Events</button>
            <button show={isSmallScreen && expand ? 'show' : 'hide'} className={isSmallScreen ? 'small-screen-button' : ''} ref={upcomingRef}>Upcoming Events</button>
            <button show={isSmallScreen && expand ? 'show' : 'hide'} className={isSmallScreen ? 'small-screen-button' : ''} ref={pastRef}>Past Events</button>
            <button show={isSmallScreen && expand ? 'show' : 'hide'} className={isSmallScreen ? 'small-screen-button' : ''} ref={createRef}>Create Event</button>
            <div show={isSmallScreen && expand ? 'show' : 'hide'} className={isSmallScreen ? 'small-screen-logout' : 'logout-button'}>
              <Link to='/' onClick={logout}>Logout</Link>
            </div>
          </li>
        )}
        {userType !== '2' && (
          <li className='links'>
            <div className='logout-button'>
              <Link to='/' onClick={logout}>Logout</Link>
            </div>
          </li>
        )}
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
