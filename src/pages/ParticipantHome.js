import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import ParticipantEvents from '../components/participant-components/ParticipantEvents'

import '../styles/participantHome.css'

import getAllEvents from '../utilities/getAllEvents'

const ParticipantHome = ({ currentRef, upcomingRef }) => {
  const history = useHistory()
  const [events, setEvents] = useState()

  const hook = async () => {
    if (!sessionStorage.getItem('logged_in') === 'true') {
      history.push('/')
    }

    const token = sessionStorage.getItem('token')
    if (token === 'null') {
      history.push('/')
    }

    let newEvents = await getAllEvents(token)
    newEvents = newEvents.map(event => ({
      ...event,
      unixStartTime: Date.parse(event.dateOfEvent),
      unixEndTime: Date.parse(event.endOfEvent)
    }))
    console.log(newEvents)
    setEvents(newEvents)
  }

  useEffect(hook, [])
  return (
    <div className='participant-home'>
      <ParticipantEvents events={events} />
    </div>
  )
}

ParticipantHome.propTypes = {
  currentRef: PropTypes.any,
  upcomingRef: PropTypes.any
}

export default ParticipantHome
