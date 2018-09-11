import React, { Component } from "react";
import { H1, StyledHeader, User, ShoppingBasket } from "./Header.style";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/profile.png";
import basketIcon from "../../assets/empty-shopping-basket.png";

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <User src={userIcon} alt="userIcon" />
        <H1>
          <img src={logo} alt="WeCook" />
        </H1>
        <ShoppingBasket src={basketIcon} alt="ShoppingBasket" />
      </StyledHeader>
    );
  }
}
