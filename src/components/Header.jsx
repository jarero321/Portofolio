import React,{useRef, useEffect} from "react";
import MenuClosed from "../img/MenuClosed.svg"
import MenuOpen from "../img/MenuOpen.svg";
import anime from "animejs"
import { NavigationBar, Logo, MenuHamborguer, MenuOptions } from "../styles/HeaderStyles"
const Header = ({clickMenu,handleclick}) => {
    // referencia para aplicar estilos
    const Clickref = useRef();
    // detectar si se dio click en el menu hamborguer
    const effectClick = anime({
        targets: Clickref.current,
        opacity: [0, 1],
        duration: 300,
        easing: "easeInCubic",
        autoplay: true,
    })
    useEffect(() => {
        Clickref.current.onclick = effectClick.play;
    }, [clickMenu])
    return (
            <NavigationBar  >
                <Logo>
                    CJ
                </Logo>
                <MenuHamborguer onClick={handleclick}
                    src={!clickMenu ? MenuClosed : MenuOpen}
                    ref={Clickref}>
                </MenuHamborguer>
            </NavigationBar>
    )
}
export default Header;