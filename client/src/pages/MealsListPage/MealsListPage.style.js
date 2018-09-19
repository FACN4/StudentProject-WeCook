import styled from "styled-components";

export const MealDetails = styled.section`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.darkBlue};
  font-size: 16px;
  a {
    color: ${props => props.theme.darkBlue};
    text-decoration: none;
    font-size: 18px;
  }
`;

export const MealSection = styled.section`
  display: grid;
  grid-template-columns: 235px 90px;
`;

export const MealCardReview = styled.section`
  display: flex;
  font-family: ${props => props.theme.bodyFont};
  font-size: 14px;
  margin-top: 5px;
`;

export const ReviewCount = styled.span`
  font-family: ${props => props.theme.bodyFont};
  font-size: 12px;
  margin-left: 5px;
  padding-top: 6px;
  color: ${props => props.theme.darkBlue};
`;

export const TimeRemaning = styled.span`
  color: ${props => props.theme.green};
`;

export const CookDetails = styled.section`
  margin-top: -40px;
  text-align: center;
  font-family: ${props => props.theme.bodyFont};
  font-size: 12px;
  img {
    border: 10px #ffffff solid;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    display: block;
    margin: 0 auto;
  }
`;

export const MealList = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
