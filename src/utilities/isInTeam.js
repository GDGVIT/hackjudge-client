import axios from 'axios'

const isInTeam = async (CTOKEN, eventId) => {
  const URL = 'https://helios-hackjudgeapi.herokuapp.com/participantTeam/isInTeam'
  const data = {
    eventId: eventId
  }
  const config = {
    method: 'post',
    url: `${URL}`,
    headers: {
      Authorization: `${CTOKEN}`
    },
    data: data
  }
  const response = await axios(config)
  return response
}

export default isInTeam
