import styled from "styled-components";

export const StyledMealCard = styled.section`
  width: 345px;
  margin: 0 0 20px 0px;
  padding: 0;
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0;
    margin: 0;
    display: block;
  }
`;

export const MealDescription = styled.section`
  margin: 0;
  padding: 10px;
  background-color: #000;
  background: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 235px 90px;
  border-bottom: #ededed 1px solid;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;

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

export const MealCardReview = styled.section`
  display: flex;
  font-family: ${props => props.theme.bodyFont};
  font-size: 14px;
  margin-top: 5px;
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
    border: 10px #fff solid;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
`;

export const MealList = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
