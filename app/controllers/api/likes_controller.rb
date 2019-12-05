class Api::LikesController < ApplicationController
    before_action :require_login

    def create 
        @like = Like.new(like_params)
        @like.user_id = current_user.id
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Link.find_by(id: params[:id])
        if @like && @like.destroy
            render json: {}
        else
            render json: ["You haven't liked this"], status: 404 
        end
    end

    private
    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id)
    end
end
