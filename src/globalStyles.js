import { createGlobalStyle } from "styled-components";

//глобальные стили проекта

const GlobalStyles = createGlobalStyle`
* {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }`;

export default GlobalStyles;
