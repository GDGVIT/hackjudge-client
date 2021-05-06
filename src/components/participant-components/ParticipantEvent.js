import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UnregEventDetail from './UnregEventDetail'
import EventRegister from './EventRegister'
import ManageSubmission from './ManageSubmission'

const ParticipantEvent = ({ event }) => {
  // eventType: 0 -> Unregistered event
  // eventType: 1 -> Registered and is leader
  // eventType: 2 -> Registered and does not have a team
  // eventType: 3 -> Registered and is a normal member of a team

  const [overlay, setOverlay] = useState(false)
  const [register, setRegister] = useState(false)
  const [submission, setSubmission] = useState(false)

  const handleDetails = () => {
    setOverlay((current) => !current)
  }

  const handleRegister = () => {
    setRegister((current) => !current)
  }

  const handleSubmission = () => {
    setSubmission((current) => !current)
  }

  return (
    <>
      {event.userStatus === 0 && (
        <>
          <div className='participant-event-card'>
            <div className='ppt-event-name'>
              {event.eventName}
            </div>
            <div className='participant-event-buttons'>
              <button onClick={handleRegister} className='ppt-event-primary-button'>
                Register
              </button>
              <button onClick={handleDetails} className='event-details-button'>
                Details
              </button>
            </div>
          </div>
          {overlay && (
            <div className='unreg-event-details-container'>
              <UnregEventDetail event={event} close={handleDetails} registered={false} />
            </div>
          )}
          {register && (
            <EventRegister event={event} close={handleRegister} />
          )}
        </>
      )}
      {event.userStatus === 1 && (
        <>
          <div className='participant-event-card'>
            <div className='ppt-event-name'>
              {event.eventName}
            </div>
            <div>
              <button onClick={handleSubmission} className='ppt-event-primary-button'>
                Submission
              </button>
              <button onClick={handleDetails} className='event-details-button'>
                Details
              </button>
            </div>
          </div>
          {overlay && (
            <div className='unreg-event-details-container'>
              <UnregEventDetail event={event} close={handleDetails} registered />
            </div>
          )}
          {submission && (
            <div className='event-submission-container'>
              <ManageSubmission close={handleSubmission} />
            </div>
          )}
        </>
      )}
      {event.userStatus === 2 && (
        <div className='no-team-card'>
          <div className='ppt-event-name'>
            Event Title
          </div>
        </div>
      )}
      {event.userStatus === 3 && (
        <div className='normal-member-card'>
          <div className='ppt-event-name'>
            {event.eventName}
          </div>
        </div>
      )}
    </>
  )
}

ParticipantEvent.propTypes = {
  event: PropTypes.object
}

export default ParticipantEvent
