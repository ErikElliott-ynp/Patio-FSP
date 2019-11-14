import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions"

const CommentsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_COMMENT:
            return nextState[action.comment.id] = action.comment;
        case REMOVE_COMMENT:
            delete nextState[action.comment.id];
            return nextState;
        case RECEIVE_POST:
            action.post.comments.forEach(comment => {
                nextState[comment]
            });
    
        default:
            return state;
    }
}