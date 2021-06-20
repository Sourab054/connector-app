import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { delEdu } from "../../actions/profile";

const Education = ({ education, delEdu }) => {
  const eduData = education.map((edu) => (
    <tr key={edu.id}>
      <td>{edu.school}</td>
      <td class="hide-sm">{edu.degree}</td>
      <td class="hide-sm">
        <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Current"
        ) : (
          <Moment format="DD/MM/YYYY">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button class="btn btn-danger" onClick={() => delEdu(edu._id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 class="my-2">Education Details</h2>
      <table class="table">
        <thead>
          <tr>
            <th>College</th>
            <th class="hide-sm">Degree</th>
            <th class="hide-sm">Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{eduData}</tbody>
      </table>
    </Fragment>
  );
};

export default connect(null, { delEdu })(Education);
