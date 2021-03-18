import styled from "styled-components";
import { Colors } from "../styles/Colors.js";
import {motion} from "framer-motion";

export const SectionProjects = styled.section`
    width: 100vw;
    height: 100vh;
`;
export const ContainerProjects = styled(motion.div)`
    width:90%;
    height: 95%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;

`;
export const TitleProjects = styled(motion.h1)`
    color:${Colors.title};
    font-size:50px;
    font-family:"TMC"
`;
export const Description = styled.div`
    width:100%;
    height:100%;
`;
export const ContainerDescription = styled(motion.article)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:30%;
    p{
        position:relative;
        width:70%;
        font-size:25px;
        margin-top:5%;
        font-family:"TMC";
        color:${Colors.letters};
        line-height:1.5;
        text-align:justify;
    }
`;
export const IMGContainer = styled(motion.div)`
    width:80%;
    height:80%;
    img{
        position:relative;
        top:20%;
        width:100%;
        left:10%;
        border-radius:10%;
        border: 1px solid ${Colors.main}
    }
`;
export const Title = styled.div`
    width:95%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    &:before{
        content:"";
        width:15%;
        height:15%;
        background-color:${Colors.main};
        position: relative;
        top:0;
        right:3%;
        display:inline-block;
    }
    span{
        font-family:"TMC";
        color:${Colors.main};
        font-size:35px;
    }
    h3{
        font-size:30px;
        font-family:"TMC";
        color:${Colors.letters}
    }
`;