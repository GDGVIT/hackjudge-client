import axios from 'axios'

const getAllReviews = async (ATOKEN, eventId) => {
  const URL = 'https://helios-hackjudgeapi.herokuapp.com'
  const config = {
    method: 'get',
    url: `${URL}/review/allReviews/${eventId}`,
    headers: {
      Authorization: `${ATOKEN}`
    }
  }
  const response = await axios(config)
  return response.data
}

export default getAllReviews
