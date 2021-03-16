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
            <ImgLanding src={LandingLuna} />
            <ContainerText>
                <Text1>
                    Hi my name is
                </Text1>
                <MainText>
                    <Title1>
                        Carlos
                    </Title1>
                    <Title2>
                        Jarero
                    </Title2>
                </MainText>
                <Text2>
                    Front-end developer
                </Text2>
            </ContainerText>
            <ButtonContact>
                    <p>Contact me</p>
                </ButtonContact>
        </SectionContainer>
    )
}
export default DataContainer;