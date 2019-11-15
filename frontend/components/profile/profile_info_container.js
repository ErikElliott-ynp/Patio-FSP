import { connect } from "react-redux";
import ProfileInfo from "./profile_info";
import { updateUser, fetchUser } from "../../actions/session_actions";
import { fakeFriends } from "../../reducers/selectors";

const mSTP = (state, ownProps) => {
    let id = ownProps.params.userId;
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }
    return {
        currentUser: state.entities.users[state.session.id],
        profile: state.entities.users[profileId],
        profileId,
        users: fakeFriends(state)
    }
}

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: userId => dispatch(fetchUser(userId)) 
    }
}

export default connect(mSTP, mDTP)(ProfileInfo);   