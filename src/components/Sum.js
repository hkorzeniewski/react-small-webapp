import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sum = ({ activities }) => {
    const location = useLocation
  return (
    <div>
      {location.pathname === "/sum"}  
      {activities.map((activity) => (
        <h3 key={activity.id}>
          {activity.text} {activity.number}
        </h3>
      ))}
    </div>
  );
};

export default Sum;
