import styled from "styled-components";

export const SectionDivider = styled.section`
  margin: 30px auto;
  width: 205px;
  height: 1px;
  background-color: #ccd0d1;
`;

export const MealPageWrapper = styled.section`
  padding: 0 ${props => props.theme.mobilePadding} 25px;
  padding: 10px 25px;
  margin: 0 auto;
  line-height: 1.3;
`;
