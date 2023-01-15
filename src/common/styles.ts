import styled, { createGlobalStyle } from "styled-components";

export const mainColor = "#DC143C";

export const GlobalStyle = createGlobalStyle`
  /* set box-sizing to border-box */
  /* set default font */
  html, body {
    direction: ltr;
    box-sizing: border-box;
    touch-action: manipulation;
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }
  #__next {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    height: 100%;
    background: white;
  }
  *,
  *:before,
  *:after {
    -webkit-tap-highlight-color: transparent;
    box-sizing: inherit;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  // We use it to prevent safari from auto-zooming
  input:active {
    font-size: 16px;
  }
  
`;

export const StyledPageWrapper = styled.div<{ backgroundColor?: string }>`
  ${({ backgroundColor }) =>
    `  background-color: ${backgroundColor || "white"}`};
`;
