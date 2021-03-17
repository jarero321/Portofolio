import React, {Fragment} from "react";
import HomePage from "./HomePage.jsx"
import ProjectsPage from "./ProjectsPage.jsx";
const PageContain = () => {

    return(
        <Fragment>
            <HomePage/>
            <ProjectsPage/>
        </Fragment>
    )
}
export default PageContain;