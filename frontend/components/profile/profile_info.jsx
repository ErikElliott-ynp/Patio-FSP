import React from 'react';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            work: this.props.currentUser.work,
            education: this.props.currentUser.education,
            aboutMe: this.props.currentUser.aboutMe
        }
    }

    render() {
        return (
            <div className="prof-info-main">
                <h2>yo doggy</h2>
            </div>
        )
    }
}

export default ProfileInfo;