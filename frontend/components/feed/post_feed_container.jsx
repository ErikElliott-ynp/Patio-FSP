import { connect } from 'react-redux';
import { fetchPosts, updatePost, deletePost } from "../../actions/post_actions";
import PostFeed from "./post_feed";

const mSTP = (state, ownProps) => {
    let id = ownProps.params.userId;
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }

    return {
        posts: Object.values(state.entities.posts),
        errors: state.errors.posts,
        users: state.entities.users,
        currentUserId: state.session.id,
        profile: profileId
    }
}

const mDTP = dispatch => {
    return {
        fetchPosts: (profileId) => dispatch(fetchPosts(profileId)),
        updatePost: post => dispatch(updatePost(post)),
        deletePost: postId => dispatch(deletePost(postId))
    }
}

export default connect(mSTP, mDTP)(PostFeed);