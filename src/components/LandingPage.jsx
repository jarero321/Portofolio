import React, { Fragment , Suspense } from "react";
import LoadingPage from "./LoadingPage.jsx"
const PageContain = React.lazy(() => import("./PageContain.jsx")
)
const LandingPage = () => {
    return (
        <Fragment>
           <Suspense fallback={<LoadingPage/>}>
               <PageContain/>
           </Suspense>
        </Fragment>
        )
}
export default LandingPage;