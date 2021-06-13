import React, { useState } from 'react'
import PropTypes from 'prop-types'

import BackCross from '../../assets/BackCross.svg'

import api from '../../utilities/api'

const CreateTeam = ({ event, back }) => {
  const [error, setError] = useState('')
  const [teamname, setTeamname] = useState('')
  const [teamcode, setTeamcode] = useState('')
  const [copysuccess, setCopySuccess] = useState(false)

  const handleNameChange = (event) => {
    setTeamname(() => event.target.value)
  }

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault()
    }
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
    if (response.status === 200 && response.data.message !== 'team already exists') {
      setTeamcode(response.data.createdTeam.teamCode)
    } else {
      setError(response.data.message)
    }
  }

  const refresh = () => {
    window.location.reload(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(teamcode)
    setCopySuccess(() => true)
  }

  return (
    <div className='unreg-event-details-container' onClick={back}>
      {teamcode === '' && (
        <div className='unreg-event-details reg-formm' onClick={e => e.stopPropagation()}>
          <div className='unreg-event-details-topbar'>
            <div className='event-details-title'>
              <h1>Create A Team</h1>
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
            <form
              className='reg-form'
              onSubmit={
                (e) => {
                  e.preventDefault()
                  handleSubmit()
                }
              }
            >
              <label className='reg-form-label'>
                Team Name
              </label>
              <input value={teamname} onChange={handleNameChange} className='reg-form-input' />
            </form>
          </div>
          <button onClick={handleSubmit} className='reg-button'>
            Create
          </button>
          {error !== '' && (
            <div className='jointeam-error'>
              {error}
            </div>
          )}
        </div>
      )}
      {teamcode !== '' && (
        <div className='unreg-event-details reg-formm teamcode' onClick={(e) => e.stopPropagation()} teamcode={teamcode}>
          <div className='unreg-event-details-topbar onlyback'>
            <div onClick={refresh} className='unreg-event-detail-close'>
              <img
                className='event-register-back-icon'
                src={BackCross}
                alt='Back'
              />
            </div>
          </div>
          <div className='thattext'>
            <span className='theteamname'>{teamname} </span>
            was successfully created!
            <br />
            Here is your team code:
          </div>
          <div className='real-code'>{teamcode}</div>
          {copysuccess && (
            <div className='code-copy-success'>
              Code copied successfully
            </div>
          )}
          <button className='reg-button' onClick={handleCopy}>
            Copy code
          </button>
        </div>
      )}
    </div>
  )
}

CreateTeam.propTypes = {
  event: PropTypes.object,
  back: PropTypes.func
}

export default CreateTeam
