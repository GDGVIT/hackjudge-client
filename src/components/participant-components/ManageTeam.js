import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import BackCross from '../../assets/BackCross.svg'

import TeamMembers from './TeamMembers'
import WaitingMebmers from './WaitingMembers'

import api from '../../utilities/api'
// import isInTeam from '../../utilities/isInTeam'

const ManageTeam = ({ event, close, notAdmin = false }) => {
  const [members, setMembers] = useState([])
  const [waitingMembers, setWaitingMembers] = useState([])
  const [code, setCode] = useState('')
  const [copysuccess, setCopySuccess] = useState(false)

  const deleteTeam = async () => {
    const token = localStorage.getItem('token')
    if (token === '') return
    const data = {
      teamId: event.teamData.team.teamId
    }
    const response = await api('deleteTeam', 'delete', data, token)
    if (response.status === 200) {
      window.location.reload(false)
    }
  }

  const leaveTeam = async () => {
    const data = {
      teamId: event.teamData.team.teamId
    }
    const token = localStorage.getItem('token')
    if (token === '') return
    const leaveResponse = await api('leaveTeam', 'post', data, token)
    if (leaveResponse.status === 200) {
      window.location.reload(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopySuccess(() => true)
  }

  const hook = async () => {
    const token = localStorage.getItem('token')
    if (token === '') return
    const membersResponse = await api('getMembers', 'get', null, token, event.teamData.team.teamId)
    const codeResponse = await api('getSubmission', 'get', null, token, event.teamData.team.teamId)
    if (codeResponse.status === 200) {
      setCode(() => codeResponse.data.teamCode)
    }
    if (membersResponse.status === 200) {
      setMembers(() => membersResponse.data.existingMembers)
      setWaitingMembers(() => membersResponse.data.waitingMembers)
    }
  }

  useEffect(hook, [])

  return (
    <div className='unreg-event-details'>
      <div className='manage-team-top'>
        <div onClick={close} className='unreg-event-detail-close'>
          <img
            className='event-register-back-icon'
            src={BackCross}
            alt='Back'
          />
        </div>
      </div>
      <div className='azonixx manage-team-title'>
        Manage Team
      </div>
      <div className='event-details-title manage-team-name'>
        <h1>{event.teamData.team.teamName}</h1>
        {!notAdmin && (
          <button onClick={deleteTeam} className='delete-team-button'>
            Delete Team
          </button>
        )}
        {notAdmin && (
          <button onClick={leaveTeam} className='delete-team-button'>
            Leave Team
          </button>
        )}
      </div>
      <div className='manage-team-body'>
        <div className='manage-team-code'>
          <div className='real-code'>
            {code}
          </div>
          <button className='real-code kopy-code' onClick={handleCopy}>
            Copy code
          </button>
        </div>
        {copysuccess && (
          <div className='manage-copy-success'>
            Code copied successfully!
          </div>
        )}
        <TeamMembers event={event} members={members} />
        {!notAdmin && (
          <WaitingMebmers event={event} members={waitingMembers} />
        )}
      </div>
    </div>
  )
}

ManageTeam.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func,
  notAdmin: PropTypes.bool
}
export default ManageTeam
