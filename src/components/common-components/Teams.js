import React from "react";

const Teams = ({ event, isAdmin }) => {
  return (
    <div>
      {isAdmin && (
        <div>[To be replaced with a list of teams in {event.name}]</div>
      )}
      {!isAdmin && (
        <div>
          [To be replaced with a list of teams in the user is participating in]
        </div>
      )}
    </div>
  );
};

export default Teams;
