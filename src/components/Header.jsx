import React from "react";
import { NavigationBar, Logo, MenuHamborguer, MenuOptions } from "../styles/HeaderStyles"
const Header = ({clickMenu,handleclick}) => {
    return (
            <NavigationBar
            initial={{opacity:0,x:"250"}}
            animate={{opacity:1,x:"0"}}
            transition={{duration:1,delay:3}}>
                <Logo>
                    CJ
                </Logo>
                <MenuHamborguer onClick={handleclick} clickMenu={clickMenu}/>
            </NavigationBar>
    )
}
export default Header;