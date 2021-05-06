import axios from 'axios'

const validateCreateEvent = (data) => {
  if (data) return true
  else return false
}

const api = async (url, method, data = null, authorization = null, urlPath = null) => {
  const BASEURL = 'https://helios-hackjudgeapi.herokuapp.com/'

  const calls = {
    login: 'auth/login',
    signup: 'auth/signup',
    getAllEvents: 'event/allEvents',
    getEvent: `event/${data.eventId}`,
    createEvent: 'event/createEvent',
    getAllTeams: `event/team/allTeams/${data.eventId}`,
    createTeam: 'participantTeam/createTeam',
    joinTeam: 'participantTeam/joinTeam',
    deleteTeam: 'participantTeam/deleteTeam',
    updateTeam: 'participantTeam/updateTeam',
    getSubmission: `participantTeam/${urlPath}`
  }

  const config = {
    method: method,
    url: BASEURL + calls[url],
    headers: authorization ? { Authorization: authorization } : {}
  }

  if (method === 'post') {
    config.data = data
  }

  if (url === 'createEvent' && !validateCreateEvent(data)) {
    return 'error'
  }

  try {
    const response = await axios(config)
    return response
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

export default api
