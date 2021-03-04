import React from 'react'
import PropTypes from 'prop-types'

const TeamMembersList = ({ members }) => {
  return (
    <>
      {members.map((member) => (
        <li key='member.id'> {member.name} </li>
      ))}
    </>
  )
}

TeamMembersList.propTypes = {
  members: PropTypes.array
}

export default TeamMembersList
