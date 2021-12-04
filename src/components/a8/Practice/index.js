
import React from "react";
import { Link } from "react-router-dom";

import APIExamples from "./APIExamples";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
        </div>
    )
};
export default Practice;
