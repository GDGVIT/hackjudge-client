import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ParticipantEvents = ({ events }) => {
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [unregisteredEvents, setUnregisterdEvents] = useState([])

  const hook = () => {
    const tempRegEvents = []
    const tempUnregEvents = []
    setRegisteredEvents(tempRegEvents)
    setUnregisterdEvents(tempUnregEvents)
    console.log(registeredEvents)
    console.log(unregisteredEvents)
  }

  useEffect(hook, [])

  return (
    <div>
      {registeredEvents.length === 0 && unregisteredEvents.length === 0 && (
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
          You havent registered for these events
        </div>
      )}
    </div>
  )
}

ParticipantEvents.propTypes = {
  events: PropTypes.array
}

export default ParticipantEvents
