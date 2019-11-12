import React from "react"

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let coverPhoto = this.props.user.coverPhoto ? <img src={this.props.user.coverPhoto} className="cover-photo-img" /> : null;
        let profilePic = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="prof-photo-profile" /> : null;
        return (
            <div className="prof-header-main">
                {coverPhoto}
                {profilePic}
                <h3 className="prof-name">{this.props.user.firstName} {this.props.user.lastName}</h3>

            </div>
        )
    }
}

export default ProfileHeader;