import styled from "styled-components";

const StarsTemplate = styled.span`
  width: 180px;
  height: 48px;
  display: block;
  background: url("https://user-images.githubusercontent.com/28222381/45497282-10c76500-b780-11e8-93f9-1a58add8fc4f.png") 0 0 no-repeat;
`;

//Function that receives a multiple of 5 between 0-50 and returns a star component
export const StarCreator = (rating) => {
  let horizontal;
  let vertical;
  if (rating%10 === 0){
    horizontal = -180 + rating*3.6
    vertical = 0
  } else {
    horizontal = -180 + (rating+5)*3.6
    vertical = -48
  }
  const Stars =  styled(StarsTemplate)`
    background-position: ${horizontal}px ${vertical}px;
  `;
  return Stars;
}

export default { StarCreator };
