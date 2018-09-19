import styled from "styled-components";

export const MealLogistics = styled.section`
  font-family: ${props => props.theme.bodyFont};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Description = styled.div`
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.darkBlue};
  font-size: 14px;
`;

export const H2 = styled.h2`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  margin: 20px 0px;
`;

export const Contact = styled.button`
  height: 30px;
  width: 104px;
  line-height: 30px;
  text-align: center;
  background: ${props => props.theme.darkBlue};
  color: ${props => props.theme.white};
  border: 0;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CookInfo = styled.section`
  display: grid;
  grid-template-columns: 120px auto;
  margin: 10px 0px;
`;

export const Details = styled.section``;

export const ReviewCount = styled.span`
  font-family: ${props => props.theme.bodyFont};
  font-size: 12px;
  margin-left: 3px;
  padding-top: 6px;
  color: ${props => props.theme.darkBlue};
`;

export const CookName = styled.h2`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  margin: 5px 0px;
`;

export const CookImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Rating = styled.section`
  display: grid;
  grid-template-columns: 105px 1fr;
  margin-bottom: 5px;
`;
