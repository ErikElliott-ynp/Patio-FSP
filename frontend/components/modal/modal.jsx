import React from "react";
import { closeModal} from '../../actions/modal_actions';
import { connect } from "react-redux";
import UpdateUserFormContainer from "../profile/update_user_form_container";


function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
     switch (modal) {
        case 'updateProfile':
            component = <UpdateUserFormContainer />
            break;
        default:
            return null; 
     }
     return (
        <div className="modal-bkgnd" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
     )
}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
