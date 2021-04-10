import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Events from '../components/common-components/Events'

import '../styles/participantHome.css'

const ParticipantHome = ({ userData, currentRef, upcomingRef }) => {
  const [events, setEvents] = useState([])
  const [overlayType, setOverlayType] = useState(0)
  if (currentRef.current) {
    currentRef.current.onclick = () => {
      setOverlayType(0)
    }
  }

  if (upcomingRef.current) {
    upcomingRef.current.onclick = () => {
      setOverlayType(3)
    }
  }
  const hook = () => {
    setEvents([
      {
        id: 1,
        name: 'Event 1'
      },
      {
        id: 2,
        name: 'Event 2'
      }
    ])
  }

  useEffect(hook, [])
  return (
    <>
      <div className='participant-home'>
        {overlayType === 0 && (
          <Events events={events} isAdmin={false} />
        )}
      </div>
    </>
  )
}

ParticipantHome.propTypes = {
  userData: PropTypes.object,
  currentRef: PropTypes.any,
  upcomingRef: PropTypes.any
}

export default ParticipantHome
