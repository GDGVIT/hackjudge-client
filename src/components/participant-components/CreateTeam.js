import React from 'react'
import PropTypes from 'prop-types'

const CreateTeam = ({ creator }) => {
  return (
    <div>
      <form>
        <label>
          Team name <input />
        </label>
        <label>
          Event <input />
        </label>
        <label>
          Members <input />
        </label>
        <label>
          other details <input />
        </label>
      </form>
    </div>

  )
}

CreateTeam.propTypes = {
  creator: PropTypes.string
}

export default CreateTeam
