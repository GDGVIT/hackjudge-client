import React, { useState } from 'react'
/* eslint-disable no-unused-vars */

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { FcInfo } from 'react-icons/fc'

import CreateEventProblemStatement from './CreateEventProblemStatement'
import CreateEventMetric from './CreateEventMetric'

import createEvent from '../../utilities/createEvent'

import '../../styles/createEvent.css'

const CreateEvent = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: new Date(),
    endDate: new Date(),
    minSize: 2,
    maxMembers: 4,
    reviews: 3,
    problemStatements: [],
    problemStatement: '',
    metrics: [],
    metric: '',
    description: ''
  })

  const [startDate, setStartDate] = useState(new Date())

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (
      eventDetails.name === '' ||
      eventDetails.minSize < 1 ||
      eventDetails.reviews < 1 ||
      eventDetails.problemStatements === [] ||
      eventDetails.metrics === [] ||
      eventDetails.description === ''
    ) {
      setSuccess(() => false)
      setError('Invalid details')
      return
    }

    const response = await createEvent(sessionStorage.getItem('token'),
      eventDetails.name,
      eventDetails.problemStatements,
      eventDetails.metrics,
      eventDetails.date,
      eventDetails.minsize,
      eventDetails.maxMembers,
      eventDetails.reviews,
      eventDetails.endDate,
      eventDetails.description)
    if (response.status === 200) {
      setSuccess(() => true)
      setTimeout(
        () => window.location.reload(false),
        1000
      )
    }
  }

  const handleNameChange = (event) => {
    setEventDetails({ ...eventDetails, name: event.target.value })
  }
  const handleDescChange = (event) => {
    setEventDetails({ ...eventDetails, description: event.target.value })
  }

  const handleMaxMembersChange = (event) => {
    if (event.target.value === '') {
      setEventDetails({ ...eventDetails, maxMembers: '' })
    } else {
      setEventDetails({ ...eventDetails, maxMembers: parseInt(event.target.value) })
    }
  }
  const handleMinMembersChange = (event) => {
    if (event.target.value === '') {
      setEventDetails({ ...eventDetails, minSize: '' })
    } else {
      setEventDetails({ ...eventDetails, minSize: parseInt(event.target.value) })
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
      <div className='create-event-title'>
        Create Event
      </div>
      <div className='create-event-body'>
        <div className='create-event-details'>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Event Name
            </label>
            <input value={eventDetails.name} onChange={handleNameChange} className='create-event-input' />
          </div>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Event Start Date
            </label>
            <DatePicker selected={eventDetails.date} onChange={(date) => setEventDetails({ ...eventDetails, date: date })} />
          </div>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Event End Date
            </label>
            <DatePicker selected={eventDetails.endDate} onChange={(date) => setEventDetails({ ...eventDetails, endDate: date })} />
          </div>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Event Description
            </label>
            <textarea placeholder='Maybe describe the event?' value={eventDetails.description} onChange={handleDescChange} className='create-event-input create-event-textarea' />
          </div>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Mininum Team Size
            </label>
            <input type='number' min='1' max='100' value={eventDetails.minSize} onChange={handleMinMembersChange} className='create-event-input' />
          </div>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Maximum Team Size
            </label>
            <input type='number' min='1' max='100' value={eventDetails.maxMembers} onChange={handleMaxMembersChange} className='create-event-input' />
          </div>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Reviews
            </label>
            <input type='number' min='1' max='100' value={eventDetails.reviews} onChange={handleReviewsChange} className='create-event-input' />
          </div>
        </div>
        <div className='create-event-ps'>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Problem Statements
            </label>
            <textarea value={eventDetails.problemStatement} onKeyDown={handlePsKeyDown} onChange={handleProblemStatementChange} className='create-event-input create-event-ps-textarea' />
          </div>
          <div className='ps-helper'>
            <FcInfo /> Press enter to add a problem statement
          </div>
          <div className='problemstatements-container'>
            {eventDetails.problemStatements.map(ps => <CreateEventProblemStatement key={ps.id} problemStatement={ps} removePs={removePs} />)}
          </div>
        </div>
        <div className='create-event-metrics'>
          <div className='create-event-input-container'>
            <label className='create-event-input-label'>
              Metrics
            </label>
            <input value={eventDetails.metric} onKeyDown={handleMetricKeyDown} onChange={handleMetricChange} className='create-event-input' />
          </div>
          <div className='ps-helper'>
            <FcInfo /> [Metric Name]: [Max Score]  and press enter
          </div>
          <div className='problemstatements-container'>
            {eventDetails.metrics.map(metric => <CreateEventMetric key={metric.id} metric={metric} removeMetric={removeMetric} />)}
          </div>
        </div>
      </div>
      <div className='create-event-foooter'>
        <button onClick={handleFormSubmit} className='create-event-button'>
          Create zis now!
        </button>
      </div>
      {success && (
        <div className='success-message'>
          Event Created Successfully.
          The page will now be reloaded.
        </div>
      )}
      {error && (
        <div className='error-message'>
          {error}
        </div>
      )}
    </div>
  )
}

export default CreateEvent
