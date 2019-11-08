import { connect } from 'react-redux';
import { fetchPosts, updatePost, deletePost } from "../../actions/post_actions";
import PostFeed from "./post_feed";

const mSTP = state => {
    return {
        posts: Object.values(state.entities.posts),
        errors: state.errors.posts,
        users: state.entities.users,
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        updatePost: post => dispatch(updatePost(post)),
        deletePost: postId => dispatch(deletePost(postId))
    }
}

export default connect(mSTP, mDTP)(PostFeed);