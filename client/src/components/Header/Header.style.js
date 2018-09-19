import styled from "styled-components";
import fullBasketIcon from "../../assets/full-shopping-basket.png";

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
  padding: 18px 0 0 ${props => props.theme.mobilePadding};
`;

export const EmptyShoppingBasket = styled.img`
  width: 20px;
  margin: 18px ${props => props.theme.mobilePadding} 0 0px;
  text-align: right;
`;

export const ShoppingBasket = styled.section`
  background: url(${fullBasketIcon});
  width: 20px;
  height: 30px;
  margin: 13px ${props => props.theme.mobilePadding} 0 0px;
  text-align: center;
  line-height: 1;
  font-size: 12px;
  font-family: ${props => props.theme.headerFont};
`;

export const StyledHeader = styled.header`
  background: ${props => props.theme.lightBlue};
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.headerFont};
  height: 56px;
  font-style: Regular;
  text-align: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
  a {
    text-decoration: none;
  }
`;
