import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import a6Practice from "./components/a6/Practice";
import a6Build from "./components/a6/Build";
import a7Practice from "./components/a7/Practice";
import a7Build from "./components/a7/Build";
import a8Practice from "./components/a8/Practice";
import a8Build from "./components/a8/Build";
import a9 from "./components/a9";
import { Link, BrowserRouter, Route} from "react-router-dom";




function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Link to="/a8/practice">A8</Link> |
                <Link to="/a9/practice">A9</Link>

                <Route path="/a6/hello" exact={true}>
                    <HelloWorld />
                </Route>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <a6Practice />
                </Route>
                <Route path="/a6/build" exact={true}>
                    <a6Build />
                </Route>
                <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                    <a7Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <a7Build/>
                </Route>
                <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                    <a8Practice/>
                </Route>
                <Route path="/a8/twitter">
                    <a8Build/>
                </Route>
                <Route path={["/", "/a9"]}>
                    <a9/>
                </Route>
            </div>
        </BrowserRouter>
    );
}




export default App;
