import styled from "styled-components";

export const H2 = styled.h2`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 20px;
  margin: 10px 0px;
`;

export const Description = styled.span`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
  font-size: 14px;
`;

export const H3 = styled.h3`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  margin: 5px 0px;
`;

export const ReviewDate = styled.span`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
  font-size: 14px;
  margin: 10px 0px;
  display: block;
`;
