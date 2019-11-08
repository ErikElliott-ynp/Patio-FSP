import React from "react";
import PostFormContainer from "./posts/post_form_container"


const NewsFeed = (props) => {
    return (
        <div className="news-feed-main">
            <div className="left-side-info">
                {/* <SideBox /> */}
            </div>
            <div className="post-form-primary">
                <PostFormContainer />
            </div>
            <div className="feed-primary">
                {/* <FeedContainer /> */}
            </div>
        </div>
    )
}

export default NewsFeed;