import React, { useState, useRef, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'

import './styles/app.css'
import './styles/sharedStyles.css'

const AdminHome = React.lazy(() => import('./pages/AdminHome'))
const ParticipantHome = React.lazy(() => import('./pages/ParticipantHome'))
const Header = React.lazy(() => import('./components/common-components/Header'))

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
            <Suspense fallback={<div>Header</div>}>
              <Header currentPage='admin-home' createRef={createRef} currentRef={currentRef} pastRef={pastRef} upcomingRef={upcomingRef} />
            </Suspense>
            <Suspense fallback={<div>Home</div>}>
              <AdminHome userData={userData} createRef={createRef} currentRef={currentRef} pastRef={pastRef} upcomingRef={upcomingRef} />
            </Suspense>
          </Route>
          <Route exact path='/home'>
            <Suspense fallback={<div>Header</div>}>
              <Header currentPage='participant-home' currentRef={currentRef} pastRef={pastRef} upcomingRef={upcomingRef} />
            </Suspense>
            <Suspense fallback={<div>Home</div>}>
              <ParticipantHome userData={userData} currentRef={currentRef} upcomingRef={upcomingRef} />
            </Suspense>
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
