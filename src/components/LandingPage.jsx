import React, { Fragment , Suspense } from "react";
import LoadingPage from "./LoadingPage.jsx"
// lazy loading con promise para mostrar el loader
const PageContain = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve,3000));
    return import("./PageContain")
})
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