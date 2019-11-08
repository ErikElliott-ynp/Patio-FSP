import React from "react";
import PostFeedItem from "./post_feed_item";


class PostFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.posts;
    }

    componentDidMount () {
        this.props.fetchPosts();
    }

    shouldComponentUpdate(nextProps, prevProps) {
        
    }

    render () {
        const postsList = this.props.posts.map( (post, i) => {
            return <PostFeedItem 
                        post={post}
                        key={i}
                        user={this.props.users[post.authorId]}
                        userId={this.props.currentUserId}
                        deletePost={this.props.deletePost}
                        updatePost={this.props.updatePost}
                    />
        })
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