import React from "react";
import { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formdata;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Pasword does not match", "danger");
    } else {
      register({ name, email, password });
      setFormdata({ name: "", email: "", password: "", password2: "" });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="text-primary xl">Sign up</h1>
      <p className="para">
        <i className="fas fa-user" style={{ marginRight: "0.3rem" }}></i>
        Create your account
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Id"
            name="email"
            value={email}
            onChange={(e) =>
              setFormdata({ ...formdata, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) =>
              setFormdata({ ...formdata, password: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) =>
              setFormdata({ ...formdata, password2: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="small">
        Already have an account? <Link to="login">Sign in</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
