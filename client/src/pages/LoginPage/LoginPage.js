import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { userActions } from "../../actions/user";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    submitted: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      //do an action to login
    }
  };

  render() {
    const { username, password} = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Field
            component="input"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <Field
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Login</button>
          <Link to="/register">Register</Link>
        </form>
      </React.Fragment>
    );
  }
}
// const mapDispatchToProps = {
//   userActions
// };

LoginPage.propTypes = {
  userActions: PropTypes.func,
};

export default reduxForm({
  form:"loginForm"
})(LoginPage)

// export default connect(
//   null,
//   mapDispatchToProps
// )(LoginPage);
