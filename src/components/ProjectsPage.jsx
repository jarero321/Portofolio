import React, { Fragment } from "react";
import {
    SectionProjects, ContainerProjects,
    TitleProjects, Description, ContainerDescription,
    IMGContainer, Title
} from "../styles/ProjectsPageStyles"
import PokeGame from "../img/PokeGame.svg"
const ProjectsPage = () => {
    return (
        <Fragment>
            <SectionProjects>
                <ContainerProjects>
                    <TitleProjects>
                        Projects
                    </TitleProjects>
                    <Description>
                        <ContainerDescription>
                            <Title>
                                <span>0.1</span>
                                <h3>Memory Game</h3>
                            </Title>
                            <p>
                            Application made with react, consuming the pokemon api.
                            </p>
                        </ContainerDescription>
                        <IMGContainer>
                            <img src={PokeGame}></img>
                        </IMGContainer>
                    </Description>
                </ContainerProjects>
            </SectionProjects>
        </Fragment>
    )

}
export default ProjectsPage