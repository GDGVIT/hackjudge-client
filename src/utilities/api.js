import axios from 'axios'

const validateCreateEvent = (data) => {
  if (data) return true
  else return false
}

const api = async (url, method, data = null, authorization = null) => {
  const BASEURL = 'http://helios-hackjudgeapi.herokuapp.com/'

  const calls = {
    login: 'auth/login',
    signup: 'auth/signup',
    getAllEvents: 'event/allEvents',
    getEvent: `event/${data.eventId}`,
    createEvent: 'event/createEvent',
    getAllTeams: `event/team/allTeams/${data.eventId}`,
    createTeam: 'participantTeam/createTeam'
  }

  const config = {
    method: method,
    url: BASEURL + calls[url],
    headers: authorization ? { authorization: authorization } : {}
  }

  if (method === 'post') {
    config.data = data
  }

  if (url === 'createEvent' && !validateCreateEvent(data)) {
    return 'error'
  }

  try {
    const response = await axios(config)
    console.log(response)
    return response
  } catch (error) {
    console.log('errr')
    console.log(error.response)
    return error.response
  }
}

export default api