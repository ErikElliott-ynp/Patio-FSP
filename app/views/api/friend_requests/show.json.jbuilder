json.friendRequest do
    json.partial! 'friend_request', friend_request: @friend_request
end
if @frienship 
    json.friendship do
        json.extract! @friendship, :id, :user_id, :friend_id
    end
end
