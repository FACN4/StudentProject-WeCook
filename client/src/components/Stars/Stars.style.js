import styled from "styled-components";
import starHelper from "../../utils/starsStyleHelper"

//Function that receives a multiple of 5 between 0-50 and returns a star component
export const StarCreator = rating => {
  const {horizontal,vertical} = starHelper(rating);
  const Stars = styled.span`
    width: 180px;
    height: 48px;
    display: block;
    background: url("https://user-images.githubusercontent.com/28222381/45497282-10c76500-b780-11e8-93f9-1a58add8fc4f.png")
      0 0 no-repeat;
    background-position: ${horizontal}px ${vertical}px;
  `;
  return Stars;
};

export default { StarCreator };
