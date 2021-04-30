import React from 'react'
import PropTypes from 'prop-types'

const UnregEventsDetail = ({ event }) => {
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
          <h3>{event.maxMembers} Members</h3>
        </div>
        <div className='unreg-event-detail-close'>
          X
        </div>
      </div>
      <div className='event-details-body'>
        <div className='event-details-description'>
          ASdf
        </div>
        <div className='unreg-event-ps'>
          <h3>
            Problem Statements
          </h3>
          <ul>
            {event.problemStatements && event.problemStatements.map(ps => <li key={hashPs(ps)}>{ps}</li>)}
          </ul>
        </div>
        <div>
          asdfg
        </div>
        <div>
          Asdf
        </div>
      </div>
      <div className='event-details-footer'>
        <button className='ppt-event-register-button'>
          Register
        </button>
      </div>
    </div>
  )
}

UnregEventsDetail.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string,
    maxMembers: PropTypes.number,
    problemStatements: PropTypes.array
  })
}

export default UnregEventsDetail
