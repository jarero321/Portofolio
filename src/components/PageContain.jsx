import React, {Fragment, useEffect, useState} from "react";
import HomePage from "./HomePage.jsx"
import ProjectsPage from "./ProjectsPage.jsx";
const PageContain = () => {
    const [ProjectsScroll, setProjectsScroll] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setProjectsScroll(window.pageYOffset)}
    })
    return(
        <Fragment>
            <HomePage/>
            <ProjectsPage/>
        </Fragment>
    )
}
export default PageContain;