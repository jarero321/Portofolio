import styled from "styled-components";
import { Colors } from "../styles/Colors.js";

export const SectionProjects = styled.section`
    width: 100vw;
    height: 100vh;
`;
export const ContainerProjects = styled.div`
    width:90%;
    height: 90%;
    position:relative;
    top:5%;
    left:5%;
    display:flex;
    flex-direction:column;
    align-items:center;

`;
export const TitleProjects = styled.h1`
    color:${Colors.title};
    font-size:50px;
    font-family:"TMC"
`;
export const Description = styled.div`
    width:100%;
    height:100%;
`;
export const ContainerDescription = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:30%;
    p{
        position:relative;
        bottom:;
        width:70%;
        font-size:20px;
        font-family:"TMC";
        color:${Colors.letters};
        line-height:1.5;
        text-align:center;
    }
`;
export const IMGContainer = styled.div`
    width:100%;
    height:80%;
    img{
        position:relative;
        top:10%;
        width:100%;
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
        font-size:35px;
        font-family:"TMC";
        color:${Colors.letters}
    }
`;