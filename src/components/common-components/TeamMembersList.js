import React from 'react'

const TeamMembersList = ({ members }) => {
  return (
    <>
      {members.map((member) => (
        <li key='member.id'> {member.name} </li>
      ))}
    </>
  )
}

export default TeamMembersList
