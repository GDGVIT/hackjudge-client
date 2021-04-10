import React, { useState } from 'react'

import CreateEventProblemStatement from './CreateEventProblemStatement'

import '../../styles/createEvent.css'

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    maxMembers: 4,
    reviews: 3,
    problemStatements: [],
    problemStatement: ''
  })

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const handleNameChange = (event) => {
    setEventDetails({ ...eventDetails, name: event.target.value })
  }
  const handleDateChange = (event) => {
    setEventDetails({ ...eventDetails, date: event.target.value })
  }
  const handleMaxMembersChange = (event) => {
    setEventDetails({ ...eventDetails, maxMembers: event.target.value })
  }
  const handleReviewsChange = (event) => {
    setEventDetails({ ...eventDetails, reviews: event.target.value })
  }
  const handleProblemStatementChange = (event) => {
    setEventDetails({ ...eventDetails, problemStatement: event.target.value })
  }

  const handlePsKeyDown = (event) => {
    console.log('key pressed')
    if (event.keyCode === 13 && eventDetails.problemStatement !== '') {
      console.log('key is enter')
      const currPs = eventDetails.problemStatements
      currPs.push({ id: currPs.length, ps: eventDetails.problemStatement })
      setEventDetails({ ...eventDetails, problemStatements: currPs, problemStatement: '' })
    }
  }

  return (
    <div className='create-event-container'>
      <h1>mmm... les see wat you have</h1>
      <form onSubmit={handleFormSubmit} className='create-event-form'>
        <label className='create-event-form-fields'>
          Event name
          <input value={eventDetails.name} onChange={handleNameChange} />
        </label>
        <label className='create-event-form-fields'>
          Event date
          <input value={eventDetails.date} onChange={handleDateChange} />
        </label>
        <label className='create-event-form-fields'>
          Max Members
          <input value={eventDetails.maxMembers} onChange={handleMaxMembersChange} />
        </label>
        <label className='create-event-form-fields'>
          Event reviews <input value={eventDetails.reviews} onChange={handleReviewsChange} />
        </label>
        <label className='create-event-form-fields'>
          Problem Statements <input value={eventDetails.problemStatement} onKeyDown={handlePsKeyDown} onChange={handleProblemStatementChange} />
        </label>
      </form>
      {eventDetails.problemStatements !== [] && (
        <div className='form-problem-statements-container'>
          <div className='form-problem-statements'>
            {eventDetails.problemStatements.map(ps => <CreateEventProblemStatement key={ps.id} problemStatement={ps.ps} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateEvent
