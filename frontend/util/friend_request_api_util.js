export const createFriendRequest = friendRequest => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: 'POST',
        data: { friend_request: friendRequest }
    })
}

export const acceptFriendRequest = friendRequestId => {
    return $.ajax({
        url: `/api/friend_request/${friendRequestId}`,
        method: 'PATCH'
    })
}

export const denyFriendRequest = friendRequestId => {
    return $.ajax({
        url: `/api/friend_request/${friendRequestId}`,
        method: 'DELETE'
    })
}