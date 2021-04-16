import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

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
        } else {
          tempRegEvents.push({ event: event, message: response.data.message })
        }
      })
    }
    setRegisteredEvents(tempRegEvents)
    setUnregisterdEvents(tempUnregEvents)
    console.log(registeredEvents.length, unregisteredEvents.length)
  }

  useEffect(hook, [events])

  return (
    <div>
      {unregisteredEvents.length === 0 && registeredEvents.length === 0 && (
        <div className='no-events-at-all'>
          There are no events... at all
        </div>
      )}
      {registeredEvents.length !== 0 && (
        <div className='events-registered'>
          You have registered for this event
        </div>
      )}
      {unregisteredEvents.length !== 0 && (
        <div>
          <h1> Register, and forget about FOMO</h1>
        </div>
      )}
    </div>
  )
}

ParticipantEvents.propTypes = {
  events: PropTypes.array
}

export default ParticipantEvents
