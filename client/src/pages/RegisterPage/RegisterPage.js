import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import userRegister from "../../actions/userRegister";
import { Header, Footer } from "../../components";
import {
  RegisterWrapper,
  Or,
  StyledLink,
  Register,
  PasswordInput,
  PhoneInput,
  EmailInput,
  LocationInput,
  UsernameInput
} from "./RegisterPage.style";

class RegisterPage extends React.Component {
  handleSubmit = event => {
    const {
      username,
      postCode,
      houseNo,
      phoneNo,
      email,
      password
    } = this.props;
    event.preventDefault();
    this.props.userRegister({
      username,
      postCode,
      houseNo,
      phoneNo,
      email,
      password
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <RegisterWrapper>
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">username</label>
            <Field
              placeholder="Username"
              component={UsernameInput}
              type="text"
              name="username"
              id="username"
            />
            <label htmlFor="postCode">post code</label>
            <Field
              placeholder="Postcode"
              component={LocationInput}
              type="text"
              name="postCode"
              id="postCode"
            />
            <label htmlFor="houseNo">house number</label>
            <Field
              placeholder="House Number"
              component={LocationInput}
              type="number"
              name="houseNo"
              id="houseNo"
            />
            <label htmlFor="phoneNo">phone number</label>
            <Field
              component={PhoneInput}
              placeholder="Phone Number"
              type="text"
              name="phoneNo"
              id="phoneNo"
            />
            <label htmlFor="email">email</label>
            <Field
              component={EmailInput}
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="password">password</label>
            <Field
              component={PasswordInput}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="passwordConfirm">confirm password</label>
            <Field
              component={PasswordInput}
              placeholder="Confirm Password"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
            />
            <Register>Register</Register>
          </form>
          <Or>Or</Or>
          <StyledLink to="/login">Login</StyledLink>
        </RegisterWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  userRegister
};

RegisterPage.propTypes = {
  userRegister: PropTypes.func,
  username: PropTypes.string,
  postCode: PropTypes.string,
  houseNo: PropTypes.number,
  phoneNo: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string
};

const mapStateToProps = ({
  form: {
    registerForm: { values }
  }
}) => {
  return {
    username: values.username,
    postCode: values.postCode,
    houseNo: values.houseNo,
    phoneNo: values.phoneNo,
    email: values.email,
    password: values.password,
    confirmPassword: values.confirmPassword
  };
};

const ConnectedRegisterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);

export default reduxForm({
  form: "registerForm",
  initialValues: {
    username: "",
    postCode: "",
    houseNo: null,
    phoneNo: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }
})(ConnectedRegisterPage);
