import styled from "styled-components";

export const OrderDescription = styled.section`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
  font-size: 14px;
`;

export const ThankyouWrapper = styled.section`
  padding: 0 ${props => props.theme.mobilePadding};
  margin: 0 auto;
`;

export const H2 = styled.h2`
  margin: 15px 0px;
  font-family: ${props => props.theme.headerFont};
  font-size: 20px;
  font-weight: bold;
`;

export const OrderDetails = styled.p`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${props => props.theme.headerFont};
  font-size: 14px;
  display: block;
`;
