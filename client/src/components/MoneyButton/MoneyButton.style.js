import styled from "styled-components";
import addToBasket from "../../assets/addToBasket.png";
import checkout from "../../assets/checkout.png";

export const Order = styled.section`
  z-index: 2;
  background: ${props => props.theme.lightGrey};
  position: fixed;
  bottom: 0;
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: space-between;
`;

export const AddToBasket = styled.button`
    background: ${props => props.theme.lightBlue} url(${addToBasket});
    color: transparent;
    width: 184px;
    height: 53px;
    border: 0;
    padding: 0;
    margin: 0;
  }
`;

export const Checkout = styled.button`
    background: ${props => props.theme.lightBlue} url(${checkout});
    color: transparent;
    width: 184px;
    height: 53px;
    border: 0;
    padding: 0;
    margin: 0;
  }
`;

export const Price = styled.section`
  color: ${props => props.theme.darkBlue};
  padding: 0;
  margin: 0;
  line-height: 53px;
  padding-left: 20px;
`;

export const MoneyButtonWrapper = styled.section`
  margin-top: 70px;
`;
