import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import a6Practice from "./components/a6/Practice";
import a6Build from "./components/a6/Build";
import a7Practice from "./components/a7/Practice";
import a7Build from "./components/a7/Build";
import { BrowserRouter, Route } from "react-router-dom";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import { combineReducers, createStore } from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({ tweets: tweets, who });
const store = createStore(reducer);



function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
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
                </div>
            </BrowserRouter>
        </Provider>
    );
}




export default App;
