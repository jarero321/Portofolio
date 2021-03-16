import React, {useEffect, useState} from "react";
import LoadingPage from "./LoadingPage.jsx"
import PageContain from "./PageContain.jsx";
const LandingPage = () => {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        (loading) &&
        setTimeout(() => {
            setloading(!loading)
        } , 2800 )
    },[])

    return ( 
        (loading) ? (<LoadingPage></LoadingPage> ) :
        (<PageContain/>)
        )
}
export default LandingPage;