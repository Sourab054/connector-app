import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { delExp } from "../../actions/profile";

const Experience = ({ experience, delExp }) => {
  const expData = experience.map((exp) => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td class="hide-sm">{exp.title}</td>
      <td class="hide-sm">
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Current"
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button class="btn btn-danger" onClick={() => delExp(exp._id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 class="my-2">Experience credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Role</th>
            <th class="hide-sm">Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{expData}</tbody>
      </table>
    </Fragment>
  );
};

export default connect(null, { delExp })(Experience);
