import axios from 'axios'

const adminLogin = (userEmail, userPassword) => {
  const data = {
    email: userEmail,
    password: userPassword,
    isAdmin: true
  }

  const config = {
    method: 'post',
    url: 'http://helios-hackjudgeapi.herokuapp.com/auth/login',
    headers: {},
    data: data
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default adminLogin
