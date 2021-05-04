import React, { useState } from 'react'
import PropTypes from 'prop-types'

import api from '../../utilities/api'

const CreateTeam = ({ event, back }) => {
  const [error, setError] = useState('')
  const [teamname, setTeamname] = useState('')
  const [teamcode, setTeamcode] = useState('')

  const handleNameChange = (event) => {
    setTeamname(() => event.target.value)
  }

  const handleSubmit = async () => {
    const token = sessionStorage.getItem('token')
    if (token === '') {
      setError('There was an unexpected error')
      return
    }
    const data = {
      team: {
        teamName: teamname
      },
      eventId: event.eventId
    }
    const response = await api('createTeam', 'post', data, token)
    console.log(response)
    if (response.status === 200) {
      setTeamcode(response.data.createdTeam.teamCode)
    } else {
      setError(response.data.message)
    }
  }

  return (
    <div className='jointeam-overlay'>
      <div className='jointeam-container'>
        <form className='jointeam-form' created={teamcode}>
          <label className='jointeam-label'>
            Team Name
            <input onChange={handleNameChange} value={teamname} className='jointeam-input' />
          </label>
        </form>
        <div className='jointeam-buttons' created={teamcode}>
          <button onClick={handleSubmit} className='jointeam-button'>
            Create
          </button>
          <button onClick={back} className='jointeam-back-button'>
            Back
          </button>
        </div>
        <div className='jointeam-error'>
          {error}
        </div>
        {teamcode !== '' && (
          <div className='teamcode' teamcode={teamcode}>
            <h2>{teamname} was created!!</h2>
            <h3>Here is your team code</h3>
            <h2>{teamcode}</h2>
            <button onClick={back} className='jointeam-back-button'>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

CreateTeam.propTypes = {
  event: PropTypes.object,
  back: PropTypes.func
}

export default CreateTeam
