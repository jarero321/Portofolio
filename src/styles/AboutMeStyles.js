import styled from "styled-components";
import {Colors} from "../styles/Colors.js";
import {motion} from "framer-motion";

export const SectionAbout = styled.section`
    width: 100vw;
    height: 100vh;
`;
export const ContainerAbout = styled(motion.div)`
    width: 90%;
    height: 90%;
    margin: 0 auto;
    position:relative;
    top:5%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-betweens;
`;
export const TitleAbout = styled(motion.h2)`
    color:${Colors.title};
    font-family:"TMC";
    font-size:50px;
    text-align:center;

`;
export const IMGAbout = styled(motion.div)`
    width: 70%;
    margin:0 auto;
    margin-top:10%;
    img{
        width:100%;
        height:90%;
    }
`;
export const TextAbout = styled(motion.div)`
    width: 100%;
    height:50%;
    margin-top:2%;
    text-align:center;
    span{
        color:${Colors.main};
        font-size:40px;
        font-family:"TMC";
        margin-bottom:5%;
    }
    p{
        margin-top:2%;
        color:${Colors.letters};
        font-size:20px;
        width:90%;
        margin:0 auto;
        font-family:"TMC";
        line-height:2;
        text-align:justify;
    }
    @media (min-width:362px){
        p{
            width:100%;
            font-size:30px;
            line-height:1.5;
        }
        margin-top:5%;
    }
`;
