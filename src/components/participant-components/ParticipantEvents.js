import React from 'react'
import PropTypes from 'prop-types'

import ParticipantEvent from './ParticipantEvent'

const ParticipantEvents = ({ unregistered, registered }) => {
  /* eslint-disable semi */
  // eslint-disable-next-line no-extend-native
  const hashCode = (eventId) => {
    if (!eventId) return Math.random() * 10000 + 1
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

  console.log({ registered, unregistered })
  return (
    <div className='event-status-container'>
      {unregistered.length !== 0 && (
        <div className='participants-event-container'>
          <div className='event-status-title'>Unregistered Events</div>
          {unregistered.map(event => <ParticipantEvent key={hashCode(event.eventId)} event={event} />)}
        </div>
      )}
      {registered.length !== 0 && (
        <div className='participants-event-container'>
          <div className='event-status-title'>Registered Events</div>
          {registered.map(event => <ParticipantEvent key={hashCode(event.eventId)} event={event} />)}
        </div>
      )}
    </div>
  )
}

ParticipantEvents.propTypes = {
  unregistered: PropTypes.array,
  registered: PropTypes.array
}

export default ParticipantEvents
