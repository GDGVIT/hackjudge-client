import React, { useState } from "react";

const Review = ({ n, event }) => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  }

  return (
    <span>
      <button onClick={handleButtonClick} >Review {n}</button>
      {expanded && (
        <div className="reviewCard">
          <h1 className="reviewName">
            Review {n} for {event.name}
          </h1>
          <button className="collapse-review" onClick ={handleButtonClick}>
            Back
          </button>
        </div>
      )}
    </span>
  );
};

export default Review;
