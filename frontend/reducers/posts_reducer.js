import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions"
import { RECEIVE_COMMENT, REMOVE_COMMENT} from "../actions/comment_actions";

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    let post;
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, nextState, action.posts);
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        case RECEIVE_COMMENT:
            post = nextState[action.comment.postId];
            post.commentIds.push(action.comment.id);
            return nextState;
        case REMOVE_COMMENT:
            post = nextState[action.comment.postId];
            let commsArray = post.commentIds
            for (let i = 0; i < commsArray.length; i++) {
                if (commsArray[i] === action.comment.id) {
                    commsArray.splice(i, 1)
                }
            }
            return nextState;
        default:
            return state;
    }
}

export default PostsReducer;
