import React from "react";
import NavBarContainer from "./nav/nav_bar_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SignupContainer from "../components/signup/signup_container"

const App = () => {
    return (
        <div id="app">
            <NavBarContainer />
                <AuthRoute path="/login" component={SignupContainer} />       
                <AuthRoute path="/signup" component={SignupContainer} />       
            <Switch>
                
            </Switch>
            
        </div>
    )
}

export default App;