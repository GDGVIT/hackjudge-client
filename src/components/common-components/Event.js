import React from 'react'
import PropTypes from 'prop-types'

import Reviews from '../admin-components/Reviews'

const Event = ({ event, isAdmin }) => {
  return (
    <div>
      {isAdmin && (
        <div>
          {event.name}
          {/* button to list all teams */}
          <Reviews event={event} />
        </div>
      )}

      {!isAdmin && (
        <div>
          {event.name} [Register button]
        </div>
      )}
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object,
  isAdmin: PropTypes.bool
}

export default Event
