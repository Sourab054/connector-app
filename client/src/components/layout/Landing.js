import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = ({ isAuthenticated }) => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="overlay">
        <div className="landing-inner">
          <h1 className="l">
            Developer <span style={{ color: "#08d9d6" }}> Connector</span>
          </h1>
          <p className="para">
            Create a profile or a portfolio, start helping other developers or
            get help from other developers
          </p>
          <div>
            <Link to="/register" className="btn btn-primary">
              Sign up
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
