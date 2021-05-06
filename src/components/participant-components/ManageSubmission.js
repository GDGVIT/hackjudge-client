import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ManageSubmission = ({ close }) => {
  const [abstract, setAbstract] = useState('')
  const [projectLink, setProjectLink] = useState('')

  const abstractPlaceholder = 'Tell us about your idea.'
  const linkPlaceholder = 'github.com/username/repositoryname'

  const handleAbstractChange = (event) => {
    setAbstract(() => event.target.value)
  }
  const handleLinkChange = (event) => {
    setProjectLink(() => event.target.value)
  }
  const handleSubmit = () => {
    console.log('submitted')
  }

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
      </div>
    </div>
  )
}

ManageSubmission.propTypes = {
  close: PropTypes.func
}

export default ManageSubmission
