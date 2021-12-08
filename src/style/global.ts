import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black-500: rgba(0, 0, 0, 0.5);
    --black-200: rgba(0, 0, 0, 0.25);
    --white-900: #FFFFFF;
    --green-100: #B1CB1E;
    --green-250: #6F8E50;
    --green-300: #90AD38;
    --green-500: #548D39;
    --green-600: #477232;
    --orange-600: #FF8A2E;
    --orange-800: #FF6D2D;
    --orange-900: #EA4903;
    --yellow-700: #FFC42E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 16px 'ABeeZee', sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    body {
      font-size: 0.9375rem;
    }
  }

  @media screen and (max-width: 780px) {
    body {
      font-size: 0.875rem;
    }
  }
`;