import React from "react";

const Like = (props) => {
    let num = props.isLiked ? props.likes.length - 1 : props.likes.length
    let intro = props.isLiked ? `You and ${num} others` : {num}
    return (
        <div className="like-cont">
            {intro}
            <img src="" alt=""/>
            
        </div>
    )
}

export default Like;