import styled from "styled-components";

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
