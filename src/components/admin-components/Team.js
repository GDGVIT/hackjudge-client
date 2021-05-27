import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Team = ({ review, team }) => {
  console.log({ review, team })
  const [expand, setExpand] = useState(false)

  return (
    <>
      <div onClick={() => setExpand((curr) => !curr)} className='team-button'>
        {team.teamName}
      </div>
      {expand && (
        <div className='review-overlay'>
          <div className='review-card'>
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
            <div className='review-body'>
              Jox
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Team.propTypes = {
  review: PropTypes.number,
  team: PropTypes.object
}

export default Team
