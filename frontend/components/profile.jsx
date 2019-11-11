import React from "react"
import PostFeedContainer from "./feed/post_feed_container"

const Profile = (props) => {
    return (
        <div className="profile-main">
            {/* <ProfileHeader /> */}
            <PostFeedContainer />
            {/* <ProfileInfoBar /> */}
        </div>
    )
}

export default Profile;