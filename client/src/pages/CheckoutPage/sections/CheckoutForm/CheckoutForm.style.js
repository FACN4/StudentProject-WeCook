import styled from "styled-components";

export const CheckoutWrapper = styled.section`
  padding: 0 ${props => props.theme.mobilePadding} 15px;
  margin: 0 auto;
  font-size: 14px;
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
`;

export const Delivery = styled.p`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.green};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  margin: 10px 0px;
`;

export const Paynow = styled.button`
  height: 30px;
  width: 104px;
  line-height: 30px;
  text-align: center;
  background: ${props => props.theme.darkBlue};
  color: ${props => props.theme.white};
  border: 0;
  border-radius: 10px;
  margin: 20px 0px;
`;

export const Address = styled.span`
  font-size: 14px;
  display: block;
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
`;

export const CardDetails = styled.span`
  font-size: 14px;
  display: block;
  margin-bottom: 20px;
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
`;
