import axios from 'axios'

const getAllReviews = async (CTOKEN, eventId, teamName) => {
  const URL = 'http://helios-hackjudgeapi.herokuapp.com'
  const data = {
    team: {
      teamName: teamName
    },
    eventId: eventId
  }
  const config = {
    method: 'get',
    url: `${URL}/participantTeam/createTeam`,
    headers: {
      Authorization: `${CTOKEN}`
    },
    data: data
  }
  const response = await axios(config)
  return response.data
}

export default getAllReviews
