import axios from 'axios'

const login = async (userEmail, userPassword, isAdmin = false) => {
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: isAdmin
  }
  const config = {
    method: 'post',
    url: 'https://helios-hackjudgeapi.herokuapp.com/auth/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }

  try {
    const response = await axios(config)
    console.log(response)
    return response
  } catch (err) {
    return err.response
  }
}

export default login
