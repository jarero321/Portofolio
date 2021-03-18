import React, { Fragment, useRef, useState, useEffect } from "react";
import {
    SectionProjects, ContainerProjects,
    TitleProjects, Description, ContainerDescription,
    IMGContainer, Title
} from "../styles/ProjectsPageStyles"
import PokeGame from "../img/PokeGame.svg"
const ProjectsPage = () => {

    // Detectar si intersectan los objetos y animarlos
    const outerRef = useRef(null);
    const [inViewport, setInViewport] = useState(true);
    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === outerRef.current) {
                    if (entry.isIntersecting) {
                        setInViewport(true);
                    } else {
                        setInViewport(false);
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: .1 });
        observer.observe(outerRef.current);
    }, [outerRef]);

    // Framer motion animations
    const fadeInContainerWithStagger = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn",
                when: "beforeChildren",
                staggerChildren: 0.8
            }
        }
    };
    const fadeInDown = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
            }
        }
    };
    const fadeinLeft = {
        hidden: {
            opacity: 0,
            x: 40
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
            }
        }
    };

    return (
        <Fragment>
                <SectionProjects ref={outerRef}>
                {inViewport &&
                    <ContainerProjects
                    variants={fadeInContainerWithStagger}
                    initial="hidden"
                    animate="visible" >
                         <TitleProjects
                          variants={fadeInDown}>
                            Projects
                         </TitleProjects>
                            <Description>
                                <ContainerDescription
                                variants={fadeinLeft} >
                                    <Title>
                                        <span>0.1</span>
                                        <h3>Memory Game</h3>
                                    </Title>
                                    <p>
                                        Application made with react, consuming the pokemon api.
                            </p>
                                </ContainerDescription>
                                <IMGContainer
                                variants={fadeInDown} >
                                    <img src={PokeGame}></img>
                                </IMGContainer>
                            </Description>
                </ContainerProjects>
            } 
                </SectionProjects>
        </Fragment>
    )

}
export default ProjectsPage