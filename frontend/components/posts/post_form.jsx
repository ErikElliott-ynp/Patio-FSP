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
    render () {
        return (
            <div className="post-form-wide">
                
            </div>
        )
    }
}

export default PostForm;