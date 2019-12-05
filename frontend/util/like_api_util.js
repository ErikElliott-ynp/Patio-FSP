export const createLike = like => {
    return $.ajax({
        url: '/api/likes',
        method: 'POST'
    })
}

export const deleteLike = likeId => {
    return $.ajax({
        url: `/api/likes/${likeId}`,
        method: 'DELETE'
    })
}