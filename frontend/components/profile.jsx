import React from "react"
import PostFeedContainer from "./feed/post_feed_container";
import PostFormContainer from "./posts/post_form_container";

const Profile = (props) => {
    return (
        <div className="profile-main">
            {/* <ProfileHeader /> */}
            <PostFormContainer />
            <PostFeedContainer />
            {/* <ProfileInfoBar /> */}
        </div>
    )
}

export default Profile;