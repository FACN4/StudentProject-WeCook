import React, { Component } from "react";
import instaIcon from "../../assets/instagram.png";
import FBIcon from "../../assets/faceBook.png";
import healthOrgIcon from "../../assets/Health.png";
import { StyledFooter, Icons } from "./Footer.style";

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <span>Copyright &copy; WeCook 2018</span>
        <Icons>
          <img src={instaIcon} />
          <img src={FBIcon} />
          <img src={healthOrgIcon} />
        </Icons>
      </StyledFooter>
    );
  }
}
