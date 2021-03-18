import React, {Fragment} from "react";
import HomePage from "./HomePage.jsx"
import ProjectsPage from "./ProjectsPage.jsx";
import AboutMe from "./AboutMe.jsx"
const PageContain = () => {
    return(
        <Fragment>
            <HomePage/>
            <ProjectsPage/>
            <AboutMe/>
        </Fragment>
    )
}
export default PageContain;