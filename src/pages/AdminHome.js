import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Events from '../components/common-components/Events'
import NoEvents from '../components/admin-components/NoEvents'

import getAllEvents from '../utilities/getAllEvents'

import '../styles/adminHome.css'

const AdminHome = ({ userData }) => {
  const [events, setEvents] = useState([])
  const hook = () => {
    const events = getAllEvents(sessionStorage.getItem('token'))
    setEvents(events)
  }

  useEffect(hook, [])

  return (
    <div className='admin-home'>
      {events.length === 0 && (
        <NoEvents />
      )}
      {events.length !== 1 && (
        <Events events={events} isAdmin />
      )}
    </div>
  )
}

AdminHome.propTypes = {
  userData: PropTypes.object
}

export default AdminHome
