import React from "react";
import {StyledHeader, Title, Tagline, Logo} from "./HomeHeader.style";
import logo from "../../../../assets/logoDarkBlue.svg";

const HomeHeader = () => {
  return (
    <StyledHeader>

      <Title>
        <Logo src={logo} alt="Company Logo"/>
        WeCook
      </Title>
      <Tagline>Food for good, made by people you trust</Tagline>
    </StyledHeader>
  );
};

export default HomeHeader;
