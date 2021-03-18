import {Colors} from "../styles/Colors.js";
import styled from "styled-components";
import {motion} from "framer-motion";

export const SectionLoading = styled.section`
    width: 100vw;
    height:100vh;

`;
export const ContainerLogo = styled.div`
    width: 80%;
    height: 30%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:relative;
    top:25%;
    left:10%;
    @media (min-width:768px) {
        width: 70%;
        left:15%;
    }
    @media (min-width:1200px){
        width:30%;
        left:35%;
    }
    
`;
export const ProgressBar = styled(motion.div)`
    width: 100%;
    height:.5%;
    background-color:${Colors.main};
    position: relative;
    top:17%;
    @media(min-width:1200px){
        top:17%;
    }
    @media (min-width:1200px){
        top:18%;
    }
`;
export const Title = styled(motion.h1)`
    color:${Colors.title};
    font-family:"MS Gothic";
    font-size:20px;
    position:relative;
    top:5%;
`;
export const Title2 = styled(Title)`
    color:${Colors.main};
    order:3;
`;
export const ImgLogo = styled(motion.img)`
    width: 35%;
    height: 35%;
`;