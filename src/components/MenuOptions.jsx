import React, {useRef, useEffect} from "react";
import {OptionsNav} from "../styles/MenuOptionsStyles";
import anime from "animejs"
const MenuOptions = ({clickMenu}) => {
    const Navref = useRef();
    useEffect(()  => {
        clickMenu ? 
        anime({
            targets: Navref.current,
            opacity: [0, 1],
            translateX: "-100%",
            duration: 500,
            easing: 'easeInBack',
            autoplay: true,
        }) :
        anime({
            targets: Navref.current,
            opacity: [1, 0],
            translateX: "0",
            duration: 500,
            easing: 'easeInBack',
            autoplay: true,
        })

    })
    return(
        <OptionsNav ref={Navref}>
            <p>
                Hola
            </p>
            <p>
                Bebe
            </p>
            <p>
                Carlos
            </p>
        </OptionsNav>
        )
}
export default MenuOptions;