import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 95%;
  height: 200px;
  margin:auto;
  overflow: hidden;
  `;

export const MainImg = styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  width:100%;
  height: 100%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Img1 = styled.img`
  grid-column-start: 2;
  grid-row-start: 1;
  width:100%;
  height: 100%;
  border-top-right-radius: 6px;
`;

export const Img2 = styled.img`
  grid-column-start: 2;
  grid-row-start: 2;
  width:100%;
  height: 100%;
`;

export const Img3 = styled.img`
  grid-column-start: 2;
  grid-row-start: 3;
  width:100%;
  height: 100%;
  border-bottom-right-radius: 6px;
`;
