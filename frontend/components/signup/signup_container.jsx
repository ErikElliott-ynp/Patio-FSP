import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupFrom from "./signup_form";


const mDTP = dispatch => {
    debugger
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(null, mDTP)(SignupFrom);