import axios from 'axios'

const getAllTeams = async (ATOKEN, eventId) => {
  const URL = 'http://helios-hackjudgeapi.herokuapp.com/team/allTeams/'
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
