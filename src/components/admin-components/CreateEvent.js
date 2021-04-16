import React, { useState } from 'react'

import CreateEventProblemStatement from './CreateEventProblemStatement'
import CreateEventMetric from './CreateEventMetric'

import createEvent from '../../utilities/createEvent'

import '../../styles/createEvent.css'

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    endDate: '',
    maxMembers: 4,
    reviews: 3,
    problemStatements: [],
    problemStatement: '',
    metrics: [],
    metric: ''
  })

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const response = await createEvent(sessionStorage.getItem('token'),
      eventDetails.name,
      eventDetails.problemStatements,
      eventDetails.metrics,
      eventDetails.date,
      eventDetails.maxMembers,
      eventDetails.reviews,
      eventDetails.endDate)
    console.log(response)
  }

  const handleNameChange = (event) => {
    setEventDetails({ ...eventDetails, name: event.target.value })
  }
  const handleDateChange = (event) => {
    setEventDetails({ ...eventDetails, date: event.target.value })
  }
  const handleEndDateChange = (event) => {
    setEventDetails({ ...eventDetails, endDate: event.target.value })
  }
  const handleMaxMembersChange = (event) => {
    if (event.target.value === '') {
      setEventDetails({ ...eventDetails, maxMembers: '' })
    } else {
      setEventDetails({ ...eventDetails, maxMembers: parseInt(event.target.value) })
    }
  }
  const handleReviewsChange = (event) => {
    setEventDetails({ ...eventDetails, reviews: event.target.value })
  }
  const handleProblemStatementChange = (event) => {
    setEventDetails({ ...eventDetails, problemStatement: event.target.value })
  }

  const handleMetricChange = (event) => {
    setEventDetails({ ...eventDetails, metric: event.target.value })
  }

  const handlePsKeyDown = (event) => {
    if (event.keyCode === 13 && eventDetails.problemStatement !== '') {
      const currPs = eventDetails.problemStatements
      currPs.push({ id: currPs.length, ps: eventDetails.problemStatement })
      setEventDetails({ ...eventDetails, problemStatements: currPs, problemStatement: '' })
    }
  }

  const handleMetricKeyDown = (event) => {
    if (event.keyCode === 13 && eventDetails.metric !== '' && eventDetails.metric.includes(':')) {
      const currMetrics = eventDetails.metrics
      const newMetric = eventDetails.metric.split(':')
      currMetrics.push({ id: currMetrics.length, metricName: newMetric[0], maxScore: parseInt(newMetric[1]) })
      setEventDetails({ ...eventDetails, metrics: currMetrics, metric: '' })
    }
  }

  const removePs = (pId) => {
    let newPs = eventDetails.problemStatements
    newPs = newPs.filter(ps => ps.id !== pId)
    setEventDetails({ ...eventDetails, problemStatements: newPs })
  }

  const removeMetric = (metricId) => {
    const newMetrics = eventDetails.metrics.filter(m => m.id !== metricId)
    setEventDetails({ ...eventDetails, metrics: newMetrics })
  }

  return (
    <div className='create-event-page'>
      <div className='create-event-form-wrapper'>
        <form className='create-event-form'>
          <h1> Event Details </h1>
          <label className='create-event-form-fields'>
            <span>Event name</span>
            <input placeholder='Name of the event' value={eventDetails.name} onChange={handleNameChange} />
          </label>
          <label className='create-event-form-fields'>
            <span>Event date</span>
            <input value={eventDetails.date} placeholder='yyyy-mm-dd' onChange={handleDateChange} />
          </label>
          <label className='create-event-form-fields'>
            <span>End Date</span>
            <input value={eventDetails.endDate} placeholder='yyyy-mm-dd' onChange={handleEndDateChange} />
          </label>
          <label className='create-event-form-fields'>
            <span>Max Members</span>
            <input type='number' min='1' max='100' value={eventDetails.maxMembers} onChange={handleMaxMembersChange} />
          </label>
          <label className='create-event-form-fields'>
            <span>Event reviews</span>
            <input type='number' min='1' max='10' value={eventDetails.reviews} onChange={handleReviewsChange} />
          </label>
          <label className='create-event-form-fields'>
            <span>Problem Statements</span>
            <textarea value={eventDetails.problemStatement} onKeyDown={handlePsKeyDown} placeholder='Problem Statements' onChange={handleProblemStatementChange}>
              Problem Statements
            </textarea>
          </label>
          <label className='create-event-form-fields'>
            <span>Metrics</span>
            <input value={eventDetails.metric} onKeyDown={handleMetricKeyDown} placeholder='Metric Name: Max Score' onChange={handleMetricChange} />
          </label>
        </form>
        <button onClick={handleFormSubmit} className='submit-event'> Create Event </button>
      </div>
      <div className='form-problem-statements'>
        {eventDetails.problemStatements.length === 0 && (
          <h3>
            Add some problem statements?
          </h3>
        )}
        {eventDetails.problemStatements.length !== 0 && (
          <h2>
            Problem Statements
          </h2>
        )}
        {eventDetails.problemStatements.map(ps => <CreateEventProblemStatement key={ps.id} problemStatement={ps} removePs={removePs} />)}
      </div>
      <div className='metrics'>
        {eventDetails.metrics.length === 0 && (
          <h3>
            Add some metrics?
          </h3>
        )}
        {eventDetails.metrics.length !== 0 && (
          <h2>
            Metrics
          </h2>
        )}
        {eventDetails.metrics.map(metric => <CreateEventMetric key={metric.id} metric={metric} removeMetric={removeMetric} />)}
      </div>
    </div>
  )
}

export default CreateEvent
