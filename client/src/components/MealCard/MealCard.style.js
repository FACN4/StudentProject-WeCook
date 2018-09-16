import styled from "styled-components";

export const StyledMealCard = styled.section`
  width: 345px;
  margin: 0 0 20px 0px;
  padding: 0;
`;

export const MealImage = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 0;
  margin: 0;
  display: block;
  width: 345px;
  height: 135px;
`;

export const MealDescription = styled.section`
  margin: 0;
  padding: 10px;
  background-color: #000;
  background: ${props => props.theme.white};
  border-bottom: #ededed 1px solid;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;
