import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions"

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign({}, action.payload.posts);
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}

export default PostsReducer;
