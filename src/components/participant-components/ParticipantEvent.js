import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UnregEventDetail from './UnregEventDetail'
import EventRegister from './EventRegister'
import ManageSubmission from './ManageSubmission'
import ManageTeam from './ManageTeam'

const ParticipantEvent = ({ event }) => {
  // eventType: 0 -> Unregistered event
  // eventType: 1 -> Registered and is leader
  // eventType: 2 -> Registered and does not have a team
  // eventType: 3 -> Registered and is a normal member of a team

  const [overlay, setOverlay] = useState(false)
  const [register, setRegister] = useState(false)
  const [submission, setSubmission] = useState(false)
  const [manageTeam, setManageTeam] = useState(false)

  const handleDetails = () => {
    setOverlay((current) => !current)
  }

  const handleRegister = () => {
    setRegister((current) => !current)
  }

  const handleSubmission = () => {
    setSubmission((current) => !current)
  }

  const handleTeam = () => {
    setManageTeam((current) => !current)
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
            <div className='participant-event-buttons'>
              <button onClick={handleTeam} className='ppt-event-team-button'>
                Team
              </button>
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
              <ManageSubmission event={event} close={handleSubmission} />
            </div>
          )}
          {manageTeam && (
            <div className='unreg-event-details-container'>
              <ManageTeam event={event} close={handleTeam} />
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
        <>
          <div className='participant-event-card'>
            <div className='ppt-event-name'>
              {event.eventName}
            </div>
            <div className='participant-event-buttons'>
              <button onClick={handleTeam} className='ppt-event-team-button'>
                Team
              </button>
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
              <ManageSubmission event={event} close={handleSubmission} notAdmin />
            </div>
          )}
          {manageTeam && (
            <div className='unreg-event-details-container'>
              <ManageTeam event={event} close={handleTeam} notAdmin />
            </div>
          )}
        </>
      )}
    </>
  )
}

ParticipantEvent.propTypes = {
  event: PropTypes.object
}

export default ParticipantEvent
