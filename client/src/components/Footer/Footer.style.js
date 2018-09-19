import styled from "styled-components";

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  background-color: ${props => props.theme.lightGrey};
  height: 52px;
  display: flex;
  justify-content: space-between;
  line-height: 52px;
  padding-left: 10px;
  font-size: 14px;
  align-items:center;
`;

export const Icons = styled.section`
  display: flex;
  align-items:center;
  img {
    padding: 5px;
  }
`;
