import React from 'react'
import TeamMembersList from './TeamMembersList'

const Team = ({ isAdmin, isLeader, team }) => {
  const normalUser = !isAdmin && !isLeader

  return (
    <div>
      {normalUser && (
        <div className='teamCard teamCard-user'>
          {team.name}
          <TeamMembersList members={team.members} />
        </div>
      )}
      {isLeader && (
        <div className='teamCard teamCard-leader'>
          {team.name}
          <TeamMembersList members={team.members} />
        </div>
      )}
      {isAdmin && (
        <div className='teamCard teamCard-admin'>
          {team.name}
          <TeamMembersList members={team.members} />
        </div>
      )}
    </div>
  )
}

export default Team
