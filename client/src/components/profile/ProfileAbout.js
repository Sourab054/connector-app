import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 class="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}

      <div class="line my-2"></div>
      <h2 class="text-primary">Skills</h2>
      <div class="skills">
        {skills.map((skill, index) => (
          <div key={index} class="p-1">
            <i class="fas fa-check"></i>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAbout;
