import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ReviewTeamDetails from './ReviewTeamDetails'

import api from '../../utilities/api'

import BackCross from '../../assets/BackCross.svg'

// TODO:
// Display team abstract, link and team members
// Implement update scores route
// Make tis responsive

const MetricScore = ({ metric, handler, referrer }) => {
  const [score, setScore] = useState(metric.score)

  const handleScoreChange = (e) => {
    setScore(() => e.target.value)
    handler(metric.metricId, e.target.value)
  }
  // mertricName is not a typo; if you correct it the errthing breaks
  return (
    <div className='metrics-container'>
      <span className='metric-name'>
        {metric.mertricName}
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
  const [comment, setComment] = useState({})
  const [success, setSuccess] = useState(false)
  const [existed, setExisted] = useState(false)
  const [loader, setLoader] = useState(false)

  const hook = async () => {
    if (referrer === 3) {
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

    // mertricName is not a typo; if you correct it the errthing breaks
    let dat = event.metrics.map(metric => {
      return ({
        mertricName: metric.metricName,
        metricId: metric.metricId,
        score: 0
      })
    })

    setScores(() => dat)
    if (response.status === 200 && response.data.metrics.length !== 0) {
      setExisted(() => true)
      dat = dat.map(item => {
        const item2 = response.data.metrics.find(i2 => i2.metricId === item.merticId)
        return item2 ? { ...item, item2 } : item
      })
      const uniq = [...new Set(response.data.metrics)]
      setScores(() => uniq)
    }
    if (response.status === 200 && response.data.comments && response.data.comments.commentBody) {
      setComment(() => response.data.comments)
    }
  }

  const handleScores = (metricId, score) => {
    const copy = []
    for (const a of scores) {
      if (a.metricId === metricId) {
        copy.push({
          ...a,
          metricId: metricId,
          score: score
        })
      } else {
        copy.push(a)
      }
    }
    setScores(() => copy)
  }

  const handleCommentChange = (e) => {
    setComment((prev) => {
      return (
        {
          ...prev,
          commentBody: e.target.value
        }
      )
    })
  }

  const submitScore = async () => {
    setLoader(() => true)
    let data = {
      eventId: event.eventId,
      reviewNo: review,
      teamId: team.teamId,
      scores: scores,
      commentBody: comment,
      colorCode: 1
    }
    let response
    if (!existed) {
      response = await api('createScore', 'post', data, sessionStorage.getItem('token'), null)
    } else {
      // updatescore
      data = scores.map(score => {
        return (
          {
            scoreId: score.scoreId,
            teamId: score.teamId,
            score: score.score,
            metricId: score.metricId,
            reviewId: score.reviewId
          }
        )
      })
      response = await api('updateTeamScore', 'patch', data, sessionStorage.getItem('token'), null)
      if (response.status === 200) {
        response = await api('updateTeamComment', 'patch', comment, sessionStorage.getItem('token'), null)
      }
    }
    if (response.status === 200) {
      setSuccess(() => 'Scores updates successfully')
    } else {
      setSuccess(() => 'There was an error')
    }
    setLoader(() => false)
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
            <div className='review-body'>
              <ReviewTeamDetails team={team} />
              <div className='scores-and-comments'>
                <div className='metrics'>
                  <h1 className='metrics-title'>
                    Scores
                  </h1>
                  {scores.map(m =>
                    <MetricScore key={m.metricId} metric={m} handler={handleScores} referrer={referrer} />
                  )}
                </div>
                <div className='review-comment'>
                  <h1>
                    Comment
                  </h1>
                  {referrer === 0 && (
                    <textarea value={comment.commentBody} className='comment-textarea' placeholder='Comment' onChange={handleCommentChange} />
                  )}
                  {referrer !== 0 && (
                    <textarea value={comment.commentBody} className='comment-textarea' disabled placeholder='Comment' />
                  )}
                </div>
                {referrer === 0 && (
                  <div className='submit-button-container'>
                    <button onClick={submitScore} className='submit-review-button'>
                      Submit
                    </button>
                  </div>

                )}
              </div>
            </div>
            {loader && (
              <div className='review-score-success'>
                Working...
              </div>
            )}
            {!loader && success && (
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
