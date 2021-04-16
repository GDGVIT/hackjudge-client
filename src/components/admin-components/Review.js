import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import getAllTeams from '../../utilities/getAllTeams'

const Review = ({ n, event }) => {
  const [expanded, setExpanded] = useState(false)
  const [teams, setTeams] = useState([])

  const hook = async () => {
    const response = await getAllTeams(sessionStorage.getItem('token'), event.eventId)
    setTeams(response.data.teams)
  }

  useEffect(hook, [])
  const handleButtonClick = () => {
    setExpanded(!expanded)
  }
  console.log('n: ', n, '\nevent:\n', event)
  return (
    <span>
      <button className='review-button' onClick={handleButtonClick}>Review {n}</button>
      {expanded && (
        <div className='review-overlay'>
          <div className='review-card'>
            <div className='review-card-nav'>
              <span>
                <h2 className='review-event-name'>
                  {event.eventName}
                </h2>
                <div className='event-review-no'>
                  Review {n}
                </div>
              </span>
              <button className='collapse-review' onClick={handleButtonClick}>
                Close
              </button>
            </div>
            <div className='review-body'>
              {teams !== null && teams.length === 0 && (
                <p className='no-teams'>
                  No teams to show, marketing team slakin, eh?
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </span>
  )
}

Review.propTypes = {
  n: PropTypes.number,
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    eventId: PropTypes.string.isRequired
  })
}

export default Review
