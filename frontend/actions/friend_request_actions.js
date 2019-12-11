export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const ACCEPT_FRIEND_REQUEST = "ACCEPT_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
import * as FriendRequestUtil from "../util/friend_request_api_util";

const receieveFriendRequest = friendRequest => {
    return {
        type: RECEIVE_FRIEND_REQUEST,
        friendRequest
    }
}

const receiveAcceptedFriendRequest = friendRequest => {
    return {
        type: ACCEPT_FRIEND_REQUEST,
        friendRequest
    }
}

const removeFriendRequest = friendRequest => {
    return {
        type: REMOVE_FRIEND_REQUEST,
        friendRequest
    }
}

export const createFriendRequest = friendRequest => dispatch => {
    return FriendRequestUtil.createFriendRequest(friendRequest)
        .then( (friendRequest) => dispatch(receieveFriendRequest(friendRequest)))
}

export const acceptFriendRequest = friendRequest => dispatch => {
    return FriendRequestUtil.acceptFriendRequest(friendRequest.id)
        .then( () => dispatch(receiveAcceptedFriendRequest(friendRequest)))
}

export const denyFriendRequest = friendRequest => dispatch => {
    return FriendRequestUtil.denyFriendRequest(friendRequest.id)
        .then( () => dispatch(removeFriendRequest(friendRequest)))
}