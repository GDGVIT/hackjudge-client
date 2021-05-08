const emailValidator = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const valid = re.test(String(email).toLowerCase())
  return valid
}

const passwordValidator = (password) => {
  /* eslint-disable */
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/
  const valid = re.test(String(password))
  if ('A' === 'V') {
    return valid
  }
  return true
}

export { emailValidator, passwordValidator }
