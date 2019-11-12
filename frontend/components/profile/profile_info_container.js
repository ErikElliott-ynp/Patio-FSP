import { connect } from "react-redux";
import ProfileInfo from "./profile_info";
import { updateUser, fetchUser } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    let id = ownProps.params.userId;
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }
    return {
        currentUser: state.entities.users[state.session.id],
        profile: state.entities.users[profileId],
        profileId
    }
}

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: userId => dispatch(fetchUser(userId)) 
    }
}

export default connect(mSTP, mDTP)(ProfileInfo);   