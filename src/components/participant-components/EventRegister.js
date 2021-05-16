/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CreateTeam from './CreateTeam'
import JoinTeam from './JoinTeam'

const EventRegister = ({ event, close }) => {
  const [create, setCreate] = useState(0)
  // Join team 1
  // Create team 2
  // Default 0

  const handleCreate = (createState) => {
    setCreate(() => createState)
  }
  return (
    <div className='event-register'>
      {create === 0 && (
        <div>
          <button onClick={() => handleCreate(1)} className='join-team-button'>Join a team</button>
          <button onClick={() => handleCreate(2)} className='event-create-team-button'>Create a team</button>
          <button onClick={close} className='event-register-back'>Back</button>
        </div>
      )}
      {create === 1 && (
        <div>
          <JoinTeam event={event} back={() => handleCreate(0)} />
        </div>
      )}
      {create === 2 && (
        <div>
          <CreateTeam event={event} back={() => handleCreate(0)} />
        </div>
      )}
    </div>
  )
}

EventRegister.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func
}

export default EventRegister
