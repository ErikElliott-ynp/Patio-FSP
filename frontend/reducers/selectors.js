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

export const subscribeLikestoItem = ({ entities }, post) => {
    let likes = [];
    Object.values(entities.likes).forEach( like => {
        if (like.likeableType === 'Post' && like.likeableId === post.id ) {
            likes.push(like);
        }
    })
    return likes;
}

export const fakeFriends = ({ entities}) => {
    let allUsers = Object.values(entities.users);
    let randomFriends = [];
    const shuffle = (array) => {
        array.sort(() => Math.random() - .5)
        return array;
    }
    while (randomFriends.length < 4) {
        let friend = shuffle(allUsers).pop();
        randomFriends.push(friend);
    }
    return randomFriends;
}

