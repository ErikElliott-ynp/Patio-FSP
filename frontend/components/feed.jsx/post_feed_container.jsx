import { connect } from 'react-react';
import { fetchPosts, updatePost, deletePost } from "../../actions/post_actions"

const mSTP = state => {
    return {
        posts: Object.values(state.entities.posts),
        errors: state.errors.posts,
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