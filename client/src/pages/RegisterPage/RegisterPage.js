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
          <button>Login</button>
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











// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
//
// import { userActions } from '../../actions/users.js';
//
// class RegisterPage extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             user: {
//                 username: '',
//                 email:'',
//                 phoneNumber:'',
//                 deliveryAddress:''
//                 password: '',
//                 confirmPassword:'',
//             },
//             submitted: false
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         const { name, value } = event.target;
//         const { user } = this.state;
//         this.setState({
//             user: {
//                 ...user,
//                 [name]: value
//             }
//         });
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//
//         this.setState({ submitted: true });
//         const { user } = this.state;
//         const { dispatch } = this.props;
//         if (user.firstName && user.lastName && user.username && user.password) {
//             dispatch(userActions.register(user));
//         }
//     }
//
//     render() {
//         const { registering  } = this.props;
//         const { user, submitted } = this.state;
//         return (
//             <div className="col-md-6 col-md-offset-3">
//                 <h2>Register</h2>
//                 <form name="form" onSubmit={this.handleSubmit}>
//                     <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
//                         <label htmlFor="username">Username</label>
//                         <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
//                         {submitted && !user.username &&
//                             <div className="help-block">Username is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
//                         {submitted && !user.password &&
//                             <div className="help-block">Password is required</div>
//                         }
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary">Register</button>
//                         {registering &&
//                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//                         }
//                         <Link to="/login" className="btn btn-link">Cancel</Link>
//                     </div>
//                     </div>
//                     <div className={'form-group' + (submitted && !user.confirmPassword ? ' has-error' : '')}>
//                         <label htmlFor="confirmPassword">Confirm password</label>
//                         <input type="password" className="form-control" name="password" value={user.confirmPassword} onChange={this.handleChange} />
//                         {submitted && !user.confirmPassword &&
//                             <div className="help-block">Confirm your password</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !user.phoneNumber ? ' has-error' : '')}>
//                         <label htmlFor="phoneNumber">Phone number</label>
//                         <input type="number" className="form-control" name="phoneNumber" value={user.phoneNumber} onChange={this.handleChange} />
//                         {submitted && !user.phoneNumber &&
//                             <div className="help-block">Enter your phone number</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
//                         <label htmlFor="phoneNumber">Email</label>
//                         <input type="email" className="form-control" name="emailaddress" value={user.email} onChange={this.handleChange} />
//                         {submitted && !user.email &&
//                             <div className="help-block">Type your email-address</div>
//                         }
//                     </div>
//                       <div className={'form-group' + (submitted && !user.address ? ' has-error' : '')}>
//                           <label htmlFor="address">address</label>
//                           <input type="text" className="form-control" name="address" value={user.address} onChange={this.handleChange} />
//                           {submitted && !user.email &&
//                               <div className="help-block">Type your Local-address</div>
//                           }
//                       </div>
//                 </form>
//             </div>
//         );
//     }
// }
//
// function mapStateToProps(state) {
//     const { registering } = state.registration;
//     return {
//         registering
//     };
// }
//
// const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
// export { connectedRegisterPage as RegisterPage };
