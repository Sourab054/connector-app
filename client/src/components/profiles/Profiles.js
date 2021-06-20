import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import profile from "../../reducers/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      <h1 class="l text-primary">Developers</h1>
      <p class="para">Browse and connect with developers</p>
      {profiles.length > 0
        ? profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        : "No profiles available"}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
