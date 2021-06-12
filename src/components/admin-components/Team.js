import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import api from '../../utilities/api'

import BackCross from '../../assets/BackCross.svg'

const MetricScore = ({ metric, handler, referrer }) => {
  const [score, setScore] = useState(metric.score)

  const handleScoreChange = (e) => {
    setScore(() => e.target.value)
    handler(metric.metricId, e.target.value)
  }
  return (
    <div className='metrics-container'>
      <span className='metric-name'>
        {metric.metricName}
      </span>
      {referrer === 0 && (
        <input type='number' min='0' max={metric.maxScore} value={score} onChange={handleScoreChange} className='metric-input' maxLength='3' />
      )}
      {referrer !== 0 && (
        <input type='number' min='0' max={metric.maxScore} value={score} disabled className='metric-input' maxLength='3' />
      )}
    </div>
  )
}

MetricScore.propTypes = {
  metric: PropTypes.object,
  handler: PropTypes.func,
  referrer: PropTypes.number
}

// If upcoming event, view the team members, leader, abstract and the link if submitted
// Else just view the team members

// If past event
// View the team members, leader, submission, abstract, link, and scores

// If current event same as past event but mutable

const Team = ({ review, team, event, referrer }) => {
  const [expand, setExpand] = useState(false)
  const [scores, setScores] = useState([])
  const [comment, setComment] = useState('')
  const [success, setSuccess] = useState(false)

  const hook = async () => {
    if (referrer !== 0) {
      return
    }
    let currRev = event.reviews.filter(a => {
      if (a.reviewNo === review) {
        return true
      } else {
        return false
      }
    })
    currRev = currRev[0].reviewId
    const teamId = team.teamId
    currRev += '/' + teamId
    const response = await api('getScore', 'get', null, sessionStorage.getItem('token'), currRev)

    if (response.status === 200) {
      console.log(response.data.metrics)
      // const dat = response.data.metrics.map(metric => {
      //   return ({
      //     metricId: metric.metricId,
      //     score: metric.score
      //   })
      // })
      // console.log({ dat })
      const uniq = [...new Set(response.data.metrics)]
      setScores(() => uniq)
    } else {
      const dat = event.metrics.map(metric => {
        return ({
          metricId: metric.metricId,
          score: null
        })
      })
      setScores(() => dat)
    }
  }

  const handleScores = (metricId, score) => {
    const copy = []
    for (const a of scores) {
      if (a.metricId === metricId) {
        copy.push({
          metricId: metricId,
          score: score
        })
      } else {
        copy.push(a)
      }
    }
    setScores(() => copy)
  }

  const submitScore = async () => {
    const data = {
      eventId: event.eventId,
      reviewNo: review,
      teamId: team.teamId,
      scores: scores,
      commentBody: comment,
      colorCode: 1
    }

    const response = await api('createScore', 'post', data, sessionStorage.getItem('token'), null)
    if (response.status === 200) {
      setSuccess(() => 'Scores updates successfully')
    } else {
      setSuccess(() => 'There was an error')
    }
  }

  useEffect(hook, [])

  return (
    <>
      <div onClick={() => setExpand((curr) => !curr)} className='team-button'>
        {team.teamName}
      </div>
      {expand && referrer !== 3 && (
        <div className='review-overlay' onClick={() => setExpand((curr) => !curr)}>
          <div className='review-card review-card-small' onClick={e => e.stopPropagation()}>
            <div className='review-card-nav'>
              <span>
                <h2 className='review-event-name'>
                  {team.teamName}
                </h2>
                <div className='event-review-no'>
                  Review {review}
                </div>
              </span>
              <div onClick={() => setExpand((curr) => !curr)} className='unreg-event-detail-close'>
                <img
                  className='event-register-back-icon'
                  src={BackCross}
                  alt='Back'
                />
              </div>
            </div>
            <div className='review-body metrics-body'>
              {event.metrics.map(m =>
                <MetricScore key={m.metricId} metric={m} handler={handleScores} referrer={referrer} />
              )}
              <div className='review-comment'>
                {referrer === 0 && (
                  <textarea value={comment} onChange={(e) => setComment(() => e.target.value)} className='comment-textarea' placeholder='Comment' />
                )}
                {referrer !== 0 && (
                  <textarea value={comment} className='comment-textarea' disabled placeholder='Comment' />
                )}
              </div>
              {referrer === 0 && (
                <button onClick={submitScore} className='submit-review-button'>
                  Submit
                </button>
              )}
            </div>
            {success && (
              <div className='review-score-success'>
                {success}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// First get all reviews of a team.
// If the current review is blank, allow insertion
// If not blank allow updates
// Metrics and scores, comments.

Team.propTypes = {
  review: PropTypes.number,
  team: PropTypes.object,
  event: PropTypes.object,
  referrer: PropTypes.number
}

export default Team
