import React, { useState } from 'react'
import PropTypes from 'prop-types'

import UnregEventDetail from './UnregEventDetail'
import EventRegister from './EventRegister'
import ManageSubmission from './ManageSubmission'
import ManageTeam from './ManageTeam'

const ParticipantEvent = ({ event }) => {
  // eventType: 0 -> Unregistered event
  // eventType: 1 -> Registered and is leader
  // eventType: 2 -> Registered and does not have a team [unused]
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
      <div className='participant-event-card'>
        <div className='ppt-event-name'>
          {event.eventName}
        </div>
        <div className='participant-event-buttons'>
          {(event.userStatus === 1 || event.userStatus === 3) && (
            <>
              <button onClick={handleTeam} className='ppt-event-team-button'>
                Team
              </button>
              <button onClick={handleSubmission} className='ppt-event-primary-button'>
                Submission
              </button>
            </>
          )}
          {event.userStatus === 0 && (
            <button onClick={handleRegister} className='ppt-event-primary-button'>
              Register
            </button>
          )}
          <button onClick={handleDetails} className='event-details-button'>
            Details
          </button>
        </div>
      </div>
      {overlay && (
        <div className='unreg-event-details-container' onClick={handleDetails}>
          <UnregEventDetail event={event} close={handleDetails} registered={(!event.userStatus === 0)} />
        </div>
      )}
      {event.userStatus === 0 && register && (
        <EventRegister event={event} close={handleRegister} />
      )}
      {event.userStatus !== 0 && submission && (
        <div className='unreg-event-details-container' onClick={handleSubmission}>
          <ManageSubmission event={event} close={handleSubmission} notAdmin={event.userStatus === 3} />
        </div>
      )}
      {event.userStatus !== 0 && manageTeam && (
        <div className='unreg-event-details-container' onClick={handleTeam}>
          <ManageTeam event={event} close={handleTeam} notAdmin={event.userStatus === 3} />
        </div>
      )}
    </>
  )
}

ParticipantEvent.propTypes = {
  event: PropTypes.object
}

export default ParticipantEvent
