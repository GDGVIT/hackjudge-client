import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UnregEventDetail from './UnregEventDetail'

const ParticipantEvent = ({ event, eventType }) => {
  // eventType: 0 -> Unregistered event
  // eventType: 1 -> Registered and is leader
  // eventType: 2 -> Registerd and does not have a team
  // eventType: 3 -> Registerd and is a normal member of a team

  const [overlay, setOverlay] = useState(false)

  const handleButtonClick = () => {
    setOverlay((current) => !current)
  }

  return (
    <>
      {eventType === 0 && (
        <>
          <div className='unregistered-event-card'>
            <div className='ppt-event-name'>
              {event.eventName}
            </div>
            <div>
              <button className='ppt-event-register-button'>
                Register
              </button>
              <button onClick={handleButtonClick} className='ppt-event-details-button'>
                Details
              </button>
            </div>
          </div>
          {overlay && (
            <UnregEventDetail event={event} close={handleButtonClick}/>
          )}
        </>
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
