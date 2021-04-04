import axios from 'axios'

const participantRegister = async (userEmail, userPassword, userName) => {
  const data = {
    name: userName,
    email: userEmail,
    password: userPassword,
    isAdmin: false
  }

  const config = {
    method: 'post',
    url: 'https://helios-hackjudgeapi.herokuapp.com/auth/signup',
    headers: {},
    data: data
  }

  const response = await axios(config)
  console.log(response)
  return response
}

export default participantRegister
