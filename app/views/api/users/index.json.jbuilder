@users.each do |user|
    json.set! user.id do
        json.partial! 'user', user: user
        json.pendingFriendIds user.pending_friend_ids
        json.friendIds user.friend_ids
    end
end