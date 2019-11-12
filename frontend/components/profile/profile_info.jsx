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
    

    render() {
        let aboutMeBtn = this.props.currentUser === this.props.profile ? 
            <div className="bio-basic" id="bio-basic">
                Add a short bio to tell people about yourself
            </div> : null;

        let home = this.props.currentUser.location ? <div className="location"><i className="fas fa-home"></i> <p>Lives in {this.props.currentUser.location}</p></div> : null;
        let work = this.props.currentUser.work ? <div className="work"><i className="fas fa-briefcase"></i> <p> Works at {this.props.currentUser.work}</p></div> : null;
        let education = this.props.currentUser.education ? <div className="education"><i className="fas fa-graduation-cap"></i> <p>Went to school at {this.props.currentUser.education}</p></div> : null;   


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
                    <div className="loc-work-ed">
                        {home}
                        {work}
                        {education}
                    </div>

                </div>
                <div className="friends">
                    <h3>Friends:</h3>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;