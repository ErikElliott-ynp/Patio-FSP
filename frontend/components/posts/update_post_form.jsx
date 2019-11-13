import React from "react";

class UpdatePostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.post.body,
            // photoFile: null,
            // photoUrl: this.props.post.photoUrl
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEnter = this.cancelEnter.bind(this);
        // this.handlePreviewCancel = this.handlePreviewCancel.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault;

        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.id = this.props.post.id;

        this.props.updatePost(formData).then(this.props.closeModal)
        
    } 

    // handleFile(e) {
    //     let file = e.currentTarget.files[0];
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({ photoFile: file, photoUrl: fileReader.result });
    //     }
    //     if (file) {
    //         fileReader.readAsDataURL(file);
    //     }
    //     this.setState({ photoFile: e.currentTarget.files[0] })
    //     let photoInput = document.getElementById("file-upload-edit");
    //     photoInput.value = ""
    // }


    // handlePreviewCancel() {
    //     this.setState({ photoFile: null, photoUrl: null });
    // }

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
        const disabled = (this.state.body === "" || this.state.body === this.props.post.body) ? "disabled" : ""; 

       

        return (
            <div className="update-post-wide">
                <h2>Edit Post Text</h2>
                <form onSubmit={this.handleSubmit} onKeyPress={this.cancelEnter} className="edit-port-form">
                    <textarea onChange={this.handleChange("body")} id="edit-post-TA" value={this.state.body}></textarea>
                
                    <input type="submit" className={`edit-post-btn ${disabled}`} value="Update Post"/>
                </form>
            </div>
        )
    }
}

export default UpdatePostForm;