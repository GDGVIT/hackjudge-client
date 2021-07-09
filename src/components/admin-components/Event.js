import React from 'react'
import PropTypes from 'prop-types'

import Reviews from '../admin-components/Reviews'

const Event = ({ event, isAdmin, referrer }) => {
  return (
    <div className='event'>
      <span className='event-name'>{event.eventName} </span>
      <Reviews event={event} referrer={referrer} />
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object,
  isAdmin: PropTypes.bool,
  referrer: PropTypes.number
}

export default Event
