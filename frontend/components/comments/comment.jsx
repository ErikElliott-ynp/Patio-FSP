import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment
    }

    // openDropdown

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
            if (owner.id === this.props.currentUser) {
              deleteComm = <i className="fas fa-ellipsis-h">
                    <div className="comment-actions">
                        <p>Delete comment</p>
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