import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 250px;
  background-image: url(https://user-images.githubusercontent.com/28222381/45626954-72961080-ba99-11e8-9215-538504f985ea.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  background-position: bottom;
`;

export const Title = styled.h1`
  color: ${props => props.theme.darkBlue};
  margin:0;
  padding: 60px 0px 20px 0px;
  font-size: 40px;
  text-align: center;
`;

export const Tagline = styled.p`
  color: black;
  width: 60%;
  margin: auto;
  font-size: 20px;
  text-align: center;
`;

export const Logo = styled.img`
  height: 60px;
  margin: -12px 12px -12px 0px;
`;
