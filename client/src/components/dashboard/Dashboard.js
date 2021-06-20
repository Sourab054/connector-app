import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { delAcc, getCurrentProfile } from "../../actions/profile";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = ({
  getCurrentProfile,
  delAcc,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <p>Loading...</p>
  ) : (
    <Fragment>
      <h1 className="text-primary l">Dashboard</h1>
      <h3 className="my-1">
        <i className="fas fa-user"></i> Welcome, {user && user.name}
      </h3>

      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div class="my-2 px-1">
            <button class="btn btn-danger" onClick={() => delAcc()}>
              <i class="fas fa-user-times"></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet created your profile, setup your profile</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, delAcc })(
  Dashboard
);
