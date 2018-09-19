import styled from "styled-components";
import starHelper from "../../utils/starsStyleHelper"

//Function that receives a multiple of 5 between 0-50 and returns a star component
export const StarCreator = rating => {
  const {horizontal,vertical} = starHelper(rating);
  const Stars = styled.span`
    width: 100px;
    height: 27px;
    display: inline-block;
    background: url("https://user-images.githubusercontent.com/28222381/45741660-d424bf00-bc00-11e8-8c4f-fa2d63587006.jpg")
      0 0 no-repeat;
    background-position: ${horizontal}px ${vertical}px;
  `;
  return Stars;
};

export default { StarCreator };
