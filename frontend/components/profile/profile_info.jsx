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

    componentDidMount() {
        fetch
    }

    handleEdit() {

    }

    

    render() {

        let aboutMeBtn = this.props.currentUser === this.props.profile ? 
            <div className="bio-basic">
                Add a short bio to tell people about yourself
                <div onClick={this.handlEdit} className="add-bio" >
                    Add Bio
                </div>
            </div> : null;


        let bio = this.props.currentUser.aboutMe ? 
            <div className="bio-div">
                <p className="bio-p">{this.props.currentUser.aboutMe}</p> 
            </div> : aboutMeBtn;
           
        
        return (
            <div className="prof-info-main">
                <div className="prof-info">
                    <div className="prof-info-header">
                        <i className="fas fa-globe-americas"></i>
                        <h3> Intro </h3>
                    </div>
                    <div className="about-me-bio" id="add-bio">
                        <h3>About Me:</h3>
                        {bio}
                    </div>

                </div>
                <div className="friends">

                </div>
            </div>
        )
    }
}

export default ProfileInfo;