import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import userLogin from "../../actions/userLogin";
import { Header, Footer } from "../../components";
import {
  LoginWrapper,
  Login,
  LoginInput,
  PasswordInput,
  Form,
  StyledLink,
  Or
} from "./LoginPage.style";

class LoginPage extends React.Component {
  handleSubmit = event => {
    const { username, password } = this.props;
    event.preventDefault();
    this.props.userLogin({ username, password });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <LoginWrapper>
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit}>
            <label htmlFor="username">username</label>
            <LoginInput
              component="input"
              placeholder="Username"
              type="text"
              name="username"
              id="username"
            />
            <label htmlFor="password">password</label>
            <PasswordInput
              component="input"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <Login>Login</Login>
          </Form>
          <Or>Or</Or>
          <StyledLink to="/register">Create an Account</StyledLink>
        </LoginWrapper>
        <Footer />
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

const mapStateToProps = ({
  form: {
    loginForm: { values }
  }
}) => {
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
    username: "",
    password: ""
  }
})(connectedLoginPage);
