export const createFriendRequest = friend_request => {
    return $.ajax({
        url: '/api/friend_requests',
        method: 'POST',
        data: { friend_request }
    })
}