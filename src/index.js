import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import ParticipantHome from './pages/ParticipantHome'
import Header from './components/common-components/Header'

import './styles/app.css'
import './styles/sharedStyles.css'

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
    setUserData(() => newData)
  }

  const createRef = useRef()
  const currentRef = useRef()
  const pastRef = useRef()
  const upcomingRef = useRef()

  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login userData={userData} handleUserData={handleUserData} />
          </Route>
          <Route exact path='/admin'>
            <Header currentPage='admin-home' createRef={createRef} currentRef={currentRef} pastRef={pastRef} upcomingRef={upcomingRef} />
            <AdminHome userData={userData} createRef={createRef} currentRef={currentRef} pastRef={pastRef} upcomingRef={upcomingRef} />
          </Route>
          <Route exact path='/home'>
            <Header currentPage='participant-home' currentRef={currentRef} pastRef={pastRef} upcomingRef={upcomingRef} />
            <ParticipantHome userData={userData} currentRef={currentRef} upcomingRef={upcomingRef} />
          </Route>
          <Route exact path='/test'>
            <ComponentsTest userData={userData} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
