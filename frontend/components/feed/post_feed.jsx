import React from "react";
import PostFeedItemContainer from "./post_feed_item_container";


class PostFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts
        }
    }

    componentDidMount () {
       
        this.props.fetchPosts(this.props.profileId)
        
        
    }

    shouldComponentUpdate(nextProps, _nextState) {
        if (this.props.posts.length !== nextProps.posts.length 
            || this.props.profileId !== nextProps.profileId) {
            return true;
        }  else {
            return false;
        }
    }

    componentDidUpdate () {
        this.props.fetchPosts(this.props.profileId);
        this.setState({
            posts: this.props.posts
        })
    }


    render () {
        let items;
        if (this.props.posts) {
            items = this.props.posts.reverse().map( post => {
                return <PostFeedItemContainer 
                            post={post}
                            key={post.id}
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