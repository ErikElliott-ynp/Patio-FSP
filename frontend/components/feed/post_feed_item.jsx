import React from "react";

class PostFeedItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.post
    }

    render() {

        return (
            <div>
                <li>
                    <div className="post-item-img">
                        <img src="#" alt="#"/>
                    </div>

                    { this.props.post.authorId === this.props.user.id ? (
                        <div className="post-delete-button">
                            <button onClick={() => this.props.deletePost(this.props.post.id)}></button>
                        </div>
                        
                        ) : ( <br/>)
                    }
                    <div className="full-name">
                        <span>{this.props.user.firstName}  {this.props.user.lastName}</span>
                    </div> 
                    <p>{this.props.post.body}</p>
                    <div className="post-item-footer">
                        <div className="post-item-like">
                            <span>Like</span>
                        </div>
                        <div className="post-item-comment">
                            <span>Comment</span>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}


export default PostFeedItem;