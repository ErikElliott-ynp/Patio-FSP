import { connect } from "react-redux";
import { fetchUsers } from "../actions/session_actions";
import Profile from "./profile";

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(Profile);