import {Colors} from "../styles/Colors.js";
import styled from "styled-components";
import {motion} from "framer-motion";


export const NavigationBar = styled(motion.nav)`
    width:100%;
    height:10%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
export const Logo = styled.h2`
    font-size:30px;
    font-family:"MS Gothic";
    color:${Colors.title};
    letter-spacing:3px;
    position:relative;
    left:5%;
    z-index:30;
    @media (min-width:768px){
        font-size:45px;
        position:relative;
        left:5%;
    }
`;
export const  MenuHamborguer = styled.img`
    width:20%;
    height:35%;
    z-index:30;
`;
