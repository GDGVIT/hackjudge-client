import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Events from '../components/common-components/Events'

import getAllEvents from '../utilities/getAllEvents'

import '../styles/adminHome.css'

const AdminHome = ({ userData }) => {
  const [events, setEvents] = useState([])
  const hook = () => {
    console.log(getAllEvents(sessionStorage.getItem('token')))
    setEvents([
      {
        id: 1,
        name: 'Hack Harvard 2021'
      },
      {
        id: 2,
        name: 'Hack Harvard 2021'
      },
      {
        id: 3,
        name: 'Hack Harvard 2021'
      }
    ])
  }

  useEffect(hook, [])

  return (
    <div className='admin-home'>
      <Events events={events} isAdmin />
    </div>
  )
}

AdminHome.propTypes = {
  userData: PropTypes.object
}

export default AdminHome
