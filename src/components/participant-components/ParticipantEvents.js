
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ParticipantEvent from './ParticipantEvent'

import isInTeam from '../../utilities/isInTeam'

const ParticipantEvents = ({ events }) => {
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [unregisteredEvents, setUnregisterdEvents] = useState([])

  const hook = async () => {
    const tempRegEvents = []
    const tempUnregEvents = []
    if (events && events.length !== 0) {
      events.forEach(async (event) => {
        const response = await isInTeam(sessionStorage.getItem('token'), event.eventId)
        if (response.status !== 200) {
          console.log(response)
        } else if (response.data.message === 'You are not in a team') {
          tempUnregEvents.push({ event, message: response.data.message })
          setUnregisterdEvents(tempUnregEvents)
        } else {
          tempRegEvents.push({ event: event, message: response.data.message })
          setRegisteredEvents(tempRegEvents)
        }
      })
    }

    setRegisteredEvents(tempRegEvents)
    setUnregisterdEvents(tempUnregEvents)
  }

  useEffect(hook, [])

  /* eslint-disable semi */
  // eslint-disable-next-line no-extend-native
  const hashCode = (eventId) => {
    if (!eventId) return 0
    let hash = 0
    let i = 0
    let chr = 'c'
    if (eventId.length === 0) return hash;
    for (i = 0; i < eventId.length; i++) {
      chr = eventId.charCodeAt(i)
      hash = ((hash << 5) - hash) + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash;
  }

  return (
    <div>
      {unregisteredEvents.length !== 0 && (
        <div className='unregistered-events-container'>
          Here are some events
          {unregisteredEvents.map(event => <ParticipantEvent key={hashCode(event.eventId)} event={event} eventType={0} />)}
        </div>
      )}
      {
        registeredEvents.length !== 0 && (
          <div className='registered-events-container'>
            You have registered for these events
          </div>
        )
      }
    </div>
  )
}

ParticipantEvents.propTypes = {
  events: PropTypes.array
}

export default ParticipantEvents
