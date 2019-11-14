import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment
    }

    render () {
        let owner = this.props.owner;
        let name;
        let pic;
        if (owner) {
            name = <Link to={`/users/${owner.id}`}><span>{owner.firstName} {owner.lastName}</span></Link>;
            pic = 
        }

        return (
            <div className="comment-wide">
                <div className="comm-user-pic">

                </div>
                <div className="comment-body">
                    {name}
                    <p>{this.props.comment.body}</p>
                </div>
            </div>
        )

    }
}

export default Comment;