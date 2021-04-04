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

  try {
    const response = await axios(config)
    return response
  } catch (err) {
    return err.response
  }
}

export default participantRegister
