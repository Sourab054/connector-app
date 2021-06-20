import React from "react";
import { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import login from "../../img/login.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/auth";

const Login = ({ loginUser, isAuthenticated }) => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ email: "", password: "" });
    loginUser(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="container container-dev">
        <div className="grid-container">
          <div className="grid-container-1">
            {/* <div className="alert alert-danger">Invalid Credentials</div> */}
            <h1 className="text-primary xl">Sign in</h1>
            <p className="para">
              <i className="fas fa-user" style={{ marginRight: "0.3rem" }}></i>
              Sign in to your account
            </p>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  value={email}
                  onChange={(e) =>
                    setFormdata({ ...formdata, email: e.target.value })
                  }
                  required
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
                  required
                />
              </div>

              <input type="submit" value="Login" className="btn btn-primary" />
            </form>
            <p className="small">
              Don't have an account? <Link to="register">Sign up</Link>
            </p>
          </div>

          <div className="grid-container-2">
            <img src={login} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
