import axios from 'axios'

const getAllEvents = () => {
  const config = {
    method: 'get',
    url: '{{URL}}/event/allEvents',
    headers: {
      Authorization: '{{ATOKEN}}'
    }
  }
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default getAllEvents
