import React from "react";
import Moment from "react-moment";

const ProfileEdu = ({
  education: { school, degree, fieldofstudy, from, to, current, description },
}) => {
  return (
    <div class="my-1">
      <h3>{school}</h3>
      <p>
        <Moment format="DD/MM/YYYY">{from}</Moment> -{" "}
        {!to ? "Current" : <Moment format="DD/MM/YYYY">{to}</Moment>}
      </p>
      <p>
        <strong>Degree : </strong>
        {degree}
      </p>
      <p>
        <strong>Stream : </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description : </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileEdu;
