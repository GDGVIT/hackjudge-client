/* eslint-disable no-undef */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CreateTeam from './CreateTeam'
import JoinTeam from './JoinTeam'

import BackButton from '../../assets/event-register-back.svg'
import JoinIcon from '../../assets/JoinTeam.svg'
import CreateIcon from '../../assets/CreateTeam.svg'

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
      <div className='event-register-inner'>
        <div className='event-register-header'>
          <img
            className='event-register-back-icon'
            src={BackButton}
            alt='Back'
            onClick={close}
          />
          <div className='event-register-title'>
            Register
          </div>
        </div>
        <div className='event-register-body'>
          <div className='reg-half'>
            <div className='reg-icon-container'>
              <img
                className='reg-icon join-icon'
                src={JoinIcon}
                alt='Join a Team'
                onClick={() => handleCreate(1)}
              />
            </div>
            <div className='reg-text' onClick={() => handleCreate(1)}>
              Join Team
            </div>
          </div>
          <div className='reg-half'>
            <div className='reg-icon-container'>
              <img
                className='reg-icon create-icon'
                src={CreateIcon}
                alt='Create a Team'
                onClick={() => handleCreate(2)}
              />
            </div>
            <div className='reg-text' onClick={() => handleCreate(2)}>
              Create Team
            </div>
          </div>
        </div>
      </div>
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
