import { createGlobalStyle } from 'styled-components';
import gothic from "./MSGOTHIC.TTF"
import TMC from "./TCM.TTF"
const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
     font-family: "MS Gothic";
     src: url(${gothic});
    }
    @font-face {
      font-family: "TMC" ;
      src: url(${TMC});
    }
    
    background-color:#01132A;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
 
export default GlobalStyle;