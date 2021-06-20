import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="profiles bg-light">
      <div className="profile">
        <img className="rounded" src={avatar} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span>at {company}</span>}
        </p>
        <p>{location}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary my-1">
          {" "}
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
