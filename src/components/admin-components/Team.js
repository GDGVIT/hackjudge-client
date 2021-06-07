import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MetricScore = ({ metric }) => {
  return (
    <div className='metrics-container'>
      <span className='metric-name'>
        {metric.metricName}
      </span>
      <input className='metric-input' maxLength='3' />
    </div>
  )
}

MetricScore.propTypes = {
  metric: PropTypes.object
}

const Team = ({ review, team, event }) => {
  const [expand, setExpand] = useState(false)

  return (
    <>
      <div onClick={() => setExpand((curr) => !curr)} className='team-button'>
        {team.teamName}
      </div>
      {expand && (
        <div className='review-overlay'>
          <div className='review-card review-card-small'>
            <div className='review-card-nav'>
              <span>
                <h2 className='review-event-name'>
                  {team.teamName}
                </h2>
                <div className='event-review-no'>
                  Review {review}
                </div>
              </span>
              <button className='collapse-review' onClick={() => setExpand((curr) => !curr)}>
                Close
              </button>
            </div>
            <div className='review-body metrics-body'>
              {event.metrics.map(m =>
                <MetricScore key={m.metricId} metric={m} />
              )}
              <div className='review-comment'>
                <textarea className='comment-textarea' placeholder='Comment' />
              </div>
              <button className='submit-review-button'>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// First get all reviews of a team.
// If the current review is blank, allow insertion
// If not blank allow updates
// Metrics and scores, comments.

Team.propTypes = {
  review: PropTypes.number,
  team: PropTypes.object,
  event: PropTypes.object
}

export default Team
