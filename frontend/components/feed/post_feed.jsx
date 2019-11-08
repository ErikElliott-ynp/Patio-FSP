import React from "react";
import PostFeedItem from "./post_feed_item";


class PostFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchPosts();
    }

    render () {
        const postsList = this.props.posts.map( (post, i) => {
            return <PostFeedItem post={post} key={i} user={this.props.users[post.authorId]}/>
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