import React from 'react'

const JoinTeam = () => {
  const error = ''

  return (
    <div className='jointeam-overlay'>
      <div>
        <form className='jointeam-form'>
          <label className='jointeam-label'>
            Team Code
            <input className='jointeam-input' />
          </label>
        </form>
        <div className='jointeam-buttons'>
          <button className='jointeam-button'>
            Join
          </button>
          <button className='jointeam-back-button'>
            Back
          </button>
        </div>
        <span className='jointeam-error'>
          {error}
        </span>
      </div>
    </div>
  )
}

export default JoinTeam
