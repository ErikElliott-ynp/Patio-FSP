import { updateComment, deleteComment } from "../../actions/comment_actions";
import { connect } from "react-redux";
import Comment from "./comment";
import { editComment, closeEdit } from "../../actions/edit_comment_actions";
import { close } from "inspector";

const mSTP = (state, ownProps) => {
    if (!ownProps.comment) return null;
    return {
        comment: ownProps.comment,
        currentUser: state.entities.users[state.session.id],
        owner: state.entities.users[ownProps.comment.authorId],
        post: state.entities.posts[ownProps.comment.postId]
    }
}

const mDTP = dispatch => {
    return {
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
        editComment: () => dispatch(editComment()),
        closeEdit: () => dispatch(closeEdit())
    }
}

export default connect(mSTP, mDTP)(Comment)