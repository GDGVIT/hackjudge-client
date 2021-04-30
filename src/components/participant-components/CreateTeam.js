import React from 'react'
import PropTypes from 'prop-types'

const CreateTeam = ({ eventID }) => {
  // const creatorToken = sessionStorage.getItem('token')

  return (
    <div className='create-team-overlay'>
      <form className='create-team-form'>
        <label>
          Enter your team name
          <input className='create-team-input' />
        </label>
      </form>
      <button className='create-team-button'>
        Create Team
      </button>
    </div>

  )
}

CreateTeam.propTypes = {
  eventID: PropTypes.string
}

export default CreateTeam
