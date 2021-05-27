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
    getEvent: `event/${urlPath}`,
    createEvent: 'event/createEvent',
    getAllTeams: `event/team/allTeams/${urlPath}`,
    createTeam: 'participantTeam/createTeam',
    joinTeam: 'participantTeam/joinTeam',
    deleteTeam: 'participantTeam/deleteTeam',
    updateTeam: 'participantTeam/updateTeam',
    getSubmission: `participantTeam/${urlPath}`,
    getMembers: `participantTeam/getMembers/${urlPath}`,
    addTeamMember: 'participantTeam/addTeamMember',
    removeMember: 'participantTeam/removeMember',
    leaveTeam: 'participantTeam/leaveTeam'
  }

  const config = {
    method: method,
    url: BASEURL + calls[url],
    headers: authorization ? { Authorization: authorization } : {}
  }

  if (method === 'post' || method === 'patch' || method === 'delete') {
    config.data = data
  }

  if (url === 'createEvent' && !validateCreateEvent(data)) {
    return 'error'
  }

  try {
    const response = await axios(config)
    return response
  } catch (error) {
    return error.response
  }
}

export default api
