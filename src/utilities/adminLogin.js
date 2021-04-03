import axios from 'axios'

const adminLogin = async (userEmail, userPassword) => {
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: true
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

export default adminLogin
