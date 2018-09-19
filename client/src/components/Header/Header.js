import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  H1,
  StyledHeader,
  User,
  EmptyShoppingBasket,
  ShoppingBasket
} from "./Header.style";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/profile.png";
import userLoggedIn from "../../assets/profiled-logged-in.png";
import emptyBasketIcon from "../../assets/empty-shopping-basket.png";
import userLogout from "../../actions/userLogout";

class Header extends Component {
  basketIsEmpty = () => Object.keys(this.props.basket).length === 0;
  userIconClicked = () => {
    this.props.userLogout();
  };
  render() {
    return (
      <StyledHeader>
        {this.props.userStatus.loggedIn ? (
          <User
            src={userLoggedIn}
            alt="userIcon"
            onClick={this.userIconClicked}
          />
        ) : (
          <User src={userIcon} alt="userIcon" />
        )}
        <H1>
          <Link to="/">
            <img src={logo} alt="WeCook" />
          </Link>
        </H1>
        <Link to="/basket">
          {this.basketIsEmpty() ? (
            <EmptyShoppingBasket
              src={emptyBasketIcon}
              alt="Empty ShoppingBasket"
            />
          ) : (
            <ShoppingBasket>
              {Object.keys(this.props.basket).length}
            </ShoppingBasket>
          )}
        </Link>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  userLogout: PropTypes.func
};

const mapStateToProps = ({ basket, userStatus }) => ({
  basket: basket,
  userStatus: userStatus
});

const mapDispatchToProps = {
  userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
