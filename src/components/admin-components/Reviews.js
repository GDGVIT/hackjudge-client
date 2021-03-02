import React from "react";
import Review from "./Review";

const Reviews = ({ event }) => {
  return (
    <div>
      <Review n={0} event={event} />
      <Review n={1} event={event} />
      <Review n={2} event={event} />
    </div>
  );
};

export default Reviews;
