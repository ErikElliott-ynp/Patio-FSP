import React from "react";

const Like = (props) => {
    let num = props.isLiked ? (props.likes.length - 1) : props.likes.length > 0 ? props.likes.length : null;
    let intro = props.isLiked ? props.likes.length > 1 ? `You and ${num}` : `${props.currentUser.firstName}  ${props.currentUser.lastName}` : num;
    return (
        <div className="like-cont">
            <div className="like-icon"></div>
            <div className="like-words">
                {intro}
            </div>
            
        </div>
    )
}

export default Like;