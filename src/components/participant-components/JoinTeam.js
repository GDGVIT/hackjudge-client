import React from 'react'
import PropTypes from 'prop-types'

const JoinTeam = ({ event, back }) => {
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
          <button onClick={back} className='jointeam-back-button'>
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

JoinTeam.propTypes = {
  event: PropTypes.object,
  back: PropTypes.func
}

export default JoinTeam
