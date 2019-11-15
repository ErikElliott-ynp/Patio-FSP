import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleDropDown() {
        let ele = document.getElementById(`comm-acts-${this.props.comment.id}`);
        let classArray = Array.from(ele.classList);
        let ellipse = document.getElementById('...');
        if (classArray.includes('hidden')) {
            ele.classList.remove('hidden');
            ellipse.style.opacity = "1.0";
        } else {
            ele.classList.add('hidden');
            ellipse.style.opacity = "0";
        }
    }

    handleChange () {
        return (e) => this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const comment = this.state
        this.props.updateComment(comment).then( () => this.props.closeEdit());
    }

    handleEnter(e) {
        if (e.charCode == 13) {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }


    render () {
        if (!this.props.comment) return null;
        let owner = this.props.owner;
        let name;
        let pic;
        let id;
        let deleteComm;
        let text;
        if (owner) {
            name = <Link to={`/users/${owner.id}`}><span>{owner.firstName} {owner.lastName}</span></Link>;
            pic = owner.profilePicture ? <img src={owner.profilePicture} className="comm-pic" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="comm-pic" />
            id = owner.id;
            if (id === this.props.currentUser.id) {
              deleteComm = <i className="fas fa-ellipsis-h" id="..." onClick={this.handleDropDown} >
                    <div className="comment-actions hidden" id={`comm-acts-${this.props.comment.id}`}>
                        <p onClick={() => this.props.deleteComment(this.props.comment)} >Delete Comment</p>
                        <p id="edit-comm-btn" onClick={() => this.props.editComment(this.props.comment.id)}>Edit Comment</p>
                    </div>
                </i>
            };
            
        }
        let div = <div className="comment-body">
                {name}
                    <p>{this.props.comment.body}</p>
                {deleteComm}
            </div>;
        let form = <div className="comment-body">
                <form className="edit-form-comm"  onKeyPress={this.handleEnter} >
                    <textarea className="edit-textarea" onChange={this.handleChange()} id="edit-text" value={this.state.body}></textarea>
                </form>
                <p id="cancel" onClick={() => this.props.closeEdit()}>cancel</p>
            </div>

        text = this.props.editId === this.props.comment.id ? form : div;
        return (
            <div className="comment-wide">
                <div className="comm-user-pic">
                    <Link to={`/users/${id}`}>{pic}</Link>
                </div>
                {text}
            </div>
        )

    }
}

export default Comment;