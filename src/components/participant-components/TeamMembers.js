import React from 'react'
import PropTypes from 'prop-types'

import Member from './Member'

const TeamMembers = ({ event, members }) => {
  // there will always be atleast one member
  return (
    <div className='team-members'>
      <h2 className='team-members-title'>
        Team Members
      </h2>
      {members.map((member, index) => {
        return (
          <Member key={index} event={event} member={member} />
        )
      })}
    </div>
  )
}

TeamMembers.propTypes = {
  members: PropTypes.array,
  event: PropTypes.object
}

export default TeamMembers
