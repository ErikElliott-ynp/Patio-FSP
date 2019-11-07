import React from "react";
import { connect } from "react-redux";

const mSTP = (state) => {
    return {
        user: state.entites.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        createPost: dslfksl
    }
}