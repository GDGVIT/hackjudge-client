import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Team from './Team'

import BackCross from '../../assets/BackCross.svg'

import getAllTeams from '../../utilities/getAllTeams'

const Review = ({ n, event, referrer }) => {
  const [expanded, setExpanded] = useState(false)
  const [teams, setTeams] = useState([])

  const hook = async () => {
    // call the api with url path
    const response = await getAllTeams(sessionStorage.getItem('token'), event.eventId)
    setTeams(response.data.teams)
  }

  useEffect(hook, [])
  const handleButtonClick = () => {
    setExpanded(!expanded)
  }
  return (
    <span>
      <button className='review-button' onClick={handleButtonClick}>Review {n}</button>
      {expanded && (referrer === 0 || referrer === 2) && (
        <div className='review-overlay' onClick={handleButtonClick}>
          <div className='review-card' onClick={(e) => e.stopPropagation()}>
            <div className='review-card-nav'>
              <span>
                <h2 className='review-event-name'>
                  {event.eventName}
                </h2>
                <div className='event-review-no'>
                  Review {n}
                </div>
              </span>
              <div className='unreg-event-detail-close' onClick={handleButtonClick}>
                <img
                  className='event-register-back-icon'
                  src={BackCross}
                  alt='Back'
                />
              </div>
            </div>
            <div className='review-body'>
              {teams !== null && teams.length === 0 && (
                <p className='no-teams'>
                  No teams to show.
                </p>
              )}
              {teams !== null && teams.length > 0 && (
                <div className='review-teams-container'>
                  <h1>Teams</h1>
                  <div className='teams-flex'>
                    {teams.map(team => <Team key={team.teamId} review={n} team={team} event={event} referrer={referrer} />)}
                  </div>
                </div>
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
  }),
  referrer: PropTypes.number
}

export default Review
