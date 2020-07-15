import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Nav from "./Nav"
import Login from "./Login";
import Register from "./Register";
import Todos from "./Todos";


class App extends React.Component {
    render() {
        return <Provider store={store}>
            <Router>
                <Nav/>
                <div className="container">
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/">
                            <Todos/>
                        </Route>
                    </Switch>
                </div>
            </Router>

        </Provider>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));