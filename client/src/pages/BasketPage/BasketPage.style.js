import styled from "styled-components";

export const MealName = styled.h2`
  color: ${props => props.theme.darkBlue};
  font: ${props => props.theme.headerFont};
  font-size: 18px;
  margin: 0px 0px 5px 0px;
`;

export const BasketWrapper = styled.section`
  margin-bottom: 70px;
`;

export const Delivery = styled.span`
  color: ${props => props.theme.green};
  font: ${props => props.theme.headerFont};
  font-size: 14px;
`;

export const OrderInfo = styled.section`
  margin: 5px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.darkBlue};
  font: ${props => props.theme.bodyFont};
  font-size: 14px;
  font-weight: bold;
  select {
    font: ${props => props.theme.bodyFont};
    font-size: 14px;
    color: #474747;
    border: #b6b6b6 1px solid;
    border-radius: 5px;
    background: #fff;
  }
  button {
    height: 30px;
    width: 70px;
    line-height: 30px;
    text-align: center;
    background: ${props => props.theme.darkBlue};
    color: ${props => props.theme.white};
    border: 0;
    border-radius: 10px;
  }
`;

export const Cost = styled.span`
  padding-top: 5px;
`;
