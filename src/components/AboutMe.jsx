import React, {useRef,useState,useEffect} from "react";
import {SectionAbout,ContainerAbout,
        TitleAbout, IMGAbout,
        TextAbout} from "../styles/AboutMeStyles.js"
import ImgAbout from "../img/Carlitos.svg";
        const AboutMe = () => {
         // Detectar si intersectan los objetos y animarlos
    const AboutRef = useRef(null);
    const [inViewport, setInViewport] = useState(true);
    useEffect(() => {
        const onChange = entries => {
            entries.forEach(entry => {
                if (entry.target === AboutRef.current) {
                    if (entry.isIntersecting) {
                        setInViewport(true);
                    } else {
                        setInViewport(false);
                    }
                }
            });
        };
        const observer = new IntersectionObserver(onChange, { threshold: .1 });
        observer.observe(AboutRef.current);
    }, [AboutRef]);

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
        <SectionAbout ref={AboutRef}>
            {inViewport &&
            <ContainerAbout
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible">
                <TitleAbout
                variants={fadeInDown}>
                    About Me
                </TitleAbout>
                <IMGAbout
                variants={fadeInDown}>
                 <img src={ImgAbout} />
                </IMGAbout>
                <TextAbout
                variants={fadeInDown}>
                    <span
                    >
                        Hello!
                    </span>
                    <p>
                        My name is Carlos, I´m Mexican
                        Web Developer. Looking to have
                        work experience and make the world
                        more colorful.
                    </p>
                </TextAbout>
            </ContainerAbout>
        }
        </SectionAbout>)
}
export default AboutMe;