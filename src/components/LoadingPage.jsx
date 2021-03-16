import React from "react"
import {SectionLoading, ContainerLogo , ProgressBar,
        Title,Title2, ImgLogo} from "../styles/LoadingPageStyles";
import LogoLuna from "../img/MoonLoading.svg";

const LoadingPage = () => {

    return(
        <SectionLoading>
            <ContainerLogo>
                <Title
                initial = {{opacity:0}}
                animate = {{opacity:1}}
                transition={{duration:1.5,delay:1}}>Carlos</Title>
                <Title2
                initial = {{opacity:0}}
                animate = {{opacity:1}}
                transition={{duration:1.5, delay:1}} >Jarero</Title2>
                <ImgLogo src={LogoLuna} alt="Logo luna"
                initial={{y:"-500px", opacity:0}}
                animate={{y:"0", opacity:1}}
                transition={{ duration:2, delay:.5, type:"spring" , bounce:0.25}} />
            </ContainerLogo>
            <ProgressBar
            initial = {{width:"0",opacity:[0]}}
            animate = {{width:"100%",opacity:[0.5,1,.5,0]}}
            transition = {{duration:2.5}}
            />
        </SectionLoading>
        )
}
export default LoadingPage;