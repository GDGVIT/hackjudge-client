import axios from 'axios'

const getEvent = async (ATOKEN, eventID) => {
  const URL = 'http://helios-hackjudgeapi.herokuapp.com'
  const config = {
    method: 'get',
    url: `${URL}/event/eventID`,
    headers: {
      Authorization: `${ATOKEN}`
    }
  }
  const response = await axios(config)
  return response.data
}

export default getEvent
