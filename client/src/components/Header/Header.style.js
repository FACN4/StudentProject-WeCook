import styled from "styled-components";

export const H1 = styled.h1`
  font-family: ${props => props.theme.headerFont};
  font-size: 28px;
  padding: 0;
  margin: 0;
  height: 36px;
  img {
    height: 56px;
  }
`;

export const User = styled.img`
  height: 20px;
  padding: 18px 0 0 20px;
`;

export const ShoppingBasket = styled.img`
  height: 20px;
  padding: 18px 20px 0 0px;
  text-align: right;
`;

export const StyledHeader = styled.header`
  background: ${props => props.theme.lightBlue};
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.headerFont};
  height: 56px;
  font-style: Regular;
  line-height: 56px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
