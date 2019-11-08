import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authorId: this.props.user.id,
            profileId: this.props.profile,
            body: ""
        }
    }

    handleChange(field) {
        return (e) => this.setState( { [field]: e.target.value } );
    }

    render () {
        return (
            <div className="post-form-wide">
                <form className="post-form-21">
                    <div className="">
                        <span>Create Post</span>
                    </div>
                    <div className="form-cont">
                        <textarea 
                            placeholder={`What's on your mind, ${this.props.user.firstName}`}
                            id="post-ta" value={this.state.body}
                            onChange={this.handleChange('body')}>
                        </textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;