import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
    <div className='jointeam-overlay'>
      <div className='jointeam-container' success={success}>
        {success === '' && (
          <>
            <form className='jointeam-form'>
              <label className='jointeam-label'>
                Team Code
                <input value={teamcode} onChange={handleCodeChange} className='jointeam-input' />
              </label>
            </form>
            <div onClick={handleSubmit} className='jointeam-buttons'>
              <button className='jointeam-button'>
                Join
              </button>
              <button onClick={back} className='jointeam-back-button'>
                Back
              </button>
            </div>
            <div className='jointeam-error'>
              {error}
            </div>
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
