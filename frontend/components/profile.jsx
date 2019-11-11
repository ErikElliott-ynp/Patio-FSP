import React from "react"
import PostFeedContainer from "./feed/post_feed_container";
import PostFormContainer from "./posts/post_form_container";
import ProfileInfoContainer from "./profile/profile_info_container"
const Profile = (props) => {
    return (
        <div className="profile-main">
            {/* <ProfileHeader props={props}/> */}
            <PostFormContainer />
            <PostFeedContainer />
            <ProfileInfoContainer props={props} />
        </div>
    )
}

export default Profile;