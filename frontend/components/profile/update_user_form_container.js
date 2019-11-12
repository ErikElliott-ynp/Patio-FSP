import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/session_actions";
import UpdateUserForm from "./update_user_form";
import { withRouter } from "react-router";


const mSTP = ({ entities, session }) => {
    return {
        user: entities.users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mSTP, mDTP)(UpdateUserForm))