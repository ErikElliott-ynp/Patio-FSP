import { connect } from "react-redux";
import ProfileInfo from "./profile_info";
import { updateUser } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.users[state.session.id],
        profile: state.users[ownProps.match.params.userId]
    }
}

const mDTP = dispatch => {
    return {
        updateUser: (user) => dispatch(updateUser())
    }
}

export default connect(mSTP, mDTP)(ProfileInfo);