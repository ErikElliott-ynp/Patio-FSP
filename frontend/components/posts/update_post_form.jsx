import React from "react";

class UpdatePostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.post.body,
            photoFile: null,
            photoUrl: this.props.post.photoUrl
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEnter = this.cancelEnter.bind(this);
        this.handlePreviewCancel = this.handlePreviewCancel.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault;

        const formData = new FormData();
        formData.append('post[id]', this.props.post.id);
        formData.append('post[body]', this.state.body);
        formData.id = this.props.post.id;
        formData.append('post[photo]', this.state.photoFile);

        this.props.updatePost(formData).then(this.props.closeModal)
        
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
        let photoInput = document.getElementById("file-upload-edit");
        photoInput.value = ""
    }


    handlePreviewCancel() {
        this.setState({ photoFile: null, photoUrl: null });
    }

    handleChange(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }


    cancelEnter(e) {
        if (e.charCode == 13) {
            e.preventDefault();
        }
    }

    render() {
        const {body, photoUrl} = this.props.post;
        const info = {body, photoUrl};
        const currentBody = this.state.body;
        const currentPhotoUrl = this.state.photoUrl;
        const checkState = Object.assign({}, { currentBody, currentPhotoUrl });
        const disabled = JSON.stringify(checkState) === JSON.stringify(info) ? "disabled" : ""; 

        let photo = this.state.photoUrl ? (<div className="edit-prev-cont" id="edit-prev-cont">
            <a onClick={this.handlePreviewCancel} className="boxclose" id="boxclose"></a>
            <img className="edit-preview" src={this.state.photoUrl} />
        </div>) : null

        return (
            <div className="update-post-wide">
                <h2>Edit Post</h2>
                <form onSubmit={this.handleSubmit} onKeyPress={this.cancelEnter} className="edit-port-form">
                    <textarea onChange={this.handleChange("body")} id="edit-post-TA" value={this.state.body}></textarea>
                    {photo}
                    <input type="submit" className={`edit-post-btn ${disabled}`} value="Update Post"/>
                    <label>
                        <i className="fas fa-photo-video">
                            <span>
                                Upload Photo
                                    <input onChange={this.handleFile} className="file-btn" type="file" id="file-upload-edit" />
                            </span>
                        </i>
                    </label>
                </form>
            </div>
        )
    }
}

export default UpdatePostForm;