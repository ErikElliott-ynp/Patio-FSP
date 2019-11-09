import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profileId: this.props.profile,
            body: "",
            photoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState( { [field]: e.target.value } );
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState( {photoFile: file, photoUrl: fileReader.result} );
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
        this.setState( { photoFile: e.currentTarget.files[0]} )
    }

    handleSubmit(e) {
       
        e.preventDefault;
        const formData = new FormData();
        formData.append('post[profileId]', this.state.profileId)
        formData.append('post[body]', this.state.body);
        formData.append('post[photo]', this.state.photoFile);

        this.props.createPost(formData).then(() => this.setState( { body: "" } ))
    } 

    componentWillUnmount() {
        this.setState({
            authorId: this.props.user.id,
            profileId: this.props.profile,
            body: ""
        })
    }


    render () {
        const preview = this.state.photoUrl ? <img className="img-preview" src={this.state.photoUrl} /> : null;
        return (
            <div className="post-form-wide">
                <form className="post-form-21" onSubmit={this.handleSubmit}>
                    <div className="post-form-header">
                        <i className="fas fa-pencil-alt"></i>
                        <span>Create Post</span>
                    </div>
                    <div className="form-body">
                        <div className="post-prof-img">
                            <img src="#" alt="#"/>
                        </div>
                        <textarea onKeyPress={(e) => {e.target.keyCode === 13  && e.preventDefault()}}
                            placeholder={`What's on your mind, ${this.props.user.firstName}`}
                            id="post-ta" value={this.state.body} className="text-a-post"
                            onChange={this.handleChange('body')}>
                        </textarea>
                    </div>

                    
                        {/* {preview} */}
                    
                    <div className="post-form-footer">
                        <i className="fas fa-photo-video"> <span> Upload Photo</span> </i>
                        <input onChange={this.handleFile} type="file" id="file-upload"/>
                        <input type="submit" value="Post" className="post-submit-btn"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;