import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import ParticipantEvents from '../components/participant-components/ParticipantEvents'

import '../styles/participantHome.css'

import getAllEvents from '../utilities/getAllEvents'
import isInTeam from '../utilities/isInTeam'

const ParticipantHome = ({ currentRef, upcomingRef }) => {
  const history = useHistory()
  const [events, setEvents] = useState([])
  const [registered, setRegistered] = useState([])
  const [unregistered, setUnregistered] = useState([])

  const hook = async () => {
    if (!sessionStorage.getItem('logged_in') === 'true') {
      history.push('/')
    }

    const token = sessionStorage.getItem('token')
    if (!token) {
      history.push('/')
    }

    let newEvents = await getAllEvents(token)
    newEvents = newEvents.map(event => ({
      ...event,
      unixStartTime: Date.parse(event.dateOfEvent),
      unixEndTime: Date.parse(event.endOfEvent)
    }))

    setUnregistered(() => [])
    setRegistered(() => [])

    if (newEvents.length !== 0) {
      newEvents.forEach(async (thisevent) => {
        const response = await isInTeam(token, thisevent.eventId)
        if (response.status !== 200) {
          console.log('Hacker?')
        } else if (response.data.message === 'You are not in a team') {
          thisevent.userStatus = 0
          setUnregistered((oldState) => [...oldState, thisevent])
        } else if (response.data.existingTeam.ParticipantTeam.isLeader) {
          thisevent.userStatus = 1
          thisevent.teamData = response.data
          setRegistered((oldState) => [...oldState, thisevent])
        } else {
          thisevent.userStatus = 3
          thisevent.teamData = response.data
          setRegistered((oldState) => [...oldState, thisevent])
        }
      })
    }
    setEvents(newEvents)
  }

  useEffect(hook, [])

  // eslint-disable-next-line no-unused-vars

  return (
    <div className='participant-home'>
      {(events.length !== 0) && (
        <ParticipantEvents unregistered={unregistered} registered={registered} />
      )}
      {events.length === 0 && (
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
