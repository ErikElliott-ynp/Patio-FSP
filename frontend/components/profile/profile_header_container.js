import { connect } from "react-redux";
import { updateUser } from "../../actions/session_actions";
import ProfileHeader from "./profile_header";

const mSTP = (state, ownProps) => {
    let id = ownProps.params.userId;
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }
    return {
        user: state.entities.users[state.session.id],
        profileId: profileId
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mSTP, mDTP)(ProfileHeader);