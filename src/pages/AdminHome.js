import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import Events from '../components/common-components/Events'
import NoEvents from '../components/admin-components/NoEvents'
import CreateEvent from '../components/admin-components/CreateEvent'

import getAllEvents from '../utilities/getAllEvents'

import '../styles/adminHome.css'

const AdminHome = ({ userData, currentRef, createRef, upcomingRef, pastRef }) => {
  const history = useHistory()

  const [events, setEvents] = useState([])
  const [overlayType, setOverlayType] = useState(0)

  const hook = async () => {
    if (!sessionStorage.getItem('logged_in') === 'true') {
      history.push('/')
    }
    const token = sessionStorage.getItem('token')
    const newEvents = await getAllEvents(token)
    setEvents(newEvents)
  }

  useEffect(hook, [])
  if (createRef.current) {
    createRef.current.onclick = () => {
      setOverlayType(1)
    }
  }
  if (currentRef.current) {
    currentRef.current.onclick = () => {
      setOverlayType(0)
    }
  }
  if (pastRef.current) {
    pastRef.current.onclick = () => {
      setOverlayType(2)
    }
  }
  if (upcomingRef.current) {
    upcomingRef.current.onclick = () => {
      setOverlayType(3)
    }
  }
  return (
    <div className='admin-home'>
      {overlayType === 1 && (
        <CreateEvent />
      )}
      {overlayType === 0 && events.length === 0 && (
        <NoEvents />
      )}
      {overlayType === 0 && events.length !== 1 && (
        <Events events={events} isAdmin />
      )}
    </div>
  )
}

AdminHome.propTypes = {
  userData: PropTypes.object,
  createRef: PropTypes.any,
  currentRef: PropTypes.any,
  pastRef: PropTypes.any,
  upcomingRef: PropTypes.any
}

export default AdminHome
