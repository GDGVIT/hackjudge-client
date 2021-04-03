import axios from 'axios'

const participantRegister = async (userEmail, userPassword) => {
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: false
  }

  const config = {
    method: 'post',
    url: '{{URL}}/auth/signup',
    headers: {},
    data: data
  }

  const response = axios(config)
  console.log(response)
}

export default participantRegister
