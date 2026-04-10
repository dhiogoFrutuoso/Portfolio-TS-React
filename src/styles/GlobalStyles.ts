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

  body, html {
    margin: 0;
    padding: 0;
    background-color: #000;
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
    background-color: black;
  }

  main {
    background-color: transparent;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;
