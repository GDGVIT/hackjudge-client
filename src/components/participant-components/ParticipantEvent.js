import React from 'react'
import PropTypes from 'prop-types'

// import UnregEventDetail from './UnregEventDetail'

const ParticipantEvent = ({ event, eventType }) => {
  console.log('participant event is called')
  // eventType: 0 -> Unregistered event
  // eventType: 1 -> Registered and is leader
  // eventType: 2 -> Registerd and does not have a team
  // eventType: 3 -> Registerd and is a normal member of a team

  return (
    <>
      {eventType === 0 && (
        <div className='unregistered-event-card'>
          <div className='ppt-event-name'>
            {event.eventName}
          </div>
          <div>
            <button className='ppt-event-register-button'>
              Register
            </button>
            <button className='ppt-event-details-button'>
              Details
            </button>
          </div>
        </div>
      )}
      {eventType === 1 && (
        <div className='registered-leader-card'>
          <div className='ppt-event-name'>
            Event Title
          </div>
        </div>
      )}
      {eventType === 2 && (
        <div className='no-team-card'>
          <div className='ppt-event-name'>
            Event Title
          </div>
        </div>
      )}
      {eventType === 3 && (
        <div className='normal-member-card'>
          <div className='ppt-event-name'>
            Event Title
          </div>
        </div>
      )}
    </>
  )
}

ParticipantEvent.propTypes = {
  event: PropTypes.object,
  eventType: PropTypes.number
}

export default ParticipantEvent
