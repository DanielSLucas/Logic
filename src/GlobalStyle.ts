import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F3F3F3 ;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Roboto, sans-serif;
  }

  h1, h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  @media(min-width: 320px) {
    html {
      font-size: 70%;
    }
  }

  @media(min-width: 375px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(min-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(min-width: 1080px) {
    html {
      font-size: 100%;
    }
  }
`;
