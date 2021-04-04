import React from 'react'
import PropTypes from 'prop-types'

// import Event from './Event'

const Events = ({ events, isAdmin }) => {
  return (
    <div>
      {isAdmin && (
        <div>
          {/* {events.map(event => <Event key={event.id} event={event} isAdmin={isAdmin} />)} */}
          Hello
        </div>
      )}

      {!isAdmin && (
        <div>
          [List of upcoming events that the user has not registered for along with a register button]
          <br />
          [List of events the user is taking part in and button to view the team details for that event]
        </div>
      )}
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.array,
  isAdmin: PropTypes.bool
}

export default Events
