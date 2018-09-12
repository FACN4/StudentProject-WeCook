import { injectGlobal } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = injectGlobal`
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}
`;
