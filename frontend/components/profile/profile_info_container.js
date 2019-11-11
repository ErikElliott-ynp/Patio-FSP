import { connect } from "react-redux";
import ProfileInfo from "./profile_info";
import { updateUser, fetchUser } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profile: state.entities.users[ownProps.params.userId],

    }
}

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: userId => dispatch(fetchUser(userId)) 
    }
}

export default connect(mSTP, mDTP)(ProfileInfo);   