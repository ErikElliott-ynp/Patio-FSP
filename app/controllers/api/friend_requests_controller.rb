class Api::FriendRequestsController < ApplicationController
    def index 
        @incoming = FriendRequest.where(friend: current_user)
        @outgoing = current_user.friend_requests
    end

    def create 
        friend = User.find_by(friend_id: params[:friend_request][:friend_id])
        @friend_request = current_user.friend_requests.new(friend: friend)
        if @friend_request.save 
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    def update
        @friend = User.find_by(friend_id: params[:friend_request][:friend_id])
        @friend_request = current_user.friend_requests.new(friend: @friend)
        if @friend_request.accept
            render :update
        else
            render json: @friend_request.errors.full_messages
        end
    end

    def destroy
        friend = User.find_by(friend_id: params[:friend_request][:friend_id])
        @friend_request = current_user.friend_requests.new(friend: friend)
        if @friend_request.destroy
            render json: {}
        else
            render @friend_request.errors.full_messages, status: 422
        end
    end
end
