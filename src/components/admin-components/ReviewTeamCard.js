import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ReviewTeamCard = ({ teamDetails }) => {
  const [expanded, setExpanded] = useState(false)

  console.log(teamDetails)
  return (
    <>
      {expanded && (
        <div className='team-review-card-open' onClick={() => setExpanded(true)}>
          {teamDetails.teamName}
        </div>
      )}
      {!expanded && (
        <div className='team-review-card-collapsed'>
          <button onClick={() => setExpanded(false)}> close </button>
          This is a collapsed team card
        </div>
      )}
    </>
  )
}

ReviewTeamCard.propTypes = {
  teamDetails: PropTypes.object
}

export default ReviewTeamCard
