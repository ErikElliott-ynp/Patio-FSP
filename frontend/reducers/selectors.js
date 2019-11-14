export const selectCommentsForPost = ({ entities }, post) => {
    let comments = entities.comments;
    return post.commentIds.map( commentId => comments[commentId])
}