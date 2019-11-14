export const selectCommentsForPost = ({ entities }, post) => {
    let comments = entities.comments;
    return post.commentIds.map( commentId => comments[commentId])
}

export const subscribeCommentsToItem = ({ entities }, post) => {
    let comments = [];
    Object.values(entities.comments).forEach(comment => {
        if (comment.postId === post.id) {
            comments.push(comment)
        }
    });
    return comments;
}