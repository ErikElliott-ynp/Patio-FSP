import React from "react";
import { closeModal} from '../../actions/modal_actions';
import { connect } from "react-redux";
import UpdateUserFormContainer from "../profile/update_user_form_container";
import UpdatePostFormContainer from "../posts/update_post_form_container";

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render () {
        if (!this.props.modal) {
            return null;
        }
        let component;
         switch (this.props.modal) {
            case 'updateProfile':
                component = <UpdateUserFormContainer />
                break;
            case 'updatePost':
                component = <UpdatePostFormContainer id={this.props.postId}/>
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
