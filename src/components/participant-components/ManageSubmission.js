import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import api from '../../utilities/api'

const ManageSubmission = ({ event, close }) => {
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
    console.log(event.teamData.team)
    const authorization = sessionStorage.getItem('token')
    if (authorization === '') {
      console.log('Authorization is missing')
    }
    const data = {
      teamId: event.teamData.team.teamId,
      abstract: abstract,
      link: projectLink
    }
    console.log(data)

    const response = await api('updateTeam', 'patch', data, authorization)
    if (response.status === 200) {
      setSuccess(() => 'Your details were updated successfully')
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
    <div className='submission-modal'>
      <div className='unreg-event-details-topbar'>
        <div className='event-details-title'>
          <h1>Your Submission</h1>
        </div>
        <div onClick={close} className='unreg-event-detail-close'>
          Back
        </div>
      </div>
      <div className='event-details-body submission-body'>
        <div className='submission-abstract'>
          <h2 className='abstract-title'>Abstract</h2>
          <textarea value={abstract} onChange={handleAbstractChange} placeholder={abstractPlaceholder} className='abstract-textarea' />
        </div>
        <div className='submission-link'>
          <h2 className='project-link'>Project Link</h2>
          <textarea value={projectLink} onChange={handleLinkChange} placeholder={linkPlaceholder} className='project-link-textarea' />
        </div>
      </div>

      <div className='event-details-footer'>
        <button onClick={handleSubmit} className='ppt-event-primary-button'>
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
    </div>
  )
}

ManageSubmission.propTypes = {
  event: PropTypes.object,
  close: PropTypes.func
}

export default ManageSubmission
