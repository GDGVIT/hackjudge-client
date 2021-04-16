import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import Events from '../components/admin-components/Events'
import NoEvents from '../components/admin-components/NoEvents'
import CreateEvent from '../components/admin-components/CreateEvent'

import getAllEvents from '../utilities/getAllEvents'

import '../styles/adminHome.css'

const AdminHome = ({ userData, currentRef, createRef, upcomingRef, pastRef }) => {
  const history = useHistory()

  const [events, setEvents] = useState({
    currentEvents: [],
    pastEvents: [],
    upcomingEvents: []
  })
  const [overlayType, setOverlayType] = useState(0)

  const hook = async () => {
    if (!sessionStorage.getItem('logged_in') === 'true') {
      history.push('/')
    }
    if (sessionStorage.getItem('userType') !== '2') {
      history.push('/')
      sessionStorage.clear()
    }

    const token = sessionStorage.getItem('token')
    let newEvents = await getAllEvents(token)
    newEvents = newEvents.map(event => ({ ...event, dateOfEvent: Date.parse(event.dateOfEvent), endOfEvent: Date.parse(event.endOfEvent) }))
    const currDate = Date.now()
    console.log(currDate)
    const currEvents = newEvents.filter(event => {
      return ((event.dateOfEvent <= currDate) && (event.endOfEvent > currDate))
    })
    const pasEvents = newEvents.filter(event => {
      return (event.endOfEvent < currDate)
    })
    const upcomEvents = newEvents.filter(event => {
      return (event.dateOfEvent > currDate)
    })
    setEvents({ currentEvents: currEvents, pastEvents: pasEvents, upcomingEvents: upcomEvents })
    console.log(newEvents)
    console.log(events)
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
      {overlayType === 0 && events.currentEvents.length === 0 && (
        <NoEvents />
      )}
      {overlayType === 0 && events.currentEvents.length !== 0 && (
        <Events events={events.currentEvents} isAdmin referrer={overlayType} />
      )}
      {overlayType === 2 && events.pastEvents.length === 0 && (
        <NoEvents />
      )}
      {overlayType === 2 && events.pastEvents.length !== 0 && (
        <Events events={events.pastEvents} isAdmin referrer={overlayType} />
      )}
      {overlayType === 3 && events.upcomingEvents.length === 0 && (
        <NoEvents />
      )}
      {overlayType === 3 && events.upcomingEvents.length !== 0 && (
        <Events events={events.upcomingEvents} isAdmin referrer={overlayType} />
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
