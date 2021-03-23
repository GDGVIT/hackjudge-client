import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Review = ({ n, event }) => {
  const [expanded, setExpanded] = useState(false)

  const handleButtonClick = () => {
    setExpanded(!expanded)
  }

  return (
    <span>
      <button className='review-button' onClick={handleButtonClick}>Review {n}</button>
      {expanded && (
        <div className='reviewCard'>
          <h1 className='reviewName'>
            {/* Review {n} for {event.name} */}
            This is a place holder; will be replaced with sth not so harsh on the eye
          </h1>
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
    name: PropTypes.number.isRequired
  })
}

export default Review
