import React from 'react'
import PropTypes from 'prop-types'

import Member from './Member'

const WaitingMembers = ({ members, event }) => {
  // can be 0
  return (
    <>
      {members.length !== 0 && (
        <div className='waiting-members'>
          <h2>
            Join Requests
          </h2>
          {members.map((member, index) => {
            return (
              <Member key={index} event={event} member={member} isWaiting />
            )
          })}
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
