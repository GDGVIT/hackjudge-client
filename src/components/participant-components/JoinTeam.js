import React, { useState } from 'react'
import PropTypes from 'prop-types'

import BackCross from '../../assets/BackCross.svg'
import BigTick from '../../assets/BigTick.svg'

import api from '../../utilities/api'

const JoinTeam = ({ back }) => {
  const [error, setError] = useState('')
  const [teamcode, setTeamcode] = useState('')
  const [success, setSuccess] = useState('')

  const handleCodeChange = (event) => {
    setTeamcode(() => event.target.value)
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem('token')
    if (token === '') {
      setError('There was an unexpected error')
      return
    }

    if (teamcode === '') {
      setError('The team code cannot be empty')
      return
    }
    const data = {
      teamCode: teamcode
    }
    const response = await api('joinTeam', 'post', data, token)
    if (response.status === 200) {
      setSuccess('Your team leader has been notified!')
    } else {
      setError('Are you sure the team code is correct?')
    }
  }

  return (
    <div className='unreg-event-details-container'>
      {success === '' && (
        <div className='unreg-event-details reg-formm' success={success}>
          <div className='unreg-event-details-topbar'>
            <div className='event-details-title'>
              <h1>Join A Team</h1>
            </div>
            <div onClick={back} className='unreg-event-detail-close'>
              <img
                className='event-register-back-icon'
                src={BackCross}
                alt='Back'
              />
            </div>
          </div>
          <div className='reg-body'>
            <form className='reg-form'>
              <label className='reg-form-label'>
                Team Code
              </label>
              <input value={teamcode} onChange={handleCodeChange} className='reg-form-input' />
            </form>
          </div>
          <button onClick={handleSubmit} className='reg-button'>
            Join
          </button>
          {error !== '' && (
            <div className='jointeam-error'>
              {error}
            </div>
          )}
        </div>
      )}
      {success !== '' && (
        <div className='unreg-event-details make-normal' success={success}>
          <div className='manage-team-top'>
            <div onClick={() => window.location.reload(false)} className='unreg-event-detail-close'>
              <img
                className='event-register-back-icon'
                src={BackCross}
                alt='Back'
              />
            </div>
          </div>
          <div className='success-container'>
            <div className='success-join-request'>
              <img
                className='big-tick'
                src={BigTick}
                alt='Ok'
              />
              <div>{success}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

JoinTeam.propTypes = {
  event: PropTypes.object,
  back: PropTypes.func
}

export default JoinTeam
