class CommentsController < ApplicationController
    before_action :underscore_params!, only: :create
    before_action :require_login

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private 
    
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end

end
