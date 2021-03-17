import {Colors} from "../styles/Colors.js";
import styled from "styled-components";
import {motion} from "framer-motion";

export const OptionsNav = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:#01132A;
    z-index:20;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:35px;
    justify-content:center;
    right:-100%;
    p{
        margin-top:5%;
        font-family:"TMC";
        margin-bottom:30%;
        color:${Colors.title}
    }
`;