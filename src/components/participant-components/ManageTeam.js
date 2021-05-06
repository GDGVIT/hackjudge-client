import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// import api from '../../utilities/api'

const ManageTeam = ({ event, close }) => {
  const [members, setMembers] = useState([])

  const removeMember = () => {
    console.log('A member was removed')
  }

  const addMember = () => {
    console.log('A member was added')
  }

  const deleteTeam = () => {
    console.log('The team was deleted')
  }

  const leaveTeam = () => {
    console.log('You left the team')
  }

  const manageSubmission = () => {
    console.log('You are now managing the submissions')
  }

  // This block is just to shut the linter up
  const hook = () => {
    try {
      console.log(members, event)
    } catch {
      console.log('test')
    }
    setMembers([1, 2])
    addMember()
    removeMember()
    deleteTeam()
    leaveTeam()
    manageSubmission()
  }

  useEffect(hook, [])

  return (
    <div className='manage-team'>
      You are now managing the team
      <button onClick={close}>Close</button>
    </div>
  )
}

ManageTeam.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func
}

export default ManageTeam
