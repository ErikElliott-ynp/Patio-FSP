import React from "react"

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="prof-header-main">
                <img src={this.props.user.coverPhoto} className="cover-photo-img"/>
                
                
            </div>
        )
    }
}

export default ProfileHeader;