import React from 'react'
import PropTypes from 'prop-types'

// import ParticipantEvent from './ParticipantEvent'

const ParticipantEvents = ({ events }) => {
  /* eslint-disable semi */
  // eslint-disable-next-line no-extend-native
  console.log('Rendering participant events')
  // const hashCode = (eventId) => {
  //   if (!eventId) return Math.random() * 10000 + 1
  //   console.log('hashing')
  //   let hash = 0
  //   let i = 0
  //   let chr = 'c'
  //   if (eventId.length === 0) return hash;
  //   for (i = 0; i < eventId.length; i++) {
  //     chr = eventId.charCodeAt(i)
  //     hash = ((hash << 5) - hash) + chr
  //     hash |= 0 // Convert to 32bit integer
  //   }
  //   return hash;
  // }

  return (
    <div>
      {events.unregistered.length !== 0 && (
        <div className='unregistered-events-container'>
          Here are some unregistered events
          {events.unregistered.map((event, index) => <li key={index}> dfsadf </li>)}
        </div>
      )}
      {events.registered.length !== 0 && (
        <div className='registered-events-container'>
          You have registered for these events
        </div>
      )}
    </div>
  )
}

ParticipantEvents.propTypes = {
  events: PropTypes.object
}

export default ParticipantEvents
