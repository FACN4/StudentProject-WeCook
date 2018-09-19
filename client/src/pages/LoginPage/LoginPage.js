import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import userLogin from "../../actions/userLogin";
import { Header } from "../../components"

class LoginPage extends React.Component {
  handleSubmit = event => {
    const {username, password} = this.props
    event.preventDefault();
    this.props.userLogin({username,password});
  };
  //
  // componentDidUpdate() {
	// 	if(this.props.match.params.id && !this.props.initialized)
	// 		this.props.initialize(this.props.initialValues);
	// }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label>
          <Field component="input" type="text" name="username" />
          <label htmlFor="password">password</label>
          <Field component="input" type="password" name="password" />
          <button>Login</button>
        </form>
        <Link to="/register">Register</Link>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  userLogin
};

LoginPage.propTypes = {
  userLogin: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string
};

const mapStateToProps = ({form:{loginForm:{values}}}) => {
  return {
    username: values.username,
    password: values.password
  };
};

const connectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default reduxForm({
  form: "loginForm",
  initialValues: {
    username:"",
    password:""
  }
})(connectedLoginPage);
