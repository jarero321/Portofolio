import styled from "styled-components";
import {Colors} from "../styles/Colors.js";
import {motion} from "framer-motion";
export const SectionContainer = styled.section`
    width:100%;
    height:90%;
`;
export const ImgLanding = styled(motion.img)`
width:100%;
height:60%;
`;
export const ContainerText = styled.div`
    width:100%;
    height:20%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const Text1 = styled(motion.p)`
    font-family:"TMC";
    font-size:20px;
    color:${Colors.letters};
    @media (min-width:768px){
        font-size:35px;
    }
`;
export const Text2 = styled(Text1)`

`;
export const Title1 = styled(motion.h2)`
    font-family:"TMC";
    font-size:40px;
    color:${Colors.title};
    @media (min-width:768px){
        font-size:60px;
    }
`;
export const Title2 = styled(Title1)`
    color:${Colors.main}
`;
export const ButtonContact = styled(motion.div)`
    width:70%;
    height:10%;
    border: 2px solid ${Colors.main};
    border-radius: 10px;
    position: relative;
    top:8%;
    left:15%;
    p{
        font-family:"TMC";
        font-size:30px;
        color:${Colors.title};
        text-align:center;
        position:relative;
        top:15%;
    }
    @media (min-width:768px){
        width:50%;
        left:25%;
        height:8%;
        p{
            font-size:35px;
            top:15%;
        }
    }
`;
export const MainText = styled.div`
    display:flex;
    width:70%;
    height:90%;
    align-items:center;
    justify-content:space-around;
    @media (min-width:768px){
        width:50%;
    }
`;