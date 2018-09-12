import React, { Component } from "react";
import instaIcon from "../../assets/instagram.png";
import FBIcon from "../../assets/faceBook.png";
import healthOrgIcon from "../../assets/Health.png";
import { StyledFooter } from "./Footer.style";
import logo from "../../assets/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <text>
          <span> Copyright &copy; WeCook 2018</span>
        </text>
        <div>
          <img src={instaIcon} />
          <img src={FBIcon} />
          <img src={healthOrgIcon} />
        </div>
      </StyledFooter>
    );
  }
}
