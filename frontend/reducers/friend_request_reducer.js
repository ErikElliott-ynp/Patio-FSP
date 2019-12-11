import { RECEIVE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions"

const FriendRequestsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIEND_REQUEST:
            
            break;
    
        default:
            return state
    }
}

export default FriendRequestsReducer