import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <div className="dash-buttons">
        <Link to="/edit-profile" className="btn">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
        <Link to="/add-exp" className="btn">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </Link>
        <Link to="/add-edu" className="btn">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;
