import React from "react";
import Reviews from "../admin-components/Reviews";

const Event = ({ event, isAdmin }) => {
  return (
    <div>
      {isAdmin && (
        <div>
          {event.name}
          {/* button to list all teams */}
          <Reviews event={event} />
        </div>
      )}

      {!isAdmin && (
        <div>
          {event.name} [Register button]
          </div>
      )}
    </div>
  );
};

export default Event;
