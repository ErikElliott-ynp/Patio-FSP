import { connect } from "react-redux";
import ProfileInfo from "./profile_info";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.users[state.session.id],
        profile: state.users[ownProps.match.params.userId]
    }
}

export default connect(mSTP)(ProfileInfo);