import React from 'react'
import PropTypes from 'prop-types'

import Event from './Event'

const Events = ({ events, isAdmin, referrer }) => {
  return (
    <div className='events'>
      {isAdmin && (
        <div>
          {events.map(event => <Event key={event.eventId} event={event} isAdmin={isAdmin} referrer={referrer} />)}
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
