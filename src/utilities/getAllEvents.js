import axios from 'axios'

const getAllEvents = async () => {
  const URL = 'http://helios-hackjudgeapi.herokuapp.com'
  const ATOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRoSWQiOiJmZjM5ZmU2ZC04N2JmLTQ4OTAtODc3OS0zYzAyM2IxNDRkYWUiLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMVF6cTR5Zm83MmpZSmY5VGc1VVNHdVZ4NFJZc3RTN2ZobjFPdGZPZ0pVM2xqeUI0ZjJhNkMiLCJpc0FkbWluIjp0cnVlLCJjb25maXJtZWQiOm51bGx9.a11dVIZJzBrnn9BGS0sAD8kGBHCwQa29QjtvPa9MikA'
  const config = {
    method: 'get',
    url: `${URL}/event/allEvents`,
    headers: {
      Authorization: `${ATOKEN}`
    }
  }
  const response = await axios(config)
  console.log(response.data)
  return response.data
}

export default getAllEvents
