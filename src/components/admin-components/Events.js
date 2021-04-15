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

      {!isAdmin && console.log(events) && (
        <div>
          [List of upcoming e vents that the user has not registered for along with a register button]
          <br />
          [List of events the user is taking part in and button to view the team details for that event]
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
