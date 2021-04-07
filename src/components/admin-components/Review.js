import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Review = ({ n, event }) => {
  const [expanded, setExpanded] = useState(false)

  const handleButtonClick = () => {
    setExpanded(!expanded)
  }
  console.log('n: ', n, '\nevent:\n', event)
  return (
    <span>
      <button className='review-button' onClick={handleButtonClick}>Review {n}</button>
      {expanded && (
        <div className='review-card'>
          <h1 className='review-event-name'>
            {event.eventName}
          </h1>
          <h2 className='event-review-no'>
            Review {n}
          </h2>
          <button className='collapse-review' onClick={handleButtonClick}>
            Back
          </button>
        </div>
      )}
    </span>
  )
}

Review.propTypes = {
  n: PropTypes.number,
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired
  })
}

export default Review
