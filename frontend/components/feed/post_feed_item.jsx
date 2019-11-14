import React from "react";
import { Link } from "react-router-dom";
import CommentFormContainer from "../comments/comment_form_container";
    
class PostFeedItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.post
    }

    render() {

        const photo = this.props.post.photoUrl ? <img className="post-photo" src={this.props.post.photoUrl} alt="" /> : null
        let profilePic;
        let firstName;
        let lastName;
        let id;
        if (this.props.user) {
            profilePic = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="post-item-pic" />
                : <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" className="post-item-pic" />
            firstName = this.props.user.firstName;
            lastName = this.props.user.lastName;
            id = this.props.user.id;
        };

        
        return (
            <div className="post-item-wide">
                <li className="list-item-post"> 
                    <div className="post-item-img">
                        <Link to={`/users/${id}`}>
                            <div className="full-name">
                                {profilePic}
                                <span className="item-username">{firstName}  {lastName}</span>
                            </div> 
                        </Link>
                    </div>

                    { this.props.user === this.props.currentUser ? (
                        <div className="post-delete-button clearfix">
                            <button onClick={() => this.props.deletePost(this.props.post.id)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <i className="fas fa-edit" onClick={() => this.props.openModal("updatePost", this.props.post.id)}></i>
                        </div>
                        
                        ) : ( <script></script>)
                    }
                    <p className="post-body">{this.props.post.body}</p>
                   {photo}
                
                    <p className="line"></p>
                    <div className="post-item-footer">
                        <div className="post-item-like">
                            <i className="fas fa-thumbs-up"><strong>Like</strong></i>
                        </div>
                        <div className="post-item-comment">
                            <i className="fas fa-comment-alt"> <strong>Comment</strong></i>
                        </div>
                    </div>
                    {/* <CommentFormContainer postId={this.props.post.id}/> */}
                </li>
            </div>
        )
    }
}


export default PostFeedItem;