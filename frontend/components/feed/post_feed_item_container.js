import { connect } from "react-redux";
import PostFeedItem from "./post_feed_item";
import { openModal, closeModal } from "../../actions/modal_actions";
import { deletePost } from "../../actions/post_actions";
import { fetchUser } from "../../actions/session_actions";


const mSTP = (state, ownProps) => {
    // if (!ownProps.post) return {};
    return {
        post: state.entities.posts[ownProps.post.id],
        user: state.entities.users[user.id],
        userID: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        closeModal: () => dispatch(closeModal()),
        deletePost: postId => dispatch(deletePost(postId))
    }
}

export default connect(mSTP, mDTP)(PostFeedItem);