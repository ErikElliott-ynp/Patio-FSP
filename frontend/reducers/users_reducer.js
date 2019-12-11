import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from  "../actions/session_actions";
import { RECEIVE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions"

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    if (action.friendRequest) {
        let req = action.friendRequest;
        let currentUser = nextState[req.userId];
        let friendUser = nextState[req.friendId]
    }
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user } );
        case RECEIVE_USERS: 
            return Object.assign({}, state, action.payload.users )
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_FRIEND_REQUEST:
            currentUser.pendingFriendIds << req.friendId;
            friendUser.friendRequesterIds << req.userId;
            return nextState;
        case ACCEPT_FRIEND_REQUEST:
            currentUser.friends << req.friendId;
            friendUser.friends << req.userId;
            currentUser.pendingFriendIds = removeId(currentUser.pendingFriendIds, req.friendId);
            friendUser.friendRequesterIds = removeId(friendUser.friendRequesterIds, req.userId);
            return nextState;
        case REMOVE_FRIEND_REQUEST:
            currentUser.pendingFriendIds = removeId(currentUser.pendingFriendIds, req.friendId);
            friendUser.friendRequesterIds = removeId(friendUser.friendRequesterIds, req.userId);
        default:
            return state;
    }
}

const removeId = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === id) array.splice(i, 1);
    }
    return array;
}

export default UsersReducer;