import styled from "styled-components";
import addToBasket from "../../assets/addToBasket.png";

export const Order = styled.section`
  background: ${props => props.theme.lightGrey};
  position: fixed;
  bottom: 0;
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 53px;
  button {
    background: ${props => props.theme.lightBlue} url(${addToBasket});
    color: transparent;
    width: 184px;
    height: 53px;
    border: 0;
    padding: 0;
    margin: 0;
  }
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.section`
  color: ${props => props.theme.darkBlue};
  padding: 0;
  margin: 0;
  line-height: 53px;
  padding-left: 20px;
`;
