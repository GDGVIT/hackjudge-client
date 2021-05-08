import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import TeamMembers from './TeamMembers'
import WaitingMebmers from './WaitingMembers'

import api from '../../utilities/api'

const ManageTeam = ({ event, close }) => {
  console.log(event)
  const [members, setMembers] = useState([])
  const [waitingMembers, setWaitingMembers] = useState([])
  const removeMember = () => {
    console.log('A member was removed')
  }

  const addMember = () => {
    console.log('A member was added')
  }

  const deleteTeam = async () => {
    const token = sessionStorage.getItem('token')
    if (token === '') return
    const data = {
      teamId: event.teamData.team.teamId
    }
    const response = await api('deleteTeam', 'delete', data, token)
    console.log(response)
    if (response.status === 200) {
      console.log(event.teamData.team.teamId, ' was destroyed')
      window.location.reload(false)
    }
  }

  const leaveTeam = () => {
    console.log('You left the team')
  }

  const manageSubmission = () => {
    console.log('You are now managing the submissions')
  }

  const hook = async () => {
    const token = sessionStorage.getItem('token')
    if (token === '') return
    const membersResponse = await api('getMembers', 'get', null, token, event.teamData.team.teamId)
    if (membersResponse.status === 200) {
      setMembers(() => membersResponse.data.existingMembers)
      setWaitingMembers(() => membersResponse.data.waitingMembers)
    }
    if (token === 'A') {
      leaveTeam()
      manageSubmission()
      removeMember()
      addMember()
    }
  }

  useEffect(hook, [])

  return (
    <div className='unreg-event-details'>
      <div className='unreg-event-details-topbar manage-team-name'>
        <div className='event-details-title'>
          <h1>{event.teamData.team.teamName}</h1>
        </div>
        <button onClick={close} className='unreg-event-detail-close'>Close</button>
      </div>
      <div className='manage-team-body'>
        <TeamMembers event={event} members={members} />
        <WaitingMebmers event={event} members={waitingMembers} />
      </div>
      <div className='manage-team-footer'>
        <button onClick={deleteTeam} className='delete-team-button'>
          Delete Team
        </button>
      </div>
    </div>
  )
}

ManageTeam.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func
}
export default ManageTeam
