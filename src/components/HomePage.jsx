import React, { useState } from "react";
import DataContainer from "./DataContainer";
import Header from "./Header";
import MenuOptions from "./MenuOptions";
import { SectionHome, ContainerHome } from "../styles/HomePageStyles";

const HomePage = () => {
    // funcionalidad botton menu
    const [clickMenu, setclickMenu] = useState(false);
    const handleclick = (e) => {
        e.preventDefault();
        setclickMenu(!clickMenu)
    }
    return (
        <SectionHome >
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