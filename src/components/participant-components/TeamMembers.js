import React from 'react'
import PropTypes from 'prop-types'

import Member from './Member'

const TeamMembers = ({ event, members, isAdmin }) => {
  // there will always be atleast one member
  return (
    <div className='members-container'>
      <div className='team-members-title'>
        Current Members
      </div>
      <div className='members-list'>
        {members.map((member, index) => {
          return (
            <Member key={index} event={event} member={member} isAdmin={isAdmin} />
          )
        })}
      </div>
    </div>
  )
}

TeamMembers.propTypes = {
  members: PropTypes.array,
  event: PropTypes.object,
  isAdmin: PropTypes.bool
}

export default TeamMembers
