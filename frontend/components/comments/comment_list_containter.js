import { connect } from "react-redux"; 
import { selectCommentsForPost } from "../../reducers/selectors";
import { updateComment, deleteComment } from "../../actions/comment_actions";
import CommentList from "./comment_list"

const mSTP = (state, ownProps) => {
    return {
        comments: selectCommentsForPost(state, ownProps.post),
        currentUser: state.entities.users[state.session.id]
    }
} 

const mDTP = dispatch => {
    return {
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentList)