import React, { useState } from 'react'

import '../../styles/createEvent.css'

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    maxMembers: 4,
    reviews: 3,
    problemStatements: []
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
    setEventDetails({ ...eventDetails, problemStatements: event.target.value })
  }

  return (
    <div className='create-event-container'>
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
          Problem Statements <input value='' onChange={handleProblemStatementChange} />
        </label>
      </form>
    </div>
  )
}

export default CreateEvent
