import React from "react"
import PostFeedContainer from "./feed/post_feed_container";
import PostFormContainer from "./posts/post_form_container";
import ProfileInfoContainer from "./profile/profile_info_container"

const Profile = (props) => {
    return (
        <div className="profile-main">
            {/* <ProfileHeader props={props}/> */}
            {/* <ProfileInfoContainer props={props.match.params} /> */}
            <div className="scroll-feed">
                <PostFormContainer params={props.match.params}/>
                <PostFeedContainer params={props.match.params}/>
            </div>
        </div>
    )
}

export default Profile;