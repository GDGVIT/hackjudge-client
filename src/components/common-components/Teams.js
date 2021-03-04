import React from 'react'
import PropTypes from 'prop-types'

const Teams = ({ event, isAdmin }) => {
  return (
    <div>
      {isAdmin && (
        <div>[To be replaced with a list of teams in {event.name}]</div>
      )}
      {!isAdmin && (
        <div>
          [To be replaced with a list of teams in the user is participating in]
        </div>
      )}
    </div>
  )
}

Teams.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string
  }),
  isAdmin: PropTypes.bool
}

export default Teams
