import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Team from './Team'

import getAllTeams from '../../utilities/getAllTeams'

import BackCross from '../../assets/BackCross.svg'

const AllTeams = ({ event }) => {
  const [expanded, setExpanded] = useState(false)

  const [teams, setTeams] = useState([])

  const hook = async () => {
    // call the api with url path
    const response = await getAllTeams(sessionStorage.getItem('token'), event.eventId)
    setTeams(response.data.teams)
  }

  const handleButtonClick = () => {
    setExpanded((curr) => !curr)
  }

  useEffect(hook)

  return (
    <div className='reviews-list'>
      <button className='review-button' onClick={handleButtonClick}>Teams</button>
      {expanded && (
        <div className='review-overlay'>
          <div className='review-card'>
            <div className='review-card-nav'>
              <span>
                <h2 className='review-event-name'>
                  {event.eventName}
                </h2>
                <div className='event-review-no'>
                  All Teams
                </div>
              </span>
              <div onClick={handleButtonClick} className='unreg-event-detail-close'>
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
                  No teams to show, marketing team slakin, eh?
                </p>
              )}
              {teams !== null && teams.length > 0 && (
                <div className='review-teams-container'>
                  <h1>Teams</h1>
                  <div className='teams-flex'>
                    {teams.map(team => <Team key={team.teamId} review={0} team={team} event={event} referrer={3} />)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

AllTeams.propTypes = {
  event: PropTypes.object
}

export default AllTeams
