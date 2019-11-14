export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
import * as CommentAPIUtil from "../util/comment_api_util";

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

const receiveCommentErrors = errors => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
}

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then( comment => dispatch(receiveComment(comment)),
            errors => dispatch(receiveCommentErrors(errors)) 
        )
}

export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment) 
        .then( comment => dispatch(receiveComment(comment)),
            errors => dispatch(receiveCommentErrors(errors))
        )
}

export const deleteComment = commentId => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then( () => dispatch(removeComment(commentId)),
            errors => dispatch(receiveCommentErrors(errors))
        )
}
