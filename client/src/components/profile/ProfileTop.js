import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="rounded my-1" src={avatar} alt="" />
      <h1 className="l">{name}</h1>
      <p>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location}</p>
      <div className="icons my-1">
        <Link to="#">
          <i className="fas fa-globe fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-facebook fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-twitter fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-instagram fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProfileTop;
