import React, { useState } from 'react'
import PropTypes from 'prop-types'

import BackCross from '../../assets/BackCross.svg'

import api from '../../utilities/api'

const JoinTeam = ({ back }) => {
  const [error, setError] = useState('')
  const [teamcode, setTeamcode] = useState('')
  const [success, setSuccess] = useState('')

  const handleCodeChange = (event) => {
    setTeamcode(() => event.target.value)
  }

  const handleSubmit = async () => {
    const token = sessionStorage.getItem('token')
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
    console.log(response)
    if (response.status === 200) {
      setSuccess('The team leader had been notified!')
    } else {
      setError('Are you sure the team code is correct?')
    }
  }

  return (
    <div className='unreg-event-details-container'>
      <div className='unreg-event-details reg-formm' success={success}>
        {success === '' && (
          <>
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
          </>
        )}
        {success !== '' && (
          <div className='success-join-request'>
            <h2>{success}</h2>
            <button onClick={() => window.location.reload(false)} className='jointeam-back-button'>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

JoinTeam.propTypes = {
  event: PropTypes.object,
  back: PropTypes.func
}

export default JoinTeam
