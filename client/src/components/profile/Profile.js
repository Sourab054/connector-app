import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileByID } from "../../actions/profile";
import ProfileTop from "../profile/ProfileTop";
import ProfileAbout from "../profile/ProfileAbout";
import ProfileExp from "../profile/ProfileExp";
import ProfileEdu from "../profile/ProfileEdu";
import ProfileGithub from "./ProfileGithub";

const Profile = ({
  getProfileByID,
  match,
  profile: { loading, profile },
  auth,
}) => {
  useEffect(() => {
    getProfileByID(match.params.id);
  }, [getProfileByID, match.params.id]);
  return profile ? (
    <Fragment>
      <Link to="/profiles" className="btn">
        Back to Profiles
      </Link>
      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.user._id && (
          <Link to="/edit-profile" className="btn btn-primary">
            Edit Profile
          </Link>
        )}
      <div className="profile-grid my-1">
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary"> Experiences </h2>
          {profile.experience.length > 0 ? (
            <Fragment>
              {profile.experience.map((exp) => (
                <ProfileExp key={exp._id} experience={exp} />
              ))}
            </Fragment>
          ) : (
            <h4>No experiences</h4>
          )}
        </div>
        <div class="profile-edu bg-white p-2">
          <h2 className="text-primary"> Education </h2>
          {profile.education.length > 0 ? (
            <Fragment>
              {profile.education.map((edu) => (
                <ProfileEdu key={edu._id} education={edu} />
              ))}
            </Fragment>
          ) : (
            <h4>No education</h4>
          )}
        </div>
        <div class="profile-github">
          {profile.githubusername && (
            <ProfileGithub username={profile.githubusername} />
          )}
        </div>
      </div>
    </Fragment>
  ) : null;
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
