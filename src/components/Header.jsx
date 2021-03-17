import React,{useRef, useEffect} from "react";
import MenuClosed from "../img/MenuClosed.svg"
import MenuOpen from "../img/MenuOpen.svg";
import anime from "animejs"
import { NavigationBar, Logo, MenuHamborguer, MenuOptions } from "../styles/HeaderStyles"
const Header = ({clickMenu,handleclick}) => {
    return (
            <NavigationBar 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5 , delay:1.5}}>
                <Logo>
                    CJ
                </Logo>
                <MenuHamborguer onClick={handleclick}
                    src={!clickMenu ? MenuClosed : MenuOpen}
                    >
                </MenuHamborguer>
            </NavigationBar>
    )
}
export default Header;