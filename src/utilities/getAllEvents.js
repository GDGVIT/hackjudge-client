import axios from 'axios'

const getAllEvents = async (ATOKEN) => {
  const URL = 'https://helios-hackjudgeapi.herokuapp.com'
  const config = {
    method: 'get',
    url: `${URL}/event/allEvents`,
    headers: {
      Authorization: `${ATOKEN}`
    }
  }
  const response = await axios(config)
  return response.data
}

export default getAllEvents
