import React from "react";
import anime from "animejs";
import LandingLuna from "../img/LandingLuna.svg"
import {
    SectionContainer, ImgLanding, ContainerText
    , Text1, Text2, Title1, Title2, ButtonContact,
    MainText
} from "../styles/DataContainerStyles.js"
const DataContainer = () => {

    return (
        <SectionContainer>
            <ImgLanding src={LandingLuna}
                initial={{ y: "-300px", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ duration: 2, delay: 0.3, type: "spring", bounce: 0.5 }} />
            <ContainerText>
                <Text1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    Hi my name is
                </Text1>
                <MainText>
                    <Title1
                    initial={{opacity:0 , x:"-150px"}}
                    animate={{opacity:1, x:"0"}}
                    transition={{duration:.5,type:"spring", delay:.9}}>
                        Carlos
                    </Title1>
                    <Title2
                     initial={{opacity:0 , x:"150px"}}
                     animate={{opacity:1, x:"0"}}
                     transition={{duration:.5,type:"spring", delay:1.2}}>
                        Jarero
                    </Title2>
                </MainText>
                <Text2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: 1.5 }}>
                    Front-end developer
                </Text2>
            </ContainerText>
            <ButtonContact
            initial={{opacity:0 , x:"-150px"}}
            animate={{opacity:1 , x:"0" }}
            transition={{ duration:1 , delay:1.8 , type:"spring"}}>
                <p>Contact me</p>
            </ButtonContact>
        </SectionContainer>
    )
}
export default DataContainer;