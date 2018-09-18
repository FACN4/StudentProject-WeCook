import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  H1,
  StyledHeader,
  User,
  EmptyShoppingBasket,
  ShoppingBasket
} from "./Header.style";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/profile.png";
import emptyBasketIcon from "../../assets/empty-shopping-basket.png";

class Header extends Component {
  basketIsEmpty = () => Object.keys(this.props.basket).length === 0;
  render() {
    return (
      <StyledHeader>
        <User src={userIcon} alt="userIcon" />
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

const mapStateToProps = ({ basket }) => ({
  basket: basket
});

export default connect(
  mapStateToProps,
  null
)(Header);
