import React from "react";
import Moment from "react-moment";

const ProfileExp = ({
  experience: { company, title, location, from, to, current, description },
}) => {
  return (
    <div className="my-1">
      <h3>{company}</h3>
      <p>
        <Moment format="DD/MM/YYYY">{from}</Moment> -{" "}
        {!to ? "Current" : <Moment format="DD/MM/YYYY">{to}</Moment>}
      </p>
      <p>
        <strong>Position : </strong>
        {title}
      </p>
      <p>
        <strong>Description : </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileExp;
