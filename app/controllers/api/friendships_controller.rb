class Api::FriendshipsController < ApplicationController
    def destroy
        id = params.dig(:id)
        friendship = Friendship.find(id)
        if friendship.destroy
            render json: {}
        else
            render friendship.errors.full_messages, status: 422
        end
    end
end
