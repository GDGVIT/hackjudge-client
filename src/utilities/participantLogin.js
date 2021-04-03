import axios from 'axios'

const participantLogin = async (userEmail, userPassword) => {
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: false
  }
  const config = {
    method: 'post',
    url: 'https://helios-hackjudgeapi.herokuapp.com/auth/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }
  const response = await axios(config)
  return response
}

export default participantLogin
