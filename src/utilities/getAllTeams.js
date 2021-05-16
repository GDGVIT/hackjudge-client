import axios from 'axios'

const getAllTeams = async (ATOKEN, eventId) => {
<<<<<<< HEAD
  const URL = 'https://helios-hackjudgeapi.herokuapp.com/team/allTeams/'
=======
  const URL = 'http://helios-hackjudgeapi.herokuapp.com/team/allTeams/'
>>>>>>> 1d18837903e68f94e2a85aafa631458ca1b0fe8b
  const config = {
    method: 'get',
    url: `${URL}${eventId}`,
    headers: {
      Authorization: `${ATOKEN}`
    }
  }
  const response = await axios(config)
  return response
}

export default getAllTeams
