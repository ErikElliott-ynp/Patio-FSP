import React from "react";

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        let commentsCont = this.props.comments.map( comment => {
            <CommentContainer 
                comment={comment} 
                key={comment.id}
            />
        })
        
        return (
            <div className="comment-list-wide">
                {commentsCont}
            </div>
        )
    }
}

export default CommentList;