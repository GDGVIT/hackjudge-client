import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { RiUserAddLine } from 'react-icons/ri'
import { GiHighKick } from 'react-icons/gi'

import api from '../../utilities/api'

const Wishes = () => {
  const reload = () => {
    window.location.reload(false)
  }

  return (
    <div className='unreg-event-details-container'>
      <div className='wishes-body'>
        <h1>
          Your wish has been fulfilled
        </h1>
        <button className='wish-reload' onClick={reload}>
          Reload
        </button>
      </div>
    </div>
  )
}

const Member = ({ event, member, isAdmin, isWaiting }) => {
  const [wishes, setWishes] = useState(false)

  const addToTeam = async () => {
    const data = {
      waitingMemberAuthId: member.auth[0].authId,
      teamId: event.teamData.team.teamId
    }
    const token = sessionStorage.getItem('token')
    if (token === '') {
      console.log('no token')
      return
    }
    const response = await api('addTeamMember', 'post', data, token, null)
    console.log(response)
    if (response.status === 200) {
      setWishes(() => true)
    }
  }

  const removeFromTeam = async () => {
    console.log('rage kicking')
  }

  return (
    <div>
      {isWaiting && (
        <button title='Add to Team' onClick={addToTeam} className='add-to-team'> <RiUserAddLine /> </button>
      )}
      {!isWaiting && (
        <button title='Future Endeavor' onClick={removeFromTeam} className='add-to-team'>
          <GiHighKick />
        </button>
      )}
      {member.auth[0].name}
      {wishes && (
        <Wishes />
      )}
    </div>
  )
}

Member.propTypes = {
  member: PropTypes.object,
  isAdmin: PropTypes.bool,
  isWaiting: PropTypes.bool,
  event: PropTypes.object
}

export default Member
