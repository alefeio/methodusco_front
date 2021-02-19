import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    /* white-space: nowrap !important; */
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 58%;
    }

    @media (max-width: 720px) {
      font-size: 54%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    /* background-image: linear-gradient(-19deg, #d0b45b 0%, #ddc063 100%); */
    background: #2d726e;
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    transition: 0.3s;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
