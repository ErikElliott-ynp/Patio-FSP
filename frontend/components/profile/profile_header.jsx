import React from "react"

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null,
            photoUrl: null
        }
    }

    handleFile(e) {
        let file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
        this.setState({ photoFile: e.currentTarget.files[0] })
        let photoInput = document.getElementById("prof-upload-input");
        photoInput.value = ""
    }


    render() {
        let coverPhoto = this.props.user.coverPhoto ? <img src={this.props.user.coverPhoto} className="cover-photo-img" /> : null;
        let profilePic = this.props.user.profilePicture ? <img src={this.props.user.profilePicture} className="prof-photo-profile" /> : null;
        return (
            <div className="prof-header-main">
                {coverPhoto}
                {profilePic}
                <h3 className="prof-name">{this.props.user.firstName} {this.props.user.lastName}</h3>
                <button className="edit-prof-btn">Update Profile</button>
                <div className="prof-photo-update" id="update-prof-pic">
                    <label className="prof-up-label">
                        <i class="fas fa-camera"> Update</i>
                        <input type="file" className="prof-upload-input"/>
                    </label>
                </div>
            </div>
        )
    }
}

export default ProfileHeader;