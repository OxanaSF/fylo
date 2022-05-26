import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap');



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  
  
}


html {
  scroll-behavior: smooth;
}


body {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: hsl(0, 0%, 100%);


h1 {
  font-size: 28px;
}


`;

export default GlobalStyles;
