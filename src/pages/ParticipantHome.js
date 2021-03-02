import React, { useState, useEffect } from "react";

import Events from "../components/common-components/Events";

import "../styles/participantHome.css";

const ParticipantHome = ({userData}) => {
  const [events, setEvents] = useState([]);

  console.log(userData)

  const hook = () => {
    setEvents([
      {
        id: 1,
        name: "Event 1",
      },
      {
        id: 2,
        name: "Event 2",
      },
    ]);
  };

  useEffect(hook, []);
  return (
    <>
      <div className="participant-home">
        <h1>Participant home page</h1>
        <p>
          Welcome {userData.email}, your password is {userData.password}
        </p>
        <Events events={events} isAdmin={false} />
      </div>
    </>
  );
};

export default ParticipantHome;
