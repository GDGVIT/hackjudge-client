import React from 'react'
import PropTypes from 'prop-types'

import Event from './Event'

const Events = ({ events, isAdmin, referrer }) => {
  return (
    <div>
      {isAdmin && (
        <div>
          {events.map(event => <Event key={event.eventId} event={event} isAdmin={isAdmin} />)}
        </div>
      )}
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.any,
  isAdmin: PropTypes.bool,
  referrer: PropTypes.number
}

export default Events
