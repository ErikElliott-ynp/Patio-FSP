import { connect } from "react-redux";
import { updateUser, fetchUser } from "../../actions/session_actions";
import ProfileHeader from "./profile_header";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    let id = parseInt(ownProps.params.userId);
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }
    return {
        user: state.entities.users[profileId],
        profileId: profileId,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        openModal: modal => dispatch(openModal(modal)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(ProfileHeader);