import styled from "styled-components";

export const MealLogistics = styled.section`
  font-family: ${props => props.theme.bodyFont};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Description = styled.span`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
  font-size: 14px;
`;

export const H2 = styled.h2`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  margin: 10px 0px;
`;

export const Contact = styled.button`
  height: 30px;
  width: 104px;
  line-height: 30px;
  text-align: center;
  background: ${props => props.theme.darkBlue};
  color: ${props => props.theme.white};
  border: 0;
  border-radius: 10px;
`;
