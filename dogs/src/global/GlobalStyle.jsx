import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

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
    --type-second: "Spectral", georgia;
    
  }
  .App{
    display: flex;
    flex-direction: column;
    min-height:  calc(100vh + 11rem)
  }
  .AppBody{
   flex: 1

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
  .mainContainer{
    margin-top: 2rem
  }
  a{
    text-decoration: none;
    color: #333;
  }
  .animeLeft{
    opacity: 0;
    transform: translatex(-20px);
    animation: animeLeft .3s forwards;
  }
  @keyframes animeLeft {
    to{
      opacity: 1;
      transform: initial;
    } 
  }

`;
 
