import axios from 'axios'

const getAllEvents = async (ATOKEN) => {
<<<<<<< HEAD
  const URL = 'https://helios-hackjudgeapi.herokuapp.com'
=======
  const URL = 'http://helios-hackjudgeapi.herokuapp.com'
>>>>>>> 1d18837903e68f94e2a85aafa631458ca1b0fe8b
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
