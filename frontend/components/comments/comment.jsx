import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleDropDown() {
        let ele = document.getElementById('comm-acts');
        let classArray = Array.from(ele.classList);
        if (classArray.includes('hidden')) {
            ele.classList.remove('hidden');
        } else {
            ele.classList.add('hidden');
        }
    }

    handleMouseLeave() {
        let ele = document.getElementById('comm-acts');
        ele.classList.add('hidden');
    }


    render () {
        if (!this.props.comment) return null;
        let owner = this.props.owner;
        let name;
        let pic;
        let id;
        let deleteComm;
        if (owner) {
            name = <Link to={`/users/${owner.id}`}><span>{owner.firstName} {owner.lastName}</span></Link>;
            pic = owner.profilePicture ? <img src={owner.profilePicture} className="comm-pic" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="comm-pic" />
            id = owner.id;
            if (id === this.props.currentUser.id) {
              deleteComm = <i className="fas fa-ellipsis-h" onClick={this.handleDropDown} onMouseLeave={this.handleMouseLeave}>
                    <div className="comment-actions hidden" id="comm-acts">
                        <p onClick={() => this.props.deleteComment(this.props.comment)} >Delete Comment</p>
                        <p id="edit-comm-btn">Edit Comment</p>
                    </div>
                </i>
            }
        }
        
        return (
            <div className="comment-wide">
                <div className="comm-user-pic">
                    <Link to={`/users/${id}`}>{pic}</Link>
                </div>
                <div className="comment-body">
                    {name}
                    <p>{this.props.comment.body}</p>
                    {deleteComm}
                </div>
            </div>
        )

    }
}

export default Comment;