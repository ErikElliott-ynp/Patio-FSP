import React from "react";
import PostFeedItem from "./post_feed_item";


class PostFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts
        }
    }

    componentDidMount () {
       
        this.props.fetchPosts(this.props.profileId);
        
    }

    shouldComponentUpdate(nextProps, _nextState) {
        if (this.props.posts.length !== nextProps.posts.length || this.props.profileId !== nextProps.profileId) {
            return true;
        }  else {
            return false;
        }
    }

    componentDidUpdate () {
        this.props.fetchPosts(this.props.profileId);
    }
    

    render () {
        let items = null;
        if (this.props.posts) {
            items = this.props.posts.reverse().map( (post, i) => {
                return <PostFeedItem 
                            post={post}
                            key={i}
                            user={this.props.users[post.authorId]}
                            userId={this.props.currentUserId}
                            deletePost={this.props.deletePost}
                            updatePost={this.props.updatePost}
                        />
            })
        }
        let postsList = items ? items : null;
        return (
            <div className="posts-feed">
                <ul className="posts-list">
                    {postsList}
                </ul>
            </div>
        ) 
    }
}

export default PostFeed;