import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  max-width: 400px;
  max-height: 156px;
  margin:auto;
  background: white;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  `;

export const MainImg = styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  width: 100%;
  max-height: 156px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const SmallImg = styled.img`
  grid-column-start: 2;
  width:100%;
  max-height: 50px;
`
export const Img1 = styled(SmallImg)`
  grid-row-start: 1;
  border-top-right-radius: 6px;
`;

export const Img2 = styled(SmallImg)`
  grid-row-start: 2;
`;

export const Img3 = styled(SmallImg)`
  grid-row-start: 3;
  border-bottom-right-radius: 6px;
`;
