import axios from 'axios'

const adminLogin = async (userEmail, userPassword) => {
  userEmail = 'a1@b.com'
  userPassword = 'qwetyuiop'
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: false
  }
  const config = {
    method: 'post',
    url: 'http://helios-hackjudgeapi.herokuapp.com/auth/login',
    headers: {},
    data: data
  }

  const response = await axios(config)
  console.log(response.data)
}

export default adminLogin
