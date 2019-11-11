import React from "react";
import { Link } from "react-router-dom"

class PostFeedItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.post
    }

    render() {

        const photo = this.props.post.photoUrl ? <img className="post-photo" src={this.props.post.photoUrl} alt="" /> : null

        return (
            <div className="post-item-wide">
                <li className="list-item-post"> 
                    <div className="post-item-img">
                        <img src="#" alt=""/>
                        <Link to={`/users/${this.props.user.id}`}>
                            <div className="full-name">
                                <img src={this.props.user.profilePicture} />
                                <span>{this.props.user.firstName}  {this.props.user.lastName}</span>
                            </div> 
                        </Link>
                    </div>

                    { this.props.post.authorId === this.props.user.id ? (
                        <div className="post-delete-button clearfix">
                            <button onClick={() => this.props.deletePost(this.props.post.id)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                        
                        ) : ( <br/>)
                    }
                   
                   {photo}
                      
                
                    <p>{this.props.post.body}</p>
                    <div className="post-item-footer">
                        <div className="post-item-like">
                            <i className="fas fa-thumbs-up"><span>Like</span></i>
                        </div>
                        <div className="post-item-comment">
                            <i className="fas fa-comment-alt"> <span>Comment</span></i>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}


export default PostFeedItem;