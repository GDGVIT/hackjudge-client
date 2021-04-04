import React, { useState, useEffect } from 'react'
import { useHistory, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import ParticipantHome from './pages/ParticipantHome'
import CreateEvent from './components/admin-components/CreateEvent'
import Header from './components/common-components/Header'

import './styles/app.css'

import ComponentsTest from './pages/ComponentsTest'

const App = () => {
  const history = useHistory()
  const [userData, setUserData] = useState({
    userType: 0,
    name: '',
    email: '',
    password: '',
    logged_in: false
  })

  const handleUserData = (newData) => {
    setUserData((currData) => newData)
  }

  const hook = () => {
    const token = sessionStorage.getItem('token')
    const authId = sessionStorage.getItem('auth_id')
    const userType = sessionStorage.getItem('user_type')
    if (token !== null && authId !== null) {
      handleUserData({ ...userData, userType: userType, logged_in: true })
      if (userData.userType === 2) {
        history.push('/admin')
      } else {
        history.push('/home')
      }
    }
  }

  useEffect(hook, [])

  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login userData={userData} handleUserData={handleUserData} />
          </Route>
          <Route exact path='/admin'>
            <Header currentPage='admin-home' />
            <AdminHome userData={userData} />
          </Route>
          <Route exact path='/home'>
            <Header currentPage='participant-home' />
            <ParticipantHome userData={userData} />
          </Route>
          <Route exact path='/test'>
            <ComponentsTest userData={userData} />
          </Route>
          <Route exact path='/create-event'>
            <Header currentPage='create-event' />
            <CreateEvent />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
