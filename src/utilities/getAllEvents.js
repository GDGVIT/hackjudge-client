import axios from 'axios'

const getAllEvents = async (ATOKEN) => {
  const URL = 'http://helios-hackjudgeapi.herokuapp.com'
  const config = {
    method: 'get',
    url: `${URL}/event/allEvents`,
    headers: {
      Authorization: `${ATOKEN}`
    }
  }
  console.log(ATOKEN)
  const response = await axios(config)
  console.log(response.data)
  return response.data
}

export default getAllEvents
