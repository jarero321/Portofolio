import {Colors} from "../styles/Colors.js";
import styled from "styled-components";
import {motion} from "framer-motion";
import MenuClosed from "../img/MenuClosed.svg"
import MenuOpen from "../img/MenuOpen.svg";


export const NavigationBar = styled(motion.nav)`
    position:fixed;
    width:90%;
    height:10%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0 auto;
    z-index:30;
    top:0;
`;
export const Logo = styled.h2`
    font-size:30px;
    font-family:"MS Gothic";
    color:${Colors.title};
    letter-spacing:3px;
    position:relative;
    margin:0 5%;
    z-index:30;
    @media (min-width:768px){
        font-size:45px;
        margin: 0 5%;
    }
`;
export const  MenuHamborguer = styled.div`
    width:15%;
    height:35%;
    background-image: url(${props => (props.clickMenu == true) ? MenuOpen : MenuClosed});
    background-repeat:no-repeat;
    z-index:50;

`;
