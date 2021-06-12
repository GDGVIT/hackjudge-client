import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import BackCross from '../../assets/BackCross.svg'

import api from '../../utilities/api'

const ManageSubmission = ({ event, close, notAdmin = false }) => {
  const [abstract, setAbstract] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const abstractPlaceholder = 'Tell us about your idea.'
  const linkPlaceholder = 'github.com/username/repositoryname'

  const handleAbstractChange = (event) => {
    setAbstract(() => event.target.value)
  }
  const handleLinkChange = (event) => {
    setProjectLink(() => event.target.value)
  }
  const handleSubmit = async () => {
    const authorization = sessionStorage.getItem('token')
    if (authorization === '') {
      setError('There was an error, try logging out.')
      return
    }
    const data = {
      teamId: event.teamData.team.teamId,
      abstract: abstract,
      link: projectLink
    }

    const response = await api('updateTeam', 'patch', data, authorization)
    if (response.status === 200) {
      setSuccess(() => 'Your details were updated successfully')
      setTimeout(
        () => window.location.reload(false),
        1000
      )
    } else {
      setError(() => 'There was an error')
    }
  }

  const hook = () => {
    if (event.teamData.team.abstract !== null) {
      setAbstract(() => event.teamData.team.abstract)
    }
    if (event.teamData.team.link !== null) {
      setProjectLink(() => event.teamData.team.link)
    }
  }

  useEffect(hook, [])

  return (
    <div className='submission-modal' onClick={e => e.stopPropagation()}>
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
        Your Submission
      </div>
      <div className='event-details-body submission-body'>
        <div className='submission-abstract'>
          <div className='abstract-title'>Abstract</div>
          {notAdmin && (
            <textarea value={abstract} placeholder={abstractPlaceholder} disabled className='abstract-textarea' />
          )}
          {!notAdmin && (
            <textarea value={abstract} onChange={handleAbstractChange} placeholder={abstractPlaceholder} className='abstract-textarea' />
          )}
        </div>
        <div className='submission-link'>
          <div className='abstract-title'>Project Link</div>
          {notAdmin && (
            <textarea value={projectLink} disabled placeholder={linkPlaceholder} className='project-link-textarea' />
          )}
          {!notAdmin && (
            <textarea value={projectLink} onChange={handleLinkChange} placeholder={linkPlaceholder} className='project-link-textarea' />
          )}
        </div>
      </div>
      {!notAdmin && (
        <div className='event-details-footer'>
          <button onClick={handleSubmit} className='ppt-event-primary-button submission-button'>
            Submit
          </button>
          {error !== '' && (
            <div className='submission-error'>
              {error}
            </div>
          )}
          {success !== '' && (
            <div>
              {success}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

ManageSubmission.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func,
  notAdmin: PropTypes.bool
}

export default ManageSubmission
