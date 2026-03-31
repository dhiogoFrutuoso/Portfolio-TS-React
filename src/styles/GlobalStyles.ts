import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    overflow-x: hidden;
  }

  body,
  button,
  input,
  select,
  textarea,
  h1,
  h2,
  h3,
  h4,
  p {
    font-family: "Kanit", Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #000000;
  }

  main {
    background-color: rgb(0, 0, 0);
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;
