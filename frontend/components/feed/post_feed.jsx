import React from "react";
import PostFeedItem from "./post_feed_item";
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
        // .then(() => this.setState({ posts: this.props.posts }));
        
        
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
        let items = null;
        if (this.props.posts) {
            items = this.props.posts.reverse().map( post => {
                return <PostFeedItemContainer 
                            post={post}
                            key={post.id}
                            user={this.props.users[post.authorId]}
                        />
            })
        }
        let postsList = items ? items : null;

        // if (!this.props.posts) {
        //     return null
        // }
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