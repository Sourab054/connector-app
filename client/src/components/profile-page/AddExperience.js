import React, { Fragment, useState, useSelector } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExp } from "../../actions/profile";

const AddExperience = ({ addExp, history }) => {
  const [formData, setFormdata] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDateDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <h1 className="l text-primary">Add An Experience</h1>
      <p className="para">
        <i className="fas fa-user-tie"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <span className="text-danger">* </span>= <small> required fields</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExp(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            disabled={toDateDisabled ? "disabled" : ""}
            value={to}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              checked={current}
              name="current"
              value={current}
              onChange={(e) => {
                setFormdata({ ...formData, current: !current });
                toggleDateDisabled(!toDateDisabled);
              }}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={(e) => onChange(e)}
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

export default connect(null, { addExp })(AddExperience);
