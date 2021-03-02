import React, {useState, useEffect} from 'react';

import Events from '../components/common-components/Events';

import '../styles/adminHome.css';

const AdminHome = ({userData}) => {

    const [events, setEvents] = useState([]);

    const hook = () => {
        setEvents([
            {
                id: 1,
                name: "Event 1"
            },
            {
                id: 2,
                name: "Event 2"
            }
        ])
    };

    useEffect(hook, []);

    return (
        <>
        <div className="admin-home">
            <h1>Admin home</h1>
            <Events events={events} isAdmin={true}/>
        </div>
        </>
    )
}

export default AdminHome;