import React, { useState } from "react";

import CreateTeam from "./CreateTeam";
import JoinTeam from "./JoinTeam";

const EventRegister = () => {
  const [create, setCreate] = useState(0);

  const handleJoinTeam = () => {
      setCreate(1);
  }

  const handleCreateTeam = () => {
      setCreate(2);
  }

  return (
    <div>
      {create === 0 && (
        <div>
          <button onClick={handleJoinTeam}>Join a team</button>
          <button onClick={handleCreateTeam} >Create a team</button>
        </div>
      )}
      {create === 1 && (
        <div>
            <JoinTeam />
          <button onClick={handleCreateTeam} >Create a team</button>
        </div>
      )}
      {create === 2 && (
        <div>
            <CreateTeam creator="User"/>
          <button onClick={handleJoinTeam}>Join a team</button>
        </div>
      )}


    </div>
  );
};

export default EventRegister;
