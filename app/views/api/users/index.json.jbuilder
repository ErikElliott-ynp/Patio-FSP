@users.each do |user|
    json.set! user.id do
        json.partial! 'user', user: user
        json.friendIds user.friend_ids
    end
end