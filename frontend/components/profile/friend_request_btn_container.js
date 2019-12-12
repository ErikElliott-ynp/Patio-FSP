import { connect } from "react-redux";
import { createFriendRequest, acceptFriendRequest, denyFriendRequest } from "../../actions/friend_request_actions";
import FriendRequestButton from "./friend_request_btn";

const mSTP = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    let user = state.entities.users[ownProps.params.userId];
    return {
        user, 
        currentUser,
        isFriend: user ? currentUser.friendIds.includes(user.id) : false,
        pending: user ? currentUser.pendingFriendIds.includes(user.id) : false,
        friendRequested: user ? currentUser.friendRequesterIds.includes(user.id) : false,
    }
}

const mDTP = dispatch => {
    return {
        createFriendRequest: friendRequest => dispatch(createFriendRequest(friendRequest)),
        acceptFriendRequest: friendRequest => dispatch(acceptFriendRequest(friendRequest)),
        denyFriendRequest: friendRequest => dispatch(denyFriendRequest(friendRequest))
    }
}

export default connect(mSTP, mDTP)(FriendRequestButton);