json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! 'user', user: user
        end
    end
end
json.friendRequests do
    @users.each do |user|
        user.friend_requests.each do |request|
            json.set! request.id do
                json.partial! 'api/friend_requests/friend_request', friend_request: request
            end
        end
    end
end
