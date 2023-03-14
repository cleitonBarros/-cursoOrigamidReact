import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    color: #333;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--type-first);
  }
  body{
    padding-top: 4rem;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: "Spectral", Georgia;
    
  }
  ul,li{
    list-style: none;
  }
  img{
    display: block;
    max-width: 100%;
  }
  button,input{
    display: block;
    font-size: 1rem;

  }
  .container{
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
  }

`;
 
