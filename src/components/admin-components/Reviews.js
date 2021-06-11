import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Review from './Review'
import AllTeams from './AllTeams'

import api from '../../utilities/api'

const Reviews = ({ event, referrer }) => {
  const [allReviews, setAllReviews] = useState([])

  const hook = async () => {
    const response = await api('allReviews', 'get', null, sessionStorage.getItem('token'), event.eventId)
    if (response.status === 200) {
      setAllReviews(() => response.data.allReviews)
    }
    console.log({ event, allReviews })
  }

  useEffect(hook, [])

  return (
    <>
      {referrer !== 3 && (
        <div className='reviews-list'>
          {allReviews.map(rev => <Review key={rev.reviewId} reviewData={rev} n={rev.reviewNo} event={event} referrer={referrer} />)}
          {/* <Review n={0} event={event} referrer={referrer} />
          <Review n={1} event={event} referrer={referrer} />
          <Review n={2} event={event} referrer={referrer} /> */}
        </div>
      )}
      {referrer === 3 && (
        <AllTeams event={event} />
      )}
    </>
  )
}

Reviews.propTypes = {
  event: PropTypes.object,
  referrer: PropTypes.number
}

export default Reviews
