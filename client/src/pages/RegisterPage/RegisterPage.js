import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import userRegister from "../../actions/userRegister";

class RegisterPage extends React.Component {
  handleSubmit = event => {
    const {username, postCode, houseNo, phoneNo, email, password} = this.props
    event.preventDefault();
    this.props.userRegister({username, postCode, houseNo, phoneNo, email, password});
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <Field component="input" type="text" name="username" />
          <Field component="input" type="text" name="postCode" />
          <Field component="input" type="number" name="houseNo" />
          <Field component="input" type="text" name="phoneNo" />
          <Field component="input" type="email" name="email" />
          <Field component="input" type="password" name="password" />
          <Field component="input" type="password" name="passwordConfirm" />
          <button>Sign up</button>
          <Link to="/login">Login</Link>
        </form>
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
  postCode:PropTypes.string,
  houseNo:PropTypes.number,
  phoneNo: PropTypes.string,
  email:PropTypes.string,
  password: PropTypes.string,
  passwordConfirm:PropTypes.string
};

const mapStateToProps = ({form:{loginForm:{values}}}) => {
  return {
    username: values.username,
    postCode: values.postCode,
    houseNo: values.houseNumber,
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
  form: "loginForm",
  initialValues: {
    username:"a",
    postCode:"1da",
    houseNumber: 1,
    phoneNo: "07787392473",
    email:"foundersandeaters@gmail.com",
    password:"1234",
    passwordConfirm:"1234"
  }
})(ConnectedRegisterPage);
