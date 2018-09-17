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

h1 {
  color: #11445E;
  font-family: 'Crete Round', serif;
  font-size: 24px;
  margin: 10px 0;
  font-weight: normal;
}
`;
