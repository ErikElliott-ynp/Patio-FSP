import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from "./post_form";

const mSTP = (state, ownProps) => {
    let profileId;
    if (ownProps.match) {
        profileId = ownProps.match.params.id
    } else {
        profileId = state.session.id
    }

    return {
        user: state.entities.users[state.session.id],
        errors: state.errors.posts,
        profile: profileId
    }
}

const mDTP = dispatch => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

export default connect(mSTP, mDTP)(PostForm)