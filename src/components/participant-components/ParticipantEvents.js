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

  return (
    <div>
      {unregistered.length !== 0 && (
        <div className='unregistered-events-container'>
          <div className='un-reg-events-title'>Events</div>
          {unregistered.map(event => <ParticipantEvent key={hashCode(event.eventId)} event={event} eventType={0} />)}
        </div>
      )}
      {registered.length !== 0 && (
        <div className='registered-events-container'>
          <div className='un-reg-events-title'>Events</div>
          {registered.map(event => <ParticipantEvent key={hashCode(event.eventId)} event={event} eventType={3} />)}
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
