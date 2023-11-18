import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    background-image: url("https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/Header_1.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      background: ${({ theme }) => theme.colors.body};
      
    }
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
