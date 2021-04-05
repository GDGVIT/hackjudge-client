import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import Events from '../components/common-components/Events'
import NoEvents from '../components/admin-components/NoEvents'

import getAllEvents from '../utilities/getAllEvents'

import '../styles/adminHome.css'

const AdminHome = ({ userData }) => {
  const history = useHistory()

  const [events, setEvents] = useState([])

  const hook = async () => {
    if (!userData.logged_in) {
      history.push('/')
    }
    const token = sessionStorage.getItem('token')
    const newEvents = await getAllEvents(token)
    setEvents(newEvents)
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
