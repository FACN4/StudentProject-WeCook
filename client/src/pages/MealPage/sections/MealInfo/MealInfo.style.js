import styled from "styled-components";

export const MealLogistics = styled.section`
  font-family: ${props => props.theme.bodyFont};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MealScheduled = styled.span`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 16px;
`;

export const Price = styled.span`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 16px;
  text-align: right;
`;

export const Deadline = styled.span`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.green};
  font-size: 16px;
`;

export const RemainingPortions = styled.span`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.orange};
  font-size: 14px;
  text-align: right;
`;

export const Description = styled.p`
  padding: 15px 0 5px;
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

export const Tag = styled.span`
  border: ${props => props.theme.darkBlue} 1px solid;
  padding: 5px;
  color: ${props => props.theme.darkBlue};
  font-weight: bold;
  margin-right: 5px;
  font-size: 14px;
`;
