import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-dom";
import { withRouter } from "react-router";

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/feed" />
        }   
    />
};

const mSTP = state => {
    return {
        loggedIn: !!(state.session.id)
    }
}

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));