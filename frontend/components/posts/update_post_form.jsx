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
    }



    handleSubmit(e) {
        e.preventDefault;

        const formData = new FormData();
        formData.append('post[profileId]', this.props.params.userId)
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }

        this.props.updatePost(formData).then(this.props.closeModal)
        
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
        const { currentBody, currentPhotoUrl } = this.state;
        const checkState = Object.assign({}, { currentBody, currentPhotoUrl });
        const disabled = JSON.stringify(checkState) === JSON.stringify(info) ? "disabled" : ""; 

        let photo = this.state.photoUrl ? (<div className="edit-prev-cont" id="edit-prev-cont">
            <a onClick={this.handlePreviewCancel} className="boxclose" id="boxclose"></a>
            <img className="edit-preview" src={this.state.photoUrl} />
        </div>) : null

        return (
            <div className="update-post-wide">
                <form onSubmit={this.handleSubmit} onKeyPress={this.cancelEnter} className="edit-port-form">
                    <textarea id="edit-post-TA" value=""></textarea>
                    {photo}
                    <input type="submit" className={`edit-post-btn ${disabled}`} value=""/>
                </form>
            </div>
        )
    }
}

export default UpdatePostForm;