import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.lightGrey};
  height: 52px;
  display: flex;
  justify-content: space-between;
  line-height: 52px;
  padding-left: 10px;
`;

export const Icons = styled.section`
  img {
    padding-right: 10px;
  }
`;
