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
        <User src={userIcon} alt="userIcon" onClick={this.userIconClicked} />
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
              {Object.keys(this.props.basket).reduce((acc,key) => {
                const {quantity} = this.props.basket[key]
                return acc + quantity
              },0)}
            </ShoppingBasket>
          )}
        </Link>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  userLogout: PropTypes.func,
  basket: PropTypes.shape({
    key: PropTypes.shape({
      quantity: PropTypes.number
    })
  })
};

const mapStateToProps = ({ basket }) => ({
  basket: basket
});

const mapDispatchToProps = {
  userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
