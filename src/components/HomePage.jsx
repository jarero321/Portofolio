import React, { useState, useEffect } from "react";
import DataContainer from "./DataContainer";
import Header from "./Header";
import MenuOptions from "./MenuOptions";
import { SectionHome, ContainerHome } from "../styles/HomePageStyles";

const HomePage = () => {
    // desactivar el scroll al abrir el menu
    const DisableScroll = () => {
        const scrollTop = window.pageYOffset;
        const scrollLeft = window.pageXOffset;
        window.onscroll = () => {
            window.scrollTo(scrollTop,scrollLeft)
        }
    }
    const enableScroll = () => {
        window.onscroll = () => {};
        } 
    // funcionalidad botton menu
    const [clickMenu, setclickMenu] = useState(false);
    const handleclick = (e) => {
        e.preventDefault();
        setclickMenu(!clickMenu);
        (clickMenu==false) ? DisableScroll() : enableScroll()
    }
    return (
        <SectionHome>
            <MenuOptions  clickMenu={clickMenu} />
            <ContainerHome >
                <Header clickMenu={clickMenu}
                    setclickMenu={setclickMenu}
                    handleclick={handleclick} />
                <DataContainer />
            </ContainerHome>
        </SectionHome>
    )
}
export default HomePage;