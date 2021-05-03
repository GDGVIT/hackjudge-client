import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import ParticipantEvents from '../components/participant-components/ParticipantEvents'

import '../styles/participantHome.css'

import getAllEvents from '../utilities/getAllEvents'
import isInTeam from '../utilities/isInTeam'

const ParticipantHome = ({ currentRef, upcomingRef }) => {
  const history = useHistory()
  const [events, setEvents] = useState({ registered: [], unregistered: [] })

  const hook = async () => {
    if (!sessionStorage.getItem('logged_in') === 'true') {
      history.push('/')
    }

    const token = sessionStorage.getItem('token')
    if (token === 'null') {
      history.push('/')
    }

    let newEvents = await getAllEvents(token)
    newEvents = newEvents.map(event => ({
      ...event,
      unixStartTime: Date.parse(event.dateOfEvent),
      unixEndTime: Date.parse(event.endOfEvent)
    }))

    const tempRegEvents = []
    const tempUnregEvents = []

    if (newEvents.length !== 0) {
      newEvents.forEach(async (event) => {
        const response = await isInTeam(token, event.eventId)
        if (response.status !== 200) {
          console.log(response)
        } else if (response.data.message === 'You are not in a team') {
          tempUnregEvents.push({ event, message: response.data.message })
        } else {
          tempRegEvents.push({ event: event, message: response.data.message })
        }
      })
    }

    setEvents({ registered: tempRegEvents, unregistered: tempUnregEvents })
  }

  useEffect(hook, [])

  useEffect(() => console.log(events), [events])

  return (
    <div className='participant-home'>
      {(events.unregistered.length !== 0 || events.registered.length !== 0) && (
        <ParticipantEvents events={events} />
      )}

      {events.registered.length === 0 && events.unregistered.length === 0 && (
        <div>
          There are no events
        </div>
      )}
    </div>
  )
}

ParticipantHome.propTypes = {
  currentRef: PropTypes.any,
  upcomingRef: PropTypes.any
}

export default ParticipantHome
