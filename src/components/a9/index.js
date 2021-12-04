import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A9 = () => {
    return(
        <div>
            <Route path="/a9/practice" exact={true}>
                <Practice/>
            </Route>
            <Route path="/a9/twitter">
                <Build/>
            </Route>
        </div>
    )
}

export default A9;


// import Practice component and
// import Build component

// new component to hold new versions of Practice and Build


// route to navigate to Practice component


// route to navigate to Build component

