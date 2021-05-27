import React from 'react'
import PropTypes from 'prop-types'

import Member from './Member'

const WaitingMembers = ({ members, event }) => {
  // can be 0
  return (
    <>
      {members.length !== 0 && (
        <div className='members-container'>
          <div className='team-members-title'>
            Current Members
          </div>
          <div className='members-list'>
            {members.map((member, index) => {
              return (
                <Member key={index} event={event} member={member} isWaiting />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

WaitingMembers.propTypes = {
  members: PropTypes.array,
  event: PropTypes.object
}

export default WaitingMembers
