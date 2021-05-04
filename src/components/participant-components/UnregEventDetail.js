import React, { useState } from 'react'
import PropTypes from 'prop-types'

import EventRegister from './EventRegister'

const UnregEventsDetail = ({ event, close }) => {
  const [register, setRegister] = useState(false)

  const hashPs = (ps) => {
    if (!ps) return 0
    let hash = 0
    let i = 0
    let chr = 'c'
    if (ps.length === 0) return hash
    for (i = 0; i < ps.length; i++) {
      chr = ps.charCodeAt(i)
      hash = ((hash << 5) - hash) + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash
  }

  return (
    <div className='unreg-event-details'>
      <div className='unreg-event-details-topbar'>
        <div className='event-details-title'>
          <h1>{event.eventName}</h1>
        </div>
        <div onClick={close} className='unreg-event-detail-close'>
          Back
        </div>
      </div>
      <div className='event-details-body'>
        <div className='event-details-description'>
          <h2>Description</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam perferendis nemo atque, dolore deleniti magnam mollitia veritatis maxime! Earum veritatis nulla magni laudantium dolores numquam, distinctio officiis iusto voluptas excepturi sint recusandae maxime nisi similique! Neque, quaerat dolorem quibusdam maxime omnis, ea assumenda voluptatum illum odit rem voluptate ullam!
        </div>
        <div className='unreg-event-teamSize'>
          <h2>Team size</h2>
          2 - {event.maxTeamSize} members
        </div>
        <div className='unreg-event-ps'>
          <h2>
            Problem Statements
          </h2>
          <ul>
            {event.problemStatements && event.problemStatements.map(ps => <li key={hashPs(ps)}>{ps}</li>)}
          </ul>
        </div>
        <div className='unreg-event-metrics'>
          <h2>Metrics</h2>
          {event.metrics && event.metrics.map(metric => <li key={hashPs(metric.metricId)}>{metric.metricName}</li>)}
        </div>
      </div>
      <div className='event-details-footer'>
        <button onClick={() => setRegister(!register)} className='ppt-event-register-button'>
          Register
        </button>
      </div>
      {register && (
        <EventRegister event={event} close={() => setRegister(!register)} />
      )}
    </div>
  )
}

UnregEventsDetail.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string,
    maxTeamSize: PropTypes.number,
    problemStatements: PropTypes.array,
    metrics: PropTypes.array
  }),
  close: PropTypes.func
}

export default UnregEventsDetail
