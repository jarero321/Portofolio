import {Colors} from "../styles/Colors.js";
import styled from "styled-components";

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
    margin-top:20%;
    right:-100%;
    p{
        font-family:"TMC";
        margin-bottom:30%;
        color:${Colors.title}
    }
`;