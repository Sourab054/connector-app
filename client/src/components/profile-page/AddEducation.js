import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEdu } from "../../actions/profile";

const AddEducation = ({ addEdu, history }) => {
  const [formData, setFormdata] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDateDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <h1 className="l text-primary">Add Your Education</h1>
      <p className="para">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
        that you have attended
      </p>
      <span className="text-danger">* </span>= <small> required fields</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEdu(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            disabled={toDateDisabled ? "disabled" : ""}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current}
              onChange={(e) => {
                setFormdata({ ...formData, current: !current });
                toggleDateDisabled(!toDateDisabled);
              }}
            />{" "}
            Current School
          </p>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
            cols="30"
            rows="5"
            placeholder="Program Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default connect(null, { addEdu })(AddEducation);
