import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import ParticipantHome from './pages/ParticipantHome'
import Header from './components/common-components/Header'

import './styles/app.css'

import ComponentsTest from './pages/ComponentsTest'

const App = () => {
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
        </Switch>
      </Router>
    </div>
  )
}

export default App
